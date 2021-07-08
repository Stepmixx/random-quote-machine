import React from "react";
import "./QuoteContainer.css";
import hexToHsl from "hex-to-hsl";

export const changeContainerColorWhenBgIsLight = (color) => {
  const hslColor = hexToHsl(color);
  console.log(hslColor);
  console.log(color);
  return hslColor[2] >= 85 ? "#333333" : "#ffffff";
};

const QuoteContainer = ({ quote, author, click, hexColor }) => {
  const tweetUrl =
    "https://twitter.com/intent/tweet?text=" +
    '"' +
    quote +
    '"' +
    " -" +
    author;
  return (
    <div
      style={{ backgroundColor: changeContainerColorWhenBgIsLight(hexColor) }}
      className="container my-4 col-8 col-md-6 col-lg-5 m-10 d-flex flex-column"
      id="quote-box"
    >
      <div className="quote-container">
        <blockquote id="text">
          <i className="fas fa-quote-left"></i>
          {quote}
        </blockquote>
        <cite id="author">- {author}</cite>
      </div>
      <div className="btn-container">
        <a
          id="tweet-quote"
          style={{
            backgroundColor: hexColor,
            color: changeContainerColorWhenBgIsLight(hexColor),
          }}
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <button
          id="new-quote"
          style={{
            backgroundColor: hexColor,
            color: changeContainerColorWhenBgIsLight(hexColor),
          }}
          onClick={click}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteContainer;
