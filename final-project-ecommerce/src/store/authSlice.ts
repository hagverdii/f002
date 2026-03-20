import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://dummyjson.com";

interface AuthState {
  user: { email?: string; id?: number; name?: string } | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

interface AuthCredentials {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export const loginUser = createAsyncThunk<
  { token: string; id: number; email: string; name: string },
  AuthCredentials,
  { rejectValue: string }
>("auth/loginUser", async ({ username, password }, { rejectWithValue }) => {
  try {
    const { data } = await axios.post<LoginResponse>(`${BASE_URL}/auth/login`, {
      username,
      password,
    });
    localStorage.setItem("userToken", data.token);

    return {
      token: data.token,
      id: data.id,
      email: data.email,
      name: `${data.firstName} ${data.lastName}`,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
    return rejectWithValue("Login failed");
  }
});

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isAuthenticated = false;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = {
          id: action.payload.id,
          email: action.payload.email,
          name: action.payload.name,
        };
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;

export const selectAuth = (state) => state.auth;
export const selectToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
