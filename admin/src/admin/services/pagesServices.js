import { toast } from "react-toastify";

import Http from "./httpServices";
import UsersServices from "./usersServices";
import Config from "../config.json";

Http.setJwt(UsersServices.getToken());

const apiEndPoint = Config.apiEndPoint+"/pages";

export async function getPages() {
    const {data} = await Http.get(apiEndPoint);
    return data
}

export async function addPage(post) {
    const {data} = await Http.post(apiEndPoint, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function getPageById(id) {
    const response = await Http.get(apiEndPoint+"/"+id);
    return response.data;
}

export async function updatePage(id, post) {
    const {data} = await Http.put(apiEndPoint+"/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function deletePage(id, post) {
    const {data} = await Http.delete(apiEndPoint+"/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

const pages = {
    getPages,
    addPage,
    getPageById,
    updatePage,
    deletePage
};

export default pages;
