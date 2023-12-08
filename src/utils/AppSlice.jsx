import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
        videoId : "",

    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false
        },
        videoId:(state,action)=>{
            
        }
    }
})
export const {toggleMenu,closeMenu}= AppSlice.actions

export default AppSlice.reducer