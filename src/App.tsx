// import { useEffect, useState } from "react";
// import axios from "axios";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/hello")
  //     .then((res) => setMessage(res.data.message))
  //     .catch((err) => console.error(err));
  // }, []);

  return <h1 className="text-2xl text-red-500">Hello World</h1>

  // return (
  //   <main className="text-2xl p-4">
  //     <h1 className="font-bold">Frontend is Working!</h1>
  //     <p className="font-semibold">Backend says: {message || "Loading..."}</p>
  //   </main>
  // );
}

export default App;
