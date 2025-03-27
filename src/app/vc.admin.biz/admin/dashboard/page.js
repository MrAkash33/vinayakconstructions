"use client"; // Ensures it's a Client Component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import router
import _ from "lodash";
import { UsersTab } from "./users";
import { ContactAdmin } from "./contact";
import { SettingTabs } from "./setting";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("Users");
  const router = useRouter(); // Initialize router

  useEffect(() => {
    if (typeof window !== "undefined") {  // Ensure it's running on the client
      let localData = localStorage.getItem("userVC");
      // await GetProjects()
      if (_.isEmpty(localData)) {
        router.push("/vc.admin.biz/admin/login"); // Redirect to login if no user
      }
    }
  }, []);


  return (
    <div className="flex h-screen">
      {/* Left Navbar */}
      <nav className="w-64 bg-gray-800 text-white p-8 pt-28" style={{height: 'auto',zIndex:2,position:"relative"}}>
        <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
        <ul>
          <li className="p-2 cursor-pointer hover:bg-gray-700" onClick={() => setActiveTab("Projects")}>
          Projects
          </li>
          <li className="p-2 cursor-pointer hover:bg-gray-700" onClick={() => setActiveTab("contact")}>
            Contact Us
          </li>
          <li className="p-2 cursor-pointer hover:bg-gray-700" onClick={() => setActiveTab("Settings")}>
            Settings
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 mt-24">
        {activeTab === "Projects" && <UsersTab />}
        {activeTab === "Settings" && <SettingTabs />}
        {activeTab === "contact" && <ContactAdmin/>}
      </main>
    </div>
  );
}




function SettingsTab() {
  return <div className="p-4 bg-white shadow rounded">Manage Settings Here</div>;
}