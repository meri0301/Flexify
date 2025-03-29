import React from 'react';
import Login from "./pages/login";
import SignIn from "./pages/login/signIn";
import {Routes, Route} from 'react-router-dom';
import SignUp from "./pages/login/signUp";
import FitnessPreferences from "./components/fitnessPreferences";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path={'/preferences'} element={<FitnessPreferences/>}/>
            </Routes>
        </div>
    );
}

export default App;
