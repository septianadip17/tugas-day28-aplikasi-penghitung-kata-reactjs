import React, { useState } from "react";
const TextForm = () => {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    let newtext = event.target.value;
    setText(newtext);
  };
  const toUpperCase = () => {
    const upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  };

  const toLowerCase = () => {
    const lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  };

  const toSentenceCase = () => {
    const sentenceCaseText = text
      .toLowerCase()
      .split(". ")
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");
    setText(sentenceCaseText);
  };

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "mytextfile.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div>
      <h1>Masukkan Paragraf Kamu</h1>
      <div className="input-group">
        <textarea
          className="form-control"
          aria-label="With textarea"
          rows={8}
          value={text}
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <div className="row ">
        <div className="col">
          <button className="btn btn-danger mt-2 mx-2" onClick={toUpperCase}>
            Ubah Jadi Huruf Besar
          </button>
          <button className="btn btn-warning mt-2 mx-2" onClick={toLowerCase}>
            Ubah Jadi Huruf Kecil
          </button>{" "}
          <button
            className="btn btn-success mt-2 mx-2"
            onClick={toSentenceCase}
          >
            Ubah Jadi Gaya Kalimat
          </button>
          <button className="btn btn-info mt-2 mx-2" onClick={downloadTxtFile}>
            Unduh sebagai .txt
          </button>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row text-center">
          <div className="col">
            <h2>Total Karakter </h2>
            <p>{text.length}</p>
          </div>
          <div className="col">
            <h2>Total Kata </h2>
            <p>{text.split(" ").length}</p>
          </div>
        </div>
        <h2 className="text-center">Hasil Teks Akhir</h2>
        <p className="text-center bg-primary text-white p-3">{text}</p>
      </div>
    </div>
  );
};
export default TextForm;
