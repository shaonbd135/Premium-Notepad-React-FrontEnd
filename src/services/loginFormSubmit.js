import axios from "axios";
import { userLoginApi } from "../config/api/globalApi";

export const loginFormSubmit = async (formData) => {
    try {
        const res = await axios.post(userLoginApi, formData, { withCredentials: true });
        return res.data;
    }
    catch (error) {
        if (error.response) {
            return error.response.data;
        }

        return error.message;
    }
}