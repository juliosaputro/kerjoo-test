import { createSlice } from "@reduxjs/toolkit";

const dataReducer = createSlice({
    name:'dataReducer',
    initialState:{
        id_prov:{
            value:''
        },
        id_kab:{
            value:''
        },
        id_kec:{
            value:''
        },
        id_desa:{
            value:''
        }
    },
    reducers:{
        idData(state, action){
            const {payload:{field, value}}=action
            state[field].value = value
        } 
    }
})

export const {idData} = dataReducer.actions
export default dataReducer.reducer