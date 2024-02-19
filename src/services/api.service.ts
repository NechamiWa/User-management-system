import axios from "axios"

export default new class ApiService {

    BASE_URL = "https://jsonplaceholder.typicode.com";

    getUsers() {
        return axios.get(`${this.BASE_URL}/users`);
    }

    deleteUser(userId: number) {
        return axios.delete(`${this.BASE_URL}/users/${userId}`);
    }

    getUserInfo(userId:string) {
        return axios.get(`${this.BASE_URL}/users/${userId}`);
    }

    getPosts(){
        return axios.get(`${this.BASE_URL}/posts`);
    }
}