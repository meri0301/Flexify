import {NetworkConstants} from "../../constants/networkConstants";
import {makeAPIPostRequest} from "../../service/networkService";

const postFeedback = (data) => {
    const url = [NetworkConstants.request_url.FEEDBACK];
    const options = {
        body: data || {}
    };

    return makeAPIPostRequest(url, options);
}
export {postFeedback};