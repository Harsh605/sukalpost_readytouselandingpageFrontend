import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const login = createAsyncThunk("login", async ({ email, password }, { rejectWithValue }) => {
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/login`
    const config = {
        headers: {
            "Content-Type": "application/json"         //bina config ke cookie nhi set honi dhyan rakhna
        },
        withCredentials: true
    }
    try {
        const response = await axios.post(url, { email, password }, config); // replace with your API endpoint and data
        return response.data;
    }
    catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const register = createAsyncThunk("register", async ({ name, email, password, avatar }, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/register`
    try {
        const response = await axios.post(url, { name, email, password, avatar }, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const sendQuery = createAsyncThunk("sendQuery", async ({ name, contactNo, softwareName, description }, { rejectWithValue }) => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/sendQuery`
    try {
        const response = await axios.post(url, { name, contactNo, softwareName, description }, config); // replace with your API endpoint and data
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const getAllQueries = createAsyncThunk("getAllQueries", async () => {
    const config = {
        headers: {
            "Content-Type": "application/multipart/form-data"
        },
        withCredentials: true
    }
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/admin/allEmails`
    try {
        const response = await axios.post(url, {}, config)
        return response.data;
    } catch (error) {
        return console.log("Error")
    }
})


export const logout = createAsyncThunk("logout", async (_, { rejectWithValue }) => {
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/logout`

    try {
        await axios.post(url, {}, { withCredentials: true });
    } catch (error) {
        return rejectWithValue(error.response.data)
    }


})
export const loadUser = createAsyncThunk("loadUser", async () => {
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/me`
    const config = {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    }
    try {
        const response = await axios.post(url, {}, config); // replace with your API endpoint and data
        return response.data;
    }
    catch (error) {
        throw new Error(error.response.data.error)
    }
})

export const updatePassword = createAsyncThunk("updatePassword", async ({ oldPassword, newPassword, confirmPassword }) => {
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/password/Update`
    const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };
    try {
        const response = await axios.put(url, { oldPassword, newPassword, confirmPassword }, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }


})
export const updateProfile = createAsyncThunk("updateProfile", async ({ name, email, avatar }) => {
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/me/Update`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.put(url, { name, email, avatar }, config)
        return response.data
    } catch (error) {
        return error.response.data.error
    }
})

export const getAllUsers = createAsyncThunk("getAllUsers", async () => {

    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/admin/users`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data.users
    } catch (error) {
        return error.response.data.error
    }
})
export const getSingleUser= createAsyncThunk("getSingleUser", async () => {

    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/admin/users`
    const config = { headers: { "Content-Type": "application/multipart/form-data" }, withCredentials: true };
    try {
        const response = await axios.post(url, {}, config)
        return response.data.users
    } catch (error) {
        return error.response.data.error
    }
})

export const deleteUser = createAsyncThunk("deleteUser", async (id,{ rejectWithValue }) => {
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/admin/user/delete/${id}`
    const config = { headers: { "Content-Type": "application/json" },withCredentials: true };
    try {
        const response = await axios.post(url,{},config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const editRoleOfUser = createAsyncThunk("editRoleOfUser", async (id,{ rejectWithValue }) => {
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/admin/user/update/${id}`
    const config = { headers: { "Content-Type": "application/json" },withCredentials: true };
    try {
        const response = await axios.put(url,{},config)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})
export const getSingleUserAdmin = createAsyncThunk("getSingleUserAdmin", async (id,{ rejectWithValue }) => {
    let url = `https://backendreadytousesoftware.sukalpsoft.com/api/v1/admin/user/${id}`
    const config = { headers: { "Content-Type": "application/json" },withCredentials: true };
    try {
        const response = await axios.post(url,{},config)
        return response.data.user
    } catch (error) {
        return rejectWithValue(error.response.data.error)
    }
})





export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        isAuthenticated: false,
        error: null,
        userData: null,
        isUpdated: false,
        isSent:false,
        allUsers: [],
        emailData: null,
        data:null,
        SingleUserAdmin:null
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendQuery.pending, (state) => {
                state.isLoading = true
                state.isSent = false
            })
            .addCase(sendQuery.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSent = true
            })
            .addCase(sendQuery.rejected, (state, action) => {
                state.isSent = false
                state.isLoading = false
            })
            .addCase(getAllQueries.pending, (state) => {
                state.isLoading = true
                state.isSent = false
                state.emailData = null
            })
            .addCase(getAllQueries.fulfilled, (state, action) => {
                state.isLoading = false
                state.emailData = action.payload.emails
            })
            .addCase(getAllQueries.rejected, (state, action) => {
                state.isSent = false
                state.isLoading = false
                state.emailData = null
            })
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isAuthenticated = true
                state.userData = action.payload.user
            })
            .addCase(register.rejected, (state, action) => {
                state.error = action.payload
                state.isAuthenticated = false
                state.isLoading = false
                state.userData = null
            })

            .addCase(login.pending, (state) => {
                state.isLoading = true

            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isAuthenticated = true
                state.userData = action.payload.user
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload
                state.isAuthenticated = false
                state.isLoading = false
                state.userData = null

            })

            .addCase(logout.fulfilled, (state, action) => {
                state.isLoading = false
                state.isAuthenticated = false
                state.userData = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false

            })

            .addCase(loadUser.pending, (state) => {
                state.isLoading = true
                state.isAuthenticated = false
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isAuthenticated = true
                state.userData = action.payload.user
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.error = action.error.message
                state.isAuthenticated = false
                state.isLoading = false
                state.userData = null

            })
            .addCase(updatePassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updatePassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isUpdated = action.payload.success

            })
            .addCase(updatePassword.rejected, (state, action) => {
                state.error = action.error
                state.isUpdated = action.payload.success
                state.isLoading = false

            })
            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.isUpdated = action.payload.success

            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.error = action.error
                state.isUpdated = action.payload.success
                state.isLoading = false

            })

            .addCase(deleteUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload

            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.error = action.error
                state.data = null
                state.isLoading = false

            })
            .addCase(editRoleOfUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(editRoleOfUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload

            })
            .addCase(editRoleOfUser.rejected, (state, action) => {
                state.error = action.error
                state.data = null
                state.isLoading = false

            })
            .addCase(getAllUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.allUsers = action.payload

            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.error = action.error
                state.allUsers = null
                state.isLoading = false

            })
            .addCase(getSingleUserAdmin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSingleUserAdmin.fulfilled, (state, action) => {
                state.isLoading = false
                state.SingleUserAdmin = action.payload

            })
            .addCase(getSingleUserAdmin.rejected, (state, action) => {
                state.error = action.error
                state.SingleUserAdmin = null
                state.isLoading = false

            })
    }
})


export default userSlice.reducer
