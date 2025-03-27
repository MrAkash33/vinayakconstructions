import { useState } from "react";

export default function AddUserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response1 = await fetch("/api/addUserSb", {
    //   method: "Get",
    //   headers: { "Content-Type": "application/json" }
    // });
    // console.log("reeponse",response1)
    const response = await fetch("/api/addUserSb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password}),
    });

    if (response.ok) {
      alert("User added successfully!");
      setUsername("");
      setPassword("");
      setAge("");
    } else {
      alert("Error adding user.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Add User
      </button>
    </form>
  );
}
