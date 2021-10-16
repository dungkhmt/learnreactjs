import { Button, IconButton, Paper } from "@material-ui/core";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import EditIcon from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import axios from "axios";
import MaterialTable from "material-table";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Users() {
  const history = useHistory();
  const columns = [
    { title: "Username", field: "userLoginId" },
    { title: "Email", field: "email" },
    { title: "Created Stamp", field: "createdStamp" },
    {
      title: "",
      render: (rowData) => (
        <IconButton
          onClick={() => {
            //alert("edit " + rowData["userLoginId"])
            history.push("/edit-user/" + rowData["userLoginId"]);
          }}
        >
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  const handleClickAdd = () => {
    history.push("/create-user");
  };
  return (
    <div style={{ padding: 10 }}>
      <Paper>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ padding: 10 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickAdd}
            >
              Add
            </Button>
          </div>
        </div>
        <MaterialTable
          title="User management"
          icons={{
            Check: Check,
            DetailPanel: ChevronRight,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            ThirdStateCheck: Remove,
          }}
          options={{
            search: false,
            sorting: false,
          }}
          columns={columns}
          data={(query) =>
            new Promise((resolve, reject) => {
              console.log("query = ", query);
              let url =
                "http://localhost:8080/list-page-users?page=" +
                `${query.page}` +
                "&size=" +
                `${query.pageSize}`;
              let token = localStorage.getItem("token");
              console.log("token = ", token);
              axios
                .get(url, { headers: { "x-auth-token": token } })
                .then((res) => res.data)
                .then((res) => {
                  console.log("res = ", res);
                  resolve({
                    data: res.content,
                    page: query.page,
                    totalCount: res.totalElements,
                  });
                })
                .catch((err) => {
                  console.log("Catch exception err = ", err);
                  if (err.response.status == 401) {
                    history.push("/login");
                  } else {
                    console.log("Catch exception not 401");
                  }
                });
            })
          }
        />
      </Paper>
    </div>
  );
}
