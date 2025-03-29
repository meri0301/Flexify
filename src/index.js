import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./core/store/store";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import {GoogleOAuthProvider} from "@react-oauth/google";

const CLIENT_ID = '355953439825-rtlvtb0hf1sekhk2k036l0rh61nlrojo.apps.googleusercontent.com';

serviceWorkerRegistration.register(); // enables PWA support
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <Router>
                <App/>
            </Router>
        </GoogleOAuthProvider>
    </Provider>
);

reportWebVitals();
