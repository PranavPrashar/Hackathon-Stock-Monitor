import React, { Component } from "react";
import "./SearchBar.scss";

class SearchBar extends Component {
  state = {};

  render() {
    const handleSearch = (event) => {
      event.preventDefault();
      //   this.setState({
      //     [event.target.name]: event.target.value,
      //   });

      console.log("Stock Name" + this.state.form__searchbar);

      // axios request to our /:stockname
    };

    const handleInputChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
      //   console.log("Stock Name" + this.state.form__searchbar);
    };
    return (
      <>
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
      </>
    );
  }
}

export default SearchBar;
