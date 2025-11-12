import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LineChart } from "@mui/x-charts/LineChart";

function App() {
  const [luogo, setLuogo] = useState("");
  const [orari, setOrari] = useState([]);
  const [temperatura, setTemperatura] = useState([]);

  useEffect(() => {
    async function cercaMeteo(lat, long) {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=1"
      );
      const result = await response.json();
      console.log(result.hourly);
      setOrari(
        result.hourly.time?.map((item) => Number(item.slice(11).slice(0, 2)))
      );
      setTemperatura(result.hourly.temperature_2m);
    }
    cercaMeteo(52.52, 13.41);
  }, []);
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
      {JSON.stringify(orari)}
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
        <Item>size=8</Item>
        <LineChart
          xAxis={[{ data: orari }]}
          series={[
            {
              data: temperatura,
            },
          ]}
          height={600}
        />
      </Grid>
    </Grid>
  );
}

export default App;
