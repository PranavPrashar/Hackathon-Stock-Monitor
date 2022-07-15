import "./App.css";
import { Component } from "react";
import StockSection from "./components/StockSection/StockSection";
import SearchBar from "./components/SearchBar/SearchBar";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import axios from "axios";

class App extends Component {
  state = {
    selectedStock: [],
    watchedStocks: [],
  };

  componentDidMount() {
    // this.updateWatchedStock(this.state.selectedStock);
    let currentStorage = JSON.parse(window.sessionStorage.getItem("stockData"));

    if (currentStorage !== null) {
      console.log(currentStorage);
      this.setState({ watchedStocks: [...currentStorage] });
    }
  }

  updateWatchedStock = (stockToWatch) => {
    this.setState({ watchedStocks: [...stockToWatch] });
  };

  componentDidUpdate(prevProps) {
    if (this.state.selectedStock !== prevProps.selectedStock) {
      console.log(this.state.selectedStock);
    }
  }

  render() {
    const handleSearch = (event) => {
      event.preventDefault();

      console.log("Stock Name: " + this.state.form__searchbar);
      axios
        .get(`http://localhost:5050/${this.state.form__searchbar}`)
        .then((response) => {
          this.setState({ selectedStock: response.data.data });
          console.log(response.data.data);
          return response.data.data;
        })
        .then((response) => {
          let currentStorage = JSON.parse(
            window.sessionStorage.getItem("stockData")
          );
          // let array = [currentStorage];
          console.log(response[0], currentStorage);
          if (currentStorage !== null) {
            console.log(currentStorage);
            currentStorage.push(response[0]);

            window.sessionStorage.setItem(
              "stockData",
              JSON.stringify(currentStorage)
            );
            this.setState({ watchedStocks: [...currentStorage] });
          } else {
            window.sessionStorage.setItem(
              "stockData",
              JSON.stringify([response[0]])
            );
            this.setState({ watchedStocks: [[response[0]]] });
          }
        })
        .catch((error) => {
          console.log(error);
        });

      // axios request to our /:stockname
    };

    const handleInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
      //   console.log("Stock Name" + this.state.form__searchbar);
    };
    return (
      <div className="App">
        <SiteHeader />
        {/* <SearchBar /> */}
        <form className="form__search" onSubmit={handleSearch}>
          {/* <label htmlFor="form__searchbar">TESTING</label> */}
          <input
            type="text"
            placeholder="Enter your stock"
            className="form__searchbar"
            name="form__searchbar"
            onChange={handleInputChange}
          ></input>
          <button className="form__searchbutton" type="submit">
            Search
          </button>
        </form>
        <StockSection
          selectedStock={this.state.selectedStock}
          watchedStocks={this.state.watchedStocks}
        />
      </div>
    );
  }
}

// Search bar, card component for each stock ticker

export default App;

// Search bar value => press button => value gets passed to ------- => axios get to api => return
