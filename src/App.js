import { useState } from "react";
import "./App.css";
import QRCode from "qrcode";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQrcode(url);
      }
    );
  };

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input">
        <input
          type="text"
          placeholder="e.g https://google.com"
          onChange={(event) => {
            setUrl(event.target.value);
          }}
          value={url}
        />
        <button onClick={GenerateQRCode}>Generate</button>
      </div>
      {qrcode && (
        <div className="qr-img">
          <img src={qrcode} />
          <a href={qrcode} download={`${url}.jpg  `}>
            Download
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
