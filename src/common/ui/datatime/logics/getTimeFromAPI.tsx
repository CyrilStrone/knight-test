import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.timezonedb.com/"
});
export interface IGetTimeFromAPI {
    key: string
    zone:string
}
export const getTimeFromAPI = async (params: IGetTimeFromAPI) => {
    return axiosInstance.post(
        `v2.1/get-time-zone?key=${params.key}&format=json&by=zone&zone=${params.zone}`)
        .then((res: any) => { return res.data })
        .catch(() => {
            console.log("Error")
        })
}
