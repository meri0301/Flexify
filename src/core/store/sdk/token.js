import {NetworkConstants} from "../../constants/networkConstants";
import {makeAPIPostRequest} from "../../service/networkService";

const postToken = (data) => {
    const url = NetworkConstants.request_url.TOKEN;
    const options = {
        body: data
    };

    return makeAPIPostRequest(url, options);
}

const signUp = (data) => {
    const url = NetworkConstants.request_url.SIGN_UP;
    const options = {
        body: data
    };

    return makeAPIPostRequest(url, options);
}

export {postToken, signUp};
