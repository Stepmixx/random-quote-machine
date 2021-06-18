import React from "react";
import "./QuoteContainer.css";
import hexToHsl from "hex-to-hsl";
import { useState } from "react";

export const changeContainerColorWhenBgIsLight = (color) => {
  const hslColor = hexToHsl(color);
  return hslColor[2] > 80 ? "#666666" : "#ffffff";
};

const QuoteContainer = ({ quote, author, click, color }) => {
  const [state, setState] = useState(true);
  const tweetUrl =
    "https://twitter.com/intent/tweet?text=" +
    '"' +
    quote +
    '"' +
    " -" +
    author;
  return (
    <div
      style={{ backgroundColor: changeContainerColorWhenBgIsLight(color) }}
      className="container my-4 col-8 col-md-6 col-lg-5 m-10 d-flex flex-column"
      id="quote-box"
    >
      <div className="quote-container">
        <blockquote id="text">
          <i class="fas fa-quote-left"></i>
          {quote}
        </blockquote>
        <cite id="author">- {author}</cite>
      </div>
      <div className="btn-container">
        <a
          id="tweet-quote"
          style={{
            backgroundColor: color,
            color: changeContainerColorWhenBgIsLight(color),
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
            backgroundColor: color,
            color: changeContainerColorWhenBgIsLight(color),
          }}
          onClick={() => {
            click();
            setState(!state);
          }}
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default QuoteContainer;
