import axios from "axios";
import { postNotesApi } from "../../config/api/globalApi";


export const submitNotes = async (formData) => {
    try {
        const res = await axios.post(postNotesApi, formData, { withCredentials: true });
        return res.data;
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return error.message;
    }
};