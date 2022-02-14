import { toast } from "react-toastify";

import Http from "./httpServices";
import UsersServices from "./usersServices";
import Config from "../config.json";

Http.setJwt(UsersServices.getToken());

const apiEndPoint = Config.apiEndPoint+"/portfolio";

export async function getPortfolio() {
    const {data} = await Http.get(apiEndPoint);
    return data
}

export async function addPortfolio(post) {
    const {data} = await Http.post(apiEndPoint, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

export async function getPortfolioById(id) {
    const response = await Http.get(apiEndPoint+"/"+id);
    return response.data;
}

export async function updatePortfolio(id, post) {
    const {data} = await Http.put(apiEndPoint+"/"+id, post);
    if(data.success) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
}

const portfolio = {
    getPortfolio,
    addPortfolio,
    getPortfolioById,
    updatePortfolio
};

export default portfolio;
