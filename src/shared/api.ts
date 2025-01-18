import axios from "axios";

const BaseUrl = "https://cataas.com/"

const NEWSApiInstanse = axios.create()

const NEWSApi = {
    GetAllNews: async () => {
        return NEWSApiInstanse.get("/cat",{
            baseURL : BaseUrl,
        })
    }
}

export default NEWSApi;