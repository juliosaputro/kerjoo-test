import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { IsMobile, IsTablet, IsWeb } from "../helper/responsive";
import { useNavigate } from "react-router-dom";

export default function TestGrid() {
    const navigate = useNavigate()
  return (
    <>
    <Grid container spacing={2}>
      {IsWeb() && (
        <>
          <Grid item xs={6} md={3}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
        </>
      )}
      {IsTablet() && (
        <>
          <Grid item xs={6} md={3}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
        </>
      )}
      {IsMobile() && (
        <>
          <Grid item xs={12}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Lorem Ipsum</Typography>
          </Grid>
        </>
      )}
    </Grid>
    <Box position={'absolute'} bottom={200} padding={5}>
      <Button variant="contained" color="primary" onClick={()=>navigate('/test-flex')}>
      To Test Flex
      </Button>
    </Box>
    </>
  );
}
