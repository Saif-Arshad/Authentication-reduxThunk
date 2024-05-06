import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    userData: null,
    loginData: null,
    isLoading: false,
    isError: false,
    error:null
};

export const signUp = createAsyncThunk("signUp", async (formData, { rejectWithValue }) => {
    try {
        const transformedData = {
            userName: formData.name,
            email: formData.email,
            phoneNumber: formData.phone,
            password: formData.password,
            userType: formData.userType
        };

        const response = await fetch("https://we-ticket-backend.vercel.app/api/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transformedData),
        });

        if (!response.ok) {
            throw new Error('Sign up failed');
        }

        const data = await response.json();
        alert("SignUp SucessFully")
        console.log(data.result)
        return data.result;
    } catch (error) {
        // Handle error
        return rejectWithValue(error.message);
    }
});
export const login = createAsyncThunk("login", async (formData, { rejectWithValue }) => {
    try {
     

        const response = await fetch("https://we-ticket-backend.vercel.app/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Sign up failed');
        }

        const data = await response.json();
        alert("Login SucessFully")

        console.log(data.result)
        localStorage.setItem("user",JSON.stringify(data.result))

        return data.result;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(signUp.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.userData = action.payload;
        });

        builder.addCase(signUp.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error= action.error
        });
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.loginData = action.payload;
        });

        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error= action.error

        });
    },
});

export default userSlice.reducer;
