import { Fragment, useEffect, useState } from "react";
import Map from "./map";
import { MapContainer, Marker, Polyline, Popup, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Box, Button, Grid, IconButton, TextField, Typography, makeStyles } from "@material-ui/core";
import DirectionsIcon from '@material-ui/icons/Directions';
import LoadingScreen from "./loading";
import L from "leaflet";
import { API_KEY } from "./constant";

const useStyles = makeStyles({
  container: {
    height: "100%"
  },
});

const icon = L.icon({
  iconUrl: "../../../../../../../placeholder.png",
  iconSize: [38, 38],
});

const NOMINATIM_REVERSE_URL = "https://nominatim.openstreetmap.org/reverse.php";
const OPEN_ROUTE_SERVER_URL = "https://api.openrouteservice.org/v2/directions/driving-car";

const reverse = async (lat, lon) => {
  console.log("reverse to get address name");
  const response = await fetch(`${NOMINATIM_REVERSE_URL}?lat=${lat}&lon=${lon}&format=jsonv2`);
  const json = await response.json();
  console.log("response=> ", json);
  return json;
}

const App = () => {
  const position = [51.505, -0.09];
  const [selectedPosition, setSelectedPosition] = useState(position);
  const [sourAddress, setSourAddress] = useState(null);
  const [destAddress, setDestAddress] = useState(null);
  const [sourCoor, setSourCoor] = useState(null);
  const [destCoor, setDestCoor] = useState(null);

  const [isChoosingSour, setChoosingSour] = useState(false);
  const [isChoosingDest, setChoosingDest] = useState(false);
  const [route, setRoute] = useState([]);

  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  // this component is used for get coordinate when user click on MapContainer 
  const LocationFinderDummy = () => {
    const map = useMapEvents({
      async click(e) {
        if ( !(isChoosingSour || isChoosingDest) ) {
          return;
        }
        console.log(e.latlng);
        const position = { lat: e.latlng.lat, lon: e.latlng.lng };
        setSelectedPosition({ lat: e.latlng.lat, lon: e.latlng.lng });
        if (isChoosingSour) {
          setSourCoor(position);
          setLoading(true);
          const sourAdd = await reverse(position.lat, position.lon);
          setLoading(false);
          setSourAddress(sourAdd.display_name);
          setChoosingSour(false);
        }
        if (isChoosingDest) {
          setDestCoor(position);
          setLoading(true);
          const destAdd = await reverse(position.lat, position.lon);
          setLoading(false);
          setDestAddress(destAdd.display_name);
          setChoosingDest(false);
        }
      },
    });
    return null;
  };

  const getRoute = async () => {
    setLoading(true);
    const response = await fetch(`${OPEN_ROUTE_SERVER_URL}?api_key=${API_KEY}&start=${sourCoor.lon},${sourCoor.lat}&end=${destCoor.lon},${destCoor.lat}`);
    const json = await response.json();
    
    // swap element of response array because Polyline points is in format [{ lat: , lon: }] but Open Route Service response is in format [{ lon: , lat: }]
    var originRoute = json?.features[0]?.geometry?.coordinates;
    for (var i = 0; i < originRoute?.length; i++) {
      originRoute[i] = [originRoute[i][1], originRoute[i][0]];
    }
    setRoute(originRoute);
    setLoading(false);
  }

  return (
    loading ? <LoadingScreen /> :
    <div>
      <Fragment>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Grid container spacing={3} className={classes.container}>
            <Grid item xs={6}>
                <Typography>Bắt đầu
                  <IconButton onClick={() => { setChoosingDest(false); setChoosingSour(true); } }>
                    <DirectionsIcon />
                  </IconButton>
                </Typography>
                
              <TextField fullWidth value={sourAddress} ></TextField>

              <Typography>Kết thúc
                <IconButton onClick={() => { setChoosingSour(false); setChoosingDest(true); } }>
                  <DirectionsIcon />
                </IconButton>
              </Typography>
              <TextField fullWidth value={destAddress}></TextField>

              <Button color="primary" onClick={getRoute}>Tìm đường</Button>
            </Grid>
            <Grid item xs={6}>
              <MapContainer center={selectedPosition} zoom={13} scrollWheelZoom={false}
                style={{ width: "100%", height: "100%" }}>
                <LocationFinderDummy />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                  sourCoor != null &&
                  <Marker position={sourCoor} icon={icon}>
                    <Popup>
                      Điểm bắt đầu
                    </Popup>
                  </Marker>
                }
                {
                  destCoor != null && 
                  <Marker position={destCoor} icon={icon}>
                    <Popup>
                      Điểm kết thúc
                    </Popup>
                  </Marker>
                }
                {
                  route != null && route.length > 0 &&
                  <Polyline positions={route} />
                }
              </MapContainer>
            </Grid>
          </Grid>
        </Box>
      </Fragment>
    </div>
  );
}

export default App;
