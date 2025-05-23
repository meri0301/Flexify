import {NetworkConstants} from "../../constants/networkConstants";
import NetworkService from "../../service/networkService";

const postReminder = (data) => {
    const url = [NetworkConstants.request_url.REMINDER];
    const options = {
        body: data || {}
    };

    return NetworkService.makeAPIPostRequest(url, options);
}

const deleteReminder = (data) => {
    const url = [NetworkConstants.request_url.REMINDER];
    const options = {
        body: data || {}
    };

    return NetworkService.makeAPIDeleteRequest(url, options);
}

export {postReminder, deleteReminder};