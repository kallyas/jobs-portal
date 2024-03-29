import api from "../api";

const loginUser = async (user) => {
  const res = await api.LOGIN("/auth/login/", user);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.non_field_errors[0]);
  }
};

const loginCompany = async (company) => {
  const res = await api.LOGIN("/auth/company/login/", company);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    throw new Error(data.data.non_field_errors[0]);
  }
};

const registerUser = async (user) => {
  const res = await api.REGISTER("/auth/register/", user);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    const error = data.data?.non_field_errors[0] || data.username[0]
    throw new Error(error);
  }
};

const registerCompany = async (company) => {
  const res = await api.REGISTER("/auth/company/register/", company);
  const data = await res.json();
  if (data.access_token) {
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("user", JSON.stringify(data.user));
    return data.user;
  } else {
    // const error = data.data
    throw new Error(data.data.non_field_errors[0]);
  }
};

const logoutUser = async () => {
  const res = await api.LOGOUT();
  const data = await res.json();
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    return data
};

export const authService = {
  loginUser,
  loginCompany,
  registerCompany,
  registerUser,
  logoutUser,
};
