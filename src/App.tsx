import { useEffect, useState } from "react";
import { BASE_ROUTE } from "../utils/const";
import axios from "axios";

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get(`${BASE_ROUTE}/api/hello`)
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="text-2xl p-4">
      <h1 className="font-bold">Frontend is Working!</h1>
      <p className="font-semibold text-red-500">Backend says: {message || "Loading..."}</p>
    </main>
  );
}