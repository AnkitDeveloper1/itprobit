import { toast } from "react-toastify";

import Http from "./httpServices";
import UsersServices from "./usersServices";
import Config from "../config.json";

const apiEndPoint = Config.apiEndPoint+"/reviews";

Http.setJwt(UsersServices.getToken());

export async function getReviews() {
    const response = await Http.get(apiEndPoint);
    return response.data;
}

export async function addReviews(post) {
    const {data} = await Http.post(apiEndPoint, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function getReview(id) {
    const response = await Http.get(apiEndPoint+"/"+id);
    return response.data;
}

export async function updateReviews(id, post) {
    const {data} = await Http.put(apiEndPoint+"/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function deleteReviews(id, post) {
    const {data} = await Http.delete(apiEndPoint+"/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

const reviews = {
    getReviews,
    addReviews,
    getReview,
    updateReviews,
    deleteReviews
}

export default reviews;
