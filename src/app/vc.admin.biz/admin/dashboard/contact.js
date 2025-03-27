"use client"; // Ensures it's a Client Component
import AdminImageModal from "@/components/admin/addProjects";
import axios from "axios";
import { useEffect, useState } from "react";

export function ContactAdmin() {
    const [contactus, setContactUs] = useState([]);

    const deleteProject = async (id) => {
      const res = await fetch(`/api/delete/${id}`, { method: 'DELETE' });
      const data = await res.json();
      console.log(data);
    
      if (res.ok) {
        alert('Item and Image deleted successfully');
      } else {
        alert('Error: ' + data.error);
      }
    };
  
  useEffect(()=>{
    fetchData()
  },[])
  async function fetchData () {
    let response = await axios.get('/api/getContact')
    console.log("response.data.projects",response.data.contactus)
    setContactUs(response?.data?.contactus)
    // setProjects(response.data.projects)
  }
    return <main className="flex-1 p-6 bg-gray-100" style={{height: 'auto',zIndex:2,position:"relative"}}>
    <div className="flex justify-between items-center mb-4 ">
      <h2 className="text-xl font-bold">Contact Us</h2>
    </div>
    <div className="bg-white p-4 shadow rounded">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">Message</th>
          </tr>
        </thead>
        <tbody>
          {contactus.map((item) => (
            <tr key={item.id} className="border">
              {/* <td className="border p-2 text-center">{project.id}</td> */}
              <td className="border p-2 text-center">
                  {item.name}
              </td>
              <td className="border p-2 text-center">
                  {item.email}
              </td>
              <td className="border p-2 text-center">
                  {item.phone}
              </td>
              <td className="border p-2 text-center">
                  {item.subject}
              </td>
              <td className="border p-2 text-center">
                {item.message}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </main>
  ;
  }