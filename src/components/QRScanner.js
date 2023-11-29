import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";

const QRScanner = () => {
  const [data, setData] = useState([]);
  const [countQR, setCountQR] = useState("");
  const [generateQR, setGenerateQR] = useState(false);

  useEffect(() => {
    let uniqueArr = [];
    for (let i = 1; i <= countQR; i++) {
      uniqueArr.push(generateUniqueQRNumber());
    }
    setData(uniqueArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countQR]);

  const QRGenerate = () => {
    setGenerateQR(true);
    // setData(`http://192.168.0.106:3001/112222222222`);
  };

  function generateUniqueQRNumber() {
    function generateRandomDigits(count) {
      return Math.floor(
        Math.pow(10, count - 1) + Math.random() * 9 * Math.pow(10, count - 1)
      );
    }
    const URL = window.location.href;
    const part1 = generateRandomDigits(4);
    const part2 = generateRandomDigits(5);
    const part3 = generateRandomDigits(4);
    const part4 = generateRandomDigits(5);

    const uniqueNumber = `${URL}${part1} ${part2} ${part3} ${part4}`;
    setData([...data, uniqueNumber]);
    return uniqueNumber;
  }

  const QRCodeGenerator = () => {
    return (
      <div>
        {generateQR &&
          data.map((item, index) => {
            let itemFormatted = item.split("/");
            return (
              <div key={index}>
                <p>Product code: {itemFormatted[itemFormatted.length - 1]}</p>
                <QRCode value={item} />
              </div>
            );
          })}
      </div>
    );
  };
  return (
    <div style={{ margin: "20px 20px" }}>
      <h3>QR Scanner</h3>
      <div>
        <label>
          Enter Text:
          <input
            type="number"
            value={countQR}
            onChange={(e) => setCountQR(e.target.value)}
          />
        </label>
      </div>
      <button onClick={QRGenerate}>QR Generator</button>
      <QRCodeGenerator />
    </div>
  );
};

export default QRScanner;
