import React, { useState, useEffect } from "react";
import QuoteContainer, {
  changeContainerColorWhenBgIsLight,
} from "./QuoteContainer";
import axios from "axios";

const fetchQuotes = async () => {
  const res = await axios.get("https://api.quotable.io/random?maxLength=280");
  return res.data;
};

var randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);

const Home = () => {
  const [quote, setQuote] = useState([{ content: "", author: "" }]);
  const [color, setColor] = useState("#000000");

  const updateQuote = () => {
    fetchQuotes().then((res) => setQuote(res));
    setColor(randomColor);
  };

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <div
      style={{
        backgroundColor: color,
        color: color,
      }}
      className="page min-vh-100 vw-100 max-vw-100 d-flex justify-content-center align-items-center flex-column"
    >
      <QuoteContainer
        author={quote.author}
        quote={quote.content}
        updateQuote={() => updateQuote()}
        hexColor={color}
      />
      <p
        style={{
          color: changeContainerColorWhenBgIsLight(color),
          marginBottom: "30px",
        }}
      >
        Made by Stephan
      </p>
    </div>
  );
};

export default Home;
