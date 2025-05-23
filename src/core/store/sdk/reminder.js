import {NetworkConstants} from "../../constants/networkConstants";
import {makeAPIPostRequest, makeAPIDeleteRequest} from "../../service/networkService";

const postReminder = (data) => {
    const url = [NetworkConstants.request_url.REMINDER];
    const options = {
        body: data || {}
    };

    return makeAPIPostRequest(url, options);
}

const deleteReminder = (data) => {
    const url = [NetworkConstants.request_url.REMINDER];
    const options = {
        body: data || {}
    };

    return makeAPIDeleteRequest(url, options);
}

export {postReminder, deleteReminder};