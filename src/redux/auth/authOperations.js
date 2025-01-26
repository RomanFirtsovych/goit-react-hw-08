import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

// Додаємо токен в заголовок
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Видаляємо токен із заголовка
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

// Реєстрація
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      });
      setAuthHeader(data.token); // Зберігаємо токен після реєстрації
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Вхід
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", {
        email: credentials.email,
        password: credentials.password,
      });
      setAuthHeader(data.token); // Зберігаємо токен після входу
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Вихід
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
