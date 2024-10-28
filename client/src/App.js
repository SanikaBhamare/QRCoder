import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [url, setURL] = useState(" ");
  const [qrCode, setQRCode] = useState(null);

  const generateQRCode = async () => {
    if (!url.trim()) {
      // Check if URL is empty or just whitespace
      console.error("URL is required");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/generate", {
        url,
      });
      setQRCode(response.data.qrCode);
    } catch (err) {
      console.error("Error generating code", err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>QR CODE GENERATOR</h1>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />

        <button onClick={generateQRCode}>Generate</button>
        {qrCode && (
          <div>
            <h3>Generated QR Code</h3>
            <img src={qrCode} alt={url} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
