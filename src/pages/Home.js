import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const [dictionaryData, setDictionaryData] = useState(null);
  const [searchedWord, setSearchedWord] = useState("");
  const [searchedDateTime, setSearchedDateTime] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    let nameInput = document.getElementById("search");
    let nameValue = nameInput.value;
    let nameLength = nameValue.length;
    // let encodedBaseUrl = encodeURIComponent(
    //   "https://api.dictionaryapi.dev/api/v2/entries/en/"
    // );
    // let encodedNameValue = encodeURIComponent(nameValue);
    var regex = /^[a-zA-Z]+$/;

    if (nameLength > 100 || !regex.test(nameValue)) {
      console.log("Invalid input. Please check the length.");
      return;
    }

    console.log("Valid input. Proceeding with search...");

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${nameValue}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const jsonData = await response.json();
      setDictionaryData(jsonData);
      setSearchedWord(nameValue);
      setSearchedDateTime(new Date().toLocaleString());
      setSearchWord(nameValue);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setDictionaryData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchWord !== "") {
      fetchData();
    }
  }, [searchWord]);

  return (
    <div className="container">
      <Header />

      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          id="search"
          required
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Datetime</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dictionaryData && (
            <tr>
              <td>{searchedWord}</td>
              <td>{searchedDateTime}</td>
              <td>
                <button>View</button>
                <button>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Home;
