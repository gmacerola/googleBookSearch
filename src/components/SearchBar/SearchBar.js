import React from "react";

export default function SearchBar(props) {
  return (
    <form onSubmit={(e) => props.handleSubmit(e)}>
      <input
        type="text"
        name="q"
        value={props.q}
        onChange={(e) => props.updateFilter("q", e.target.value)}
      />
      <label htmlFor="printType">Print Type:</label>
      <select
        name="print"
        id="printType"
        value={props.printType}
        onChange={(e) => props.updateFilter("printType", e.target.value)}
      >
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>
      <label htmlFor="bookType">Book Type:</label>
      <select
        name="bookType"
        id="filter"
        value={props.filter}
        onChange={(e) => props.updateFilter("filter", e.target.value)}
      >
        <option value="">No Filter</option>
        <option value="free-ebooks">Free eBooks</option>
        <option value="paid-ebooks">Paid eBooks</option>
      </select>
      <input type="submit" />
    </form>
  );
}
