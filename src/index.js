import React, { useState } from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const [books, setBooks] = useState(null);
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const fetchBooks = () => {
    fetch(apiURL)
      .then(resp => resp.json())
      .then(data => setBooks(data));
  };

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchBooks}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
        {books &&
          books.map((item, index) => {
            <div className="book">
              <h3>Book Number</h3>
              <h2>Book Name</h2>

              <div className="details">
                <p>👨: Author/Authors</p>
                <p>📖: Number of pages</p>
                <p>🏘️: Book Country</p>
                <p>⏰: Release date</p>
              </div>
            </div>;
          })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
