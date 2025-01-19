import axios from "axios";
import { ICat, ICatImage } from "../models/cat";

const BaseUrl = "https://cataas.com"

const CATApiInstanse = axios.create()

const CATApi = {
    GetRandomCat: async () => {
        const response = await CATApiInstanse.get<ICat>("/cat",{
            baseURL : BaseUrl,
            params : {
                json : true
            }
        })
        return response.data;
    },
    GetPhotoOfCat : async (id : string) => {
        return `${BaseUrl}/cat/${id}`;
    }

}

export default CATApi;