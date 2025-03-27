"use client"; // Ensures it's a Client Component
import AdminImageModal from "@/components/admin/addProjects";
import axios from "axios";
import { useEffect, useState } from "react";

export function UsersTab() {
    const [projects, setProjects] = useState([]);
    const [addProjects, setAddProjects] = useState(false);
  
    const addProject = () => {    
      setAddProjects(true)
    };
  
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
    let response = await axios.get('/api/getProjects')
    console.log("response.data.projects",response.data.projects)
    setProjects(response.data.projects)
  }
    return <main className="flex-1 p-6 bg-gray-100" style={{height: 'auto',zIndex:2,position:"relative"}}>
    <div className="flex justify-between items-center mb-4 ">
      <h2 className="text-xl font-bold">Projects</h2>
      <div className="flex space-x-2">
        <button
          onClick={addProject}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>
      </div>
    </div>
    <div className="bg-white p-4 shadow rounded">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {/* <th className="border p-2">ID</th> */}
            <th className="border p-2">Project Name</th>
            <th className="border p-2">Actions</th>
            <th className="border p-2">Image</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border">
              {/* <td className="border p-2 text-center">{project.id}</td> */}
              <td className="border p-2">
                  {project.heading}
              </td>
              <td className="border p-2">
                  {project.description}
              </td>
              <td className="border p-2">
                  <img src={project.url} width={100} height={100}/>
              </td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => deleteProject(project.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {
      addProjects && <AdminImageModal isOpen={addProjects} onClose={()=>setAddProjects(false)}/>
    }
  </main>
  ;
  }