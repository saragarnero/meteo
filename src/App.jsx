import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LineChart } from '@mui/x-charts/LineChart';

function App() {
  const [luogo, setLuogo] = useState("");
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#2d5cdfff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
    
  }));
  return (
    <Grid container spacing={2}>
      <Grid size={8}>
        <TextField
          id="outlined-basic"
          label="Luogo"
          variant="outlined"
          onChange={(item) => setLuogo(item.target.value)}
        />
      </Grid>
      <Grid size={4}>
        <Button variant="contained" onClick={() => console.log(luogo)}>
          Cerca
        </Button>
      </Grid>
      <Grid size={4}>
        <Item>size=4</Item>
      </Grid>
      <Grid size={8}>
        <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      height={600}
    />npm
      </Grid>
    </Grid>
  );
}

export default App;
