import { Grid, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
function Calculator() {
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [result, setResult] = useState(null);

  const handleChangeA = (e) => {
    let v = Number(e.target.value);
    setA(e.target.value);
    setResult(Number(b) + v);
  };
  const handleChangeB = (e) => {
    let v = Number(e.target.value);
    setB(e.target.value);
    setResult(Number(a) + v);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper>
            <TextField
              label="Input a"
              placeholder="a *"
              onChange={handleChangeA}
            />
            <TextField
              label="Input b"
              placeholder="b *"
              onChange={handleChangeB}
            />
            <TextField label="" placeholder="" value={result} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Calculator;
