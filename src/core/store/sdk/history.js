import {NetworkConstants} from "../../constants/networkConstants";
import {makeAPIGetRequest} from "../../service/networkService";

const getHistory = () => {
    const url = [NetworkConstants.request_url.HISTORY];
    let options = {};
    return makeAPIGetRequest(url, options);
}

export {getHistory};