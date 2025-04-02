import React from 'react';
import Login from "./pages/login";
import SignIn from "./pages/login/signIn";
import {Routes, Route, Navigate } from 'react-router-dom';
import SignUp from "./pages/login/signUp";
import FitnessPreferences from "./components/fitnessPreferences";
import Screen from "./pages/screen";
import WorkoutPlayerWrapper from "./components/workoutPlayer/wrapper";
import MyProfile from "./pages/account/myProfile";
import Reminder from "./pages/account/reminder";
import Policy from "./pages/account/policy";
import Feedback from "./pages/account/feedback";
import History from "./pages/account/history";
import FastWorkout from "./pages/workouts/components/workoutDetails/fastWorkout";
import PilatesWorkout from "./pages/workouts/components/workoutDetails/pilatesWorkout";

function App() {
    return (
        <div className="App">

            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/login" />}
                />
                <Route path="/login" element={<Login/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path={'/preferences'} element={<FitnessPreferences/>}/>
                <Route path={'/screen'} element={<Screen/>}/>

                <Route path={'/account/profile'} element={<MyProfile/>}/>
                <Route path={'/account/reminder'} element={<Reminder/>}/>
                <Route path={'/account/privacy'} element={<Policy/>}/>
                <Route path={'/account/workouts-history'} element={<History/>}/>
                <Route path={'/account/feedback'} element={<Feedback/>}/>

                <Route path={'/indoorWalking'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/backWorkout'} element={<WorkoutPlayerWrapper/>}/>

                <Route path={'/abs'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/butt'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/arm'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/leg'} element={<WorkoutPlayerWrapper/>}/>

                <Route path={'/fastWorkout'} element={<FastWorkout/>}/>
                <Route path={'/pilates'} element={<PilatesWorkout/>}/>

                <Route path={'/bodySaw'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/squats'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/fastSpiderLunges'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/flutterKicks'} element={<WorkoutPlayerWrapper/>}/>

                <Route path={'/coreAbs'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/lowerBody'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/fullBodyPilates'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/upperBody'} element={<WorkoutPlayerWrapper/>}/>

                <Route path={'/morningStretch'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/tonedArms'} element={<WorkoutPlayerWrapper/>}/>
                <Route path={'/sleepyTime'} element={<WorkoutPlayerWrapper/>}/>

                <Route path="/workout-player" element={<WorkoutPlayerWrapper/>}/>
            </Routes>
        </div>
    );
}

export default App;
