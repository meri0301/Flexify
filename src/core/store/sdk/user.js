import {NetworkConstants} from "../../constants/networkConstants";
import NetworkService from "../../service/networkService";

const getMe = () => {
    const url = [NetworkConstants.request_url.USERS,
        NetworkConstants.request_url.ME];
    let options = {};
    return NetworkService.makeAPIGetRequest(url, options);
}

export {getMe};