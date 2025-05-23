import {NetworkConstants} from "../../constants/networkConstants";
import NetworkService from "../../service/networkService";

const getHistory = () => {
    const url = [NetworkConstants.request_url.HISTORY];
    let options = {};
    return NetworkService.makeAPIGetRequest(url, options);
}

export {getHistory};