'use client'
import { useUser } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () =>{
    const {user} = useUser();
    return (
        <div>
            <h1>Dashboard</h1>
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <div>{user?.firstName}</div>
        </div>
    );
}

export default DashboardPage