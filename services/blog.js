import axios from "axios"

const URL= "https://firbid.com/blog/wp-json/wp/v2";

export default {
    find(){
        return axios.get(`${URL}/posts/?per_page=3`)
    },
    getPost(id){
        return axios.get(`${URL}/media/${id}`)
    }
}