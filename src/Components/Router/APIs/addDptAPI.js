import { async } from "@firebase/util";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/"
})

export const getDPTs = async () => {
    const res = await api.get('/depertments')
    return res.data;
}

export const addDPT = async (depertment) =>{
    return await api.post("/depertments", depertment)
}