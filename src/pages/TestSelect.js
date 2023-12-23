import React, { useEffect, useState } from "react";
import { useGet } from "../helper/request";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { idData } from "../reducers/dataReducer";
import { IsMobile, IsTablet, IsWeb } from "../helper/responsive";

export default function TestSelect() {
  const dispatch = useDispatch();
  const { dataReducer } = useSelector((s) => s);
  const [fetch_list_prov, res_list_prov] = useGet();
  const [listProv, setListProv] = useState([]);

  // get prov
  function fetch_prov() {
    fetch_list_prov({}, "provinces");
  }

  useEffect(() => {
    fetch_prov();
  }, []);

  useEffect(() => {
    if (res_list_prov.success) {
      setListProv(res_list_prov.success_res);
    }
  }, [res_list_prov.success]);

  useEffect(() => {
    if (res_list_prov.failed) {
      console.log("error get", res_list_prov.error_res);
    }
  }, [res_list_prov.failed]);

  // get kab
  const [fetch_list_kab, res_list_kab] = useGet();
  const [listKab, setListKab] = useState([]);

  function fetch_kab() {
    fetch_list_kab({}, `regencies_of/${dataReducer.id_prov.value}`);
  }

  useEffect(() => {
    fetch_kab();
  }, [dataReducer.id_prov.value]);

  useEffect(() => {
    if (res_list_kab.success) {
      setListKab(res_list_kab.success_res);
    }
  }, [res_list_kab.success]);

  useEffect(() => {
    if (res_list_kab.failed) {
      console.log("error get", res_list_kab.error_res);
    }
  }, [res_list_kab.failed]);

  // get kec
  const [fetch_list_kec, res_list_kec] = useGet();
  const [listKec, setListKec] = useState([]);

  function fetch_kec() {
    fetch_list_kec({}, `regencies_of/${dataReducer.id_prov.value}`);
  }

  useEffect(() => {
    fetch_kec();
  }, [dataReducer.id_kab.value]);

  useEffect(() => {
    if (res_list_kec.success) {
      setListKec(res_list_kec.success_res);
    }
  }, [res_list_kec.success]);

  useEffect(() => {
    if (res_list_kec.failed) {
      console.log("error get", res_list_kec.error_res);
    }
  }, [res_list_kec.failed]);

  // get desa
  const [fetch_list_desa, res_list_desa] = useGet();
  const [listDesa, setListDesa] = useState([]);

  function fetch_desa() {
    fetch_list_desa({}, `regencies_of/${dataReducer.id_prov.value}`);
  }

  useEffect(() => {
    fetch_desa();
  }, [dataReducer.id_kec.value]);

  useEffect(() => {
    if (res_list_desa.success) {
      setListDesa(res_list_desa.success_res);
    }
  }, [res_list_desa.success]);

  useEffect(() => {
    if (res_list_desa.failed) {
      console.log("error get", res_list_desa.error_res);
    }
  }, [res_list_desa.failed]);

  // handle Id
  const handleChangeProv = (event) => {
    dispatch(
      idData({
        field: "id_prov",
        value: event.target.value,
      })
    );
  };

  const handleChangeKab = (event) => {
    dispatch(
      idData({
        field: "id_kab",
        value: event.target.value,
      })
    );
  };

  const handleChangeKec = (event) => {
    dispatch(
      idData({
        field: "id_kec",
        value: event.target.value,
      })
    );
  };

  const handleChangeDesa = (event) => {
    dispatch(
      idData({
        field: "id_desa",
        value: event.target.value,
      })
    );
  };

  return (
    <Container maxWidth="xl">
      {IsWeb() && (
        <Box
          flex={1}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={5}
        >
          <SelectComp
            title="Provinsi"
            datas={listProv}
            onChange={handleChangeProv}
          />
          <SelectComp
            title="Kabupaten"
            datas={listKab}
            onChange={handleChangeKab}
          />
          <SelectComp
            title="Kecamatan"
            datas={listKec}
            onChange={handleChangeKec}
          />
          <SelectComp
            title="Desa"
            datas={listDesa}
            onChange={handleChangeDesa}
          />
        </Box>
      )}
      {IsTablet() && (
        <Box
          flex={1}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={5}
        >
          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <SelectComp
              title="Provinsi"
              datas={listProv}
              onChange={handleChangeProv}
            />
            <SelectComp
              title="Kabupaten"
              datas={listKab}
              onChange={handleChangeKab}
            />
          </Box>
          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <SelectComp
              title="Kecamatan"
              datas={listKec}
              onChange={handleChangeKec}
            />
            <SelectComp
              title="Desa"
              datas={listDesa}
              onChange={handleChangeDesa}
            />
          </Box>
        </Box>
      )}
      {IsMobile() && (
        <Box
          flex={1}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={5}
        >
          <SelectComp
            title="Provinsi"
            datas={listProv}
            onChange={handleChangeProv}
          />
          <SelectComp
            title="Kabupaten"
            datas={listKab}
            onChange={handleChangeKab}
          />
          <SelectComp
            title="Kecamatan"
            datas={listKec}
            onChange={handleChangeKec}
          />
          <SelectComp
            title="Desa"
            datas={listDesa}
            onChange={handleChangeDesa}
          />
        </Box>
      )}
    </Container>
  );
}

const SelectComp = ({ title = "", datas, onChange }) => (
  <FormControl fullWidth style={{ margin: 3 }}>
    <InputLabel id="demo-simple-select-label">{title}</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label={title}
      onChange={onChange}
    >
      {datas.map((val, index) => (
        <MenuItem key={index} value={val.id}>
          {val.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
