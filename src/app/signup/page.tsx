'use client';
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignupPage() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: ''
  })

  const onSignup = async () => {

  }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr/>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                value={user.username}
                onChange={(e) => setUser({...user, username: e.target.value})}
                placeholder="Username"
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="Email"
            />
            <label htmlFor="password">password</label>
            <input
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="Password"
            />
            <button
                onClick={onSignup}
                className="p-2 mt-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            >
                Signup Here
            </button>
            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}