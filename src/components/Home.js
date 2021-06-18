import React, { useState, useEffect } from "react";
import QuoteContainer, {
  changeContainerColorWhenBgIsLight,
} from "./QuoteContainer";
import axios from "axios";

const fetchQuotes = async () => {
  return await axios
    .get("https://goquotes-api.herokuapp.com/api/v1/random?count=100")
    .then((res) => {
      const quotes = res.data.quotes;
      return quotes;
    });
};

const fetchColors = async () => {
  return await axios
    .get("https://www.colr.org/json/colors/random/100")
    .then((res) => {
      const colors = res.data.colors;
      return colors;
    });
};

const getRandomNumber = () => Math.floor(Math.random() * 100);

const Home = () => {
  const [quotesArr, setQuotes] = useState([{ text: "", author: "" }]);
  const [colorsArr, setColors] = useState([{ hex: "#00000" }]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchColors().then((res) => setColors(res));
    fetchQuotes().then((res) => setQuotes(res));
  }, []);

  const quote = quotesArr[index];

  const color = "#" + colorsArr[index].hex;

  const bgColor = {
    backgroundColor: color,
    color: color,
  };

  return (
    <div
      style={bgColor}
      className="page min-vh-100 vw-100 max-vw-100 d-flex justify-content-center align-items-center flex-column"
    >
      <QuoteContainer
        author={quote.author}
        quote={quote.text}
        click={() => setIndex(getRandomNumber())}
        color={color}
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
