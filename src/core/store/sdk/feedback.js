import {NetworkConstants} from "../../constants/networkConstants";
import NetworkService from "../../service/networkService";

const postFeedback = (data) => {
    const url = [NetworkConstants.request_url.FEEDBACK];
    const options = {
        body: data || {}
    };

    return NetworkService.makeAPIPostRequest(url, options);
}
export {postFeedback};