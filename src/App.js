import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchBar, setSearchBar] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => setSearchBar(event.target.value)}
      ></input>
      {JSONDATA.filter((val) => {
        if (searchBar === "") {
          return val;
        } else if (
          val.first_name.toLowerCase().includes(searchBar.toLowerCase())
        ) {
          return val;
        }
        return false;
      }).map((val, index) => {
        return (
          <div>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
