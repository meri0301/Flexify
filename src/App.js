import React from 'react';
import Login from "./pages/login";
import SignIn from "./pages/login/signIn";
import {Routes, Route} from 'react-router-dom';
import SignUp from "./pages/login/signUp";
import FitnessPreferences from "./components/fitnessPreferences";
import Screen from "./pages/screen";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path={'/preferences'} element={<FitnessPreferences/>}/>
                <Route path={'/screen'} element={<Screen/>}/>
            </Routes>
        </div>
    );
}

export default App;
