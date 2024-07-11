import {configureStore} from "@reduxjs/toolkit"
import userSlice  from "./slices/userSlice.js"


const store = configureStore({
    reducer: {
        custom2: userSlice,
    }
})

export default store