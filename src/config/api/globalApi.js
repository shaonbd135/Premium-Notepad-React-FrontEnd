const baseUrl = process.env.REACT_APP_BASE_URL;

export const userRegisterApi = `${baseUrl}api/user/register`;
export const userLoginApi = `${baseUrl}api/user/login`;
export const verifyLoggedin = `${baseUrl}api/user/verify-token`;
export const postNotesApi = `${baseUrl}api/user/notes`;

