import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     menus: ["Model S", "Model 3", "Model X", "Model Y", "Solar Roof", "Solar Panels","Existing Inventory", "Used Inventory","Trade-In", "Test Drive", "Powerwall","Commercial Energy", "Utilities", "Charging","Find Us", "Support", "Investor Relations","Shop", "Account"]
}


const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers: {}
})


export const selectMenus = state => state.menu.menus


export default menuSlice.reducer