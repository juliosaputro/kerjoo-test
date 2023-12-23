import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";


let host = 'https://api.kerjoo.com/api/v1/reference/'

export function useGet() {


    const [successRes, setSuccessRes] = useState({})
    const [errorsRes, setErrorsRes] = useState({})

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    function req(args = {}, endpoint = "") {
        setLoading(true)
        setSuccessRes({})
        setErrorsRes({})
        setSuccess(false)
        setFailed(false)

        const url = `${host}${endpoint}`;

        const options = {
            method: 'GET',
            headers:{
                'Content-Type': "application/json",
                'Accept': "application/json",
            },
            params:args,
            url
        };
        axios(options)
        .then((res)=>{
            // console.log('res', res)
            setSuccessRes(res);
        setFailed(false);
        setSuccess(true);
        setLoading(false);
        })
        .catch((e)=>{
            setErrorsRes(e.response);
            setSuccessRes({})
            setFailed(true)
            setSuccess(false)
            setLoading(false)
            console.log("error :", e)
        })
    }

    const feedback = {
        success_res: successRes.data,
        error_res:errorsRes,
        loading:loading,
        success:success,
        failed:failed,

    }
    return [req, feedback]
}