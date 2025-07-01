import React from "react";
import UserContext from "../context/UserContext";
import {  useContext } from "react";

// so here are easily accessing the username because we 
// of the useContext which avoid Prop Drilling

const Profile = () => {

    const { user } = useContext(UserContext)
    if (!user) return <div className="bg-red-600 rounded-xl"> Please Login</div>

    return <div className="bg-green-400 rounded-xl">Welcome {user.username}</div>

}

export default Profile