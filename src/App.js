import React from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import FilterableList from "./components/FilterableList/FilterableList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "henry",
      printType: "all",
      filter: "",
      items: [],
    };
  }

  updateFilter = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.search();
  };

  search = () => {
    const baseURL = "https://www.googleapis.com/books/v1/volumes";
    const apiKey = "AIzaSyBMyJ9gHcg41mSb4CHB3BPUak77gyAF_Ns";

    let url = `${baseURL}?q=${this.state.q}&key=${apiKey}&printType=${this.state.printType}`;
    if (this.state.filter !== "") {
      url += `&filter=${this.state.filter}`;
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ items: data.items });
        console.log(this.state.items);
        console.log(this.state.items[0].saleInfo.listPrice.amount);
        // this.state.items.map((item) =>
        //   item.saleInfo.listPrice.amount && item.volumeInfo
        //     ? console.log(item.saleInfo.listPrice.amount)
        //     : console.log("No Sales Amount")
        // );
      });
  };

  componentDidMount() {
    this.search();
  }

  // renderPrice(item) {
  //   this.setState({ item: saleInfo: "" })
  //   if (this.state.items.saleInfo.listPrice.amount === "") {
  //     return <li>No Sales Price Listed</li>;
  //   } else {
  //     return <li>{this.state.items.saleInfo.listPrice.amount}</li>;
  //   }
  // }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchBar
          {...this.state}
          updateFilter={this.updateFilter}
          submit={this.handleSubmit}
        />
        <FilterableList {...this.state} />
      </main>
    );
  }
}

export default App;
