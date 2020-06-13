import axios from "axios"

const URL= "https://tc.firbid.com/api/v1/entity";

export default {
    find(){
        return axios.get(`${URL}`);
    }
}