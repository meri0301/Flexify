import React from 'react';
import Login from "./pages/login";
import SignIn from "./pages/login/signIn";
import {Routes, Route} from 'react-router-dom';
import SignUp from "./pages/login/signUp";
import FitnessPreferences from "./components/fitnessPreferences";
import Screen from "./pages/screen";
import WorkoutPlayerWrapper from "./components/workoutPlayer/wrapper";
import MyProfile from "./pages/account/myProfile";
import Reminder from "./pages/account/reminder";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path={'/preferences'} element={<FitnessPreferences/>}/>
                <Route path={'/screen'} element={<Screen/>}/>

                <Route path={'/account/profile'} element={<MyProfile/>}/>
                <Route path={'/account/reminder'} element={<Reminder/>}/>
                {/*<Route path={'/today'} element={<Today/>}/>*/}
                {/*<Route path={'/account'} element={<Account/>}/>*/}

                <Route path="/workout-player" element={<WorkoutPlayerWrapper/>}/>
            </Routes>
        </div>
    );
}

export default App;
