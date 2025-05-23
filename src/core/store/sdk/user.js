import {NetworkConstants} from "../../constants/networkConstants";
import {makeAPIGetRequest} from "../../service/networkService";

const getMe = () => {
    const url = [NetworkConstants.request_url.USERS,
        NetworkConstants.request_url.ME];
    let options = {};
    return makeAPIGetRequest(url, options);
}

export {getMe};