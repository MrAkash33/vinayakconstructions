"use client"; // Ensures it's a Client Component
import AdminImageModal from "@/components/admin/addProjects";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use 'next/navigation' in App Router
import { supabase } from "@/supabase/supabase";

export function SettingTabs() {
      const [userName, setUserName] = useState("");
      const [password, setPassword] = useState("");
      const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
      const router = useRouter();


    const handleUpdatePassword = async () => {
      if (!password) {
        setMessage("Password cannot be empty.");
        return;
      }
  
      setLoading(true);
      const response = await fetch("/api/updateAdminPass", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }), // Replace 1 with the actual admin ID
      });
  
      const data = await response.json();
      setMessage(data.message || data.error);
      setLoading(false);
    };

    return <>
   <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form>
          {/* <input
            type="text"
            placeholder="Username"
            className="w-full p-2 border rounded mb-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          /> */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
        onClick={handleUpdatePassword}
        className="w-full bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Password"}
      </button>
           {message && <p className="mt-2 text-sm text-red-500">{message}</p>}
        </form>
      </div>
    </>
  ;
  }