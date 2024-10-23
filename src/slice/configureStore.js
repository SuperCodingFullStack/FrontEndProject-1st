import { configureStore } from "@reduxjs/toolkit";
import menuOnSlice from "./menuOnSlice";

const store = configureStore({
    reducer: {
        menuOnOff: menuOnSlice.reducer
    }
})

export default store;