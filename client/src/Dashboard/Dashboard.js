import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./Orders";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import DataTables from "./Data_Table";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Kapil
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 0;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);

  const [stockprice, setstockprice] = useState("");
  const [stockunit, setstockunit] = useState("");
  const [stockdate, setstockdate] = useState("");

  const [dropdown, setdropdown] = useState("");

  const [status, setstatus] = useState();

  const data = {
    name: dropdown,
    price_of_stock: stockprice,
    status: status,
    no_of_units: stockunit,
    transaction_date: stockdate,
  };

  // console.log(data);

  const GetInputs = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/shares", data)
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });

    setstockdate("");
    setstockprice("");
    setstockunit("");
    setstatus("");
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard!
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary"></Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {/* <DataTables /> */}
          <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <form action="submit">
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 240,
                      spacing: 3,
                      width: 500,
                    }}
                  >
                    <FormControl>
                      <InputLabel>Shares</InputLabel>
                      <Select onChange={(e) => setdropdown(e.target.value)}>
                        <MenuItem value={"nabil"}>
                          Nabil Debenture 2082
                        </MenuItem>
                        <MenuItem value={"sbi"}>
                          Nepal SBI Bank Debenture 2086
                        </MenuItem>
                        <MenuItem value={"prabhu"}>
                          Prabhu Bank Debenture 2084
                        </MenuItem>
                        <MenuItem value={"nic"}>
                          NIC Asia Debenture 2083/84
                        </MenuItem>
                        <MenuItem value={"adbl"}>
                          Agricultural Bank Debenture 2083
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Paper>

                  <TextField
                    label="Price per Stock"
                    variant="filled"
                    color="success"
                    focused
                    sx={{
                      width: 120,
                      color: "success.main",
                    }}
                    value={stockprice}
                    onChange={(e) => setstockprice(e.target.value)}
                  />
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Status(Buy/Sell)</FormLabel>
                    <RadioGroup
                      row
                      aria-label="status"
                      name="row-radio-buttons-group"
                      onClick={(e) => setstatus(e.target.value)}
                    >
                      <FormControlLabel
                        value={"buy"}
                        control={<Radio />}
                        label="buy"
                      />
                      <FormControlLabel
                        value={"sale"}
                        control={<Radio />}
                        label="sale"
                      />
                    </RadioGroup>
                  </FormControl>
                  <TextField
                    label="No Of Unit"
                    variant="filled"
                    color="success"
                    focused
                    sx={{
                      width: 140,
                      color: "success.main",
                    }}
                    value={stockunit}
                    onChange={(e) => setstockunit(e.target.value)}
                  />
                  <TextField
                    label="transaction DAte"
                    variant="filled"
                    color="success"
                    focused
                    value={stockdate}
                    onChange={(e) => setstockdate(e.target.value)}
                  />
                  <br />
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={GetInputs}
                  >
                    Send
                  </Button>
                </form>
              </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <DataTables />
              </Grid>
              {/* Recent Orders*/}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
