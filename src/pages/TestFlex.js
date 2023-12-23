import React from "react";
import {
  Box,
  Container,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { IsMobile, IsTablet, IsWeb } from "../helper/responsive";
import { useNavigate } from "react-router-dom";

export default function TestFlex() {
    const navigate = useNavigate()
  return (
    <>
      {IsWeb() && (
        <Container maxWidth="xl">
          <Box
            flex={1}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={5}
          >
            <Box>
              <Button variant="contained" color="primary">
                Tambah
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginInline: 5 }}
              >
                Import
              </Button>
              <Button variant="contained" color="primary">
                Export
              </Button>
            </Box>

            <Box>
              <TextField label="Search" variant="outlined" fullWidth />
            </Box>
            <Box flex={1} maxWidth={150}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Year"
                >
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Container>
      )}
      {IsTablet() && (
        <Container maxWidth="xl">
          <Box
            flex={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={5}
          >
            <Box>
              <Button variant="contained" color="primary">
                Tambah
              </Button>
              <Button
                variant="contained"
                color="primary"
                style={{ marginInline: 5 }}
              >
                Import
              </Button>
              <Button variant="contained" color="primary">
                Export
              </Button>
            </Box>
          </Box>
          <Box
            flex={1}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            padding={5}
          >
            <Box>
              <TextField label="Search" variant="outlined" fullWidth />
            </Box>
            <Box flex={1} maxWidth={150}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Year"
                >
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Container>
      )}
      {IsMobile() && (
        <Container maxWidth="xl">
          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={5}
          >
            <Box
              flex={1}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              padding={5}
            >
              <Button size="small" variant="contained" color="primary">
                Tambah
              </Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                style={{ marginInline: 5 }}
              >
                Import
              </Button>
              <Button size="small" variant="contained" color="primary">
                Export
              </Button>
            </Box>

            <Box flex={1} padding={2}>
              <TextField label="Search" variant="outlined" fullWidth />
            </Box>
            <Box flex={1} width={220}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Year</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Year"
                >
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Container>
      )}
      <Box position={"absolute"} bottom={200} padding={5}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/test-select")}
        >
          To Test Select
        </Button>
      </Box>
    </>
  );
}
