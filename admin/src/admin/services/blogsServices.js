import { toast } from "react-toastify";

import Http from "./httpServices";
import UsersServices from "./usersServices";
import Config from "../config.json";

Http.setJwt(UsersServices.getToken());

const apiEndPoint = Config.apiEndPoint+"/blogs";

export async function getBlogs() {
    const {data} = await Http.get(apiEndPoint);
    return data
}

export async function addBlog(post) {
    const {data} = await Http.post(apiEndPoint, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function getBlogById(id) {
    const response = await Http.get(apiEndPoint+"/"+id);
    return response.data;
}

export async function updateBlog(id, post) {
    const {data} = await Http.put(apiEndPoint+"/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function deleteBlog(id, post) {
    const {data} = await Http.delete(apiEndPoint+"/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

const blogs = {
    getBlogs,
    addBlog,
    getBlogById,
    updateBlog,
    deleteBlog
};

export default blogs;
