"use client"
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'


export function GoogleLoginComponent() {
    const [showLoginForm, setShowLoginForm] = useState<boolean>(true);
    const router = useRouter()

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            setShowLoginForm(false)
        }
    }, [])

    return showLoginForm && <GoogleLogin
        shape="pill"
        useOneTap
        onSuccess={async (response) => {
            console.log(response);

            sessionStorage.clear();

            sessionStorage.setItem("token", JSON.stringify(response));

            router.refresh();

        }} theme="outline" auto_select={false}
        onError={() => {
            console.log("Not able to sign in.");

        }} />
}