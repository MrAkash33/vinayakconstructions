'use client'; // Ensures it's a Client Component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use 'next/navigation' in App Router
import axios from "axios";
import _ from "lodash";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Ensure this is inside a Client Component


    useEffect(() => {
      if (typeof window !== "undefined") {  // Ensure it's running on the client
        let localData = localStorage.getItem("userVC");
        if (!_.isEmpty(localData)) {
          router.push("/vc.admin.biz/admin/dashboard"); // Redirect to login if no user
        }
      }
    }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    let response = await axios.get('/api/getSb')
    if (userName == response.data.admins[0].username && password == response.data.admins[0].password) {
      localStorage.setItem('userVC',JSON.stringify(response.data.admins[0]))
      router.push("/vc.admin.biz/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded mb-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
