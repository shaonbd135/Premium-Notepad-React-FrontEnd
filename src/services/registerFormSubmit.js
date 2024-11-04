import axios from "axios";
import { userRegisterApi } from "../config/api/globalApi";

export const registerFormSubmit = async (formData) => {
    try {
        const res = await axios.post(userRegisterApi, formData);
        return res.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
};
