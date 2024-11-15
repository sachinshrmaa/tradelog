import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  const fetchMessage = async () => {
    const response = await fetch("http://localhost:5000");
    const data = await response.text();
    setMessage(data);
  };

  return (
    <div>
      <h1>Trading Journal</h1>
      <button onClick={fetchMessage}>Fetch Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;