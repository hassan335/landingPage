import React from "react";
// import "header.css";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import logo from "../images/logo.PNG";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="header">
      <Grid container spacing={2} style={{ height: "100px" }}>
        <Grid item md={2}>
          <img
            src={logo}
            height={"80px"}
            width={"130px"}
            style={{ marginTop: "20px" }}
          />
        </Grid>
        <Grid item md={7} className="" style={{ paddingTop: "50px" }}>
          <Paper
            component="form"
            style={{ border: "2px solid orange" }}
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 740,
              borderRadius: "50px",
              height: "40px",
            }}
          >
            {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <InputBase
              className="rounded"
              sx={{ ml: 1, flex: 1 }}
              placeholder="What are you looking for..."
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <CameraAltIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              style={{
                backgroundColor: "Orange",
                borderRadius: "0px 50px 50px  0px",
              }}
            >
              Search
            </Button>{" "}
          </Paper>
        </Grid>
        <Grid item md={3}>
          <Grid md={12} container>
            <Grid
              md={3}
              className=""
              style={{ marginTop: "30px", height: "50px" }}
            >
              <FaceRetouchingNaturalIcon />
              <Typography
                varient="Peragraph"
                style={{ fontSize: "12px", cursor: "pointer" }}
              >
                Sign In <br /> join Free
              </Typography>
            </Grid>
            <Grid md={3} className="" style={{ marginTop: "30px" }}>
              <ForumIcon />
              <Typography
                varient="Peragraph"
                style={{ fontSize: "12px", cursor: "pointer" }}
              >
                Messages
              </Typography>
            </Grid>
            <Grid md={3} className="" style={{ marginTop: "30px" }}>
              <MonetizationOnIcon />
              <Typography
                varient="Peragraph"
                style={{ fontSize: "12px", cursor: "pointer" }}
              >
                Orders
              </Typography>
            </Grid>
            <Grid style={{ marginTop: "30px" }}>
              <ShoppingCartIcon />
              <Typography
                varient="Peragraph"
                style={{ fontSize: "12px", cursor: "pointer" }}
              >
                Cart
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: "10px" }} />
    </div>
  );
}

export default Header;
