import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    datas: [],
    data: {},
    isLoading: false,
    isSuccess: false,
    message: ''
}

//call axios.get --> LIST
export const getUsers = createAsyncThunk(
    "getUsers",
    async () => {
        try{
             const res = await axios.get('http://localhost:8000/users')
             console.log("++ getUsers> res:: ", res )
             return res.data;

        }catch(error) {
            console.log("++Err:: ", error.message() )
        }
    }
)

export const getUser = createAsyncThunk(
    "getUser",
    async (payload) => {
        try{
             const res = await axios.get('http://localhost:8000/users/' + payload.id)
             console.log("++ getUsers> res:: ", res )
             return res.data;

        }catch(error) {
            console.log("++Err:: ", error.message() )
        }
    }
)

export const deleteUser = createAsyncThunk(
    "delete/user",
    (payload) => {
        try{
            console.log("++ deleteUser::id ", payload.id )  
            const resp = axios.delete('http://localhost:8000/users/' + payload.id )
            
            console.log("++ res:: ", resp )
            return { id: payload.id }

        }catch(error) {
            console.log("++ Err:: ", error.message())  
        }
    }
)

export const updateUser = createAsyncThunk(
    "user/updateUser",
    (payload) => {
        try{
             const res = axios.put("http://localhost:8000/users/" + payload.id, 
                                     payload
                                   )

             return res.data;

        }catch(err) {

        }  
    }
)

export const registUser = createAsyncThunk(
    "user/register",
    (payload) => {
        try{
             const res = axios.post("http://localhost:8000/users", 
                                     payload
                                   )

             return res.data;

        }catch(err) {

        }  
    }
)

export const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers: {},
    extraReducers: {
      [getUsers.fulfilled]: (state, action) => {
         console.log( "++ getUsers.fulfilled>> action.payload ", action.payload)
         state.datas = action.payload
      },
      [getUser.fulfilled]: (state, action) => {
        console.log( "++ getUsers.fulfilled>> action.payload ", action.payload)
        state.data = action.payload
     },
    //   [deleteUser.fulfilled]: (state, action) => {
    //      console.log("++ action.payload:: ", action.payload)
    //      state.datas.filter( item => item.id !== action.payload.id )

    //      console.log("++ state.datas:: ", state.datas )
    //   }
    }
})


export default UserSlice;