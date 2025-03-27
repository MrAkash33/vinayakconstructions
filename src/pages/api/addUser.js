import { firestore } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, age } = req.body;
    const docRef = await addDoc(collection(firestore, "users"), {
      name,
      email,
      age,
    });

    res.status(200).json({ message: "User added", id: docRef.id });
  } catch (error) {
    res.status(500).json({ error: "Error adding user" });
  }
}
