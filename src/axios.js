import axios from "axios";

//making base request from movies database
const instance = axios.create({
    baseURL:" https://api.themoviedb.org/3",
})
export default instance;