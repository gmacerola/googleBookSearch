import React from "react";
import "./FilterableList.css";

export default function FilterableList(props) {
  return (
    <div className="FilterableList">
      <h2>
        There are {props.items.length} results for {props.q}
      </h2>
      {props.items ? (
        props.items.map((item) => (
          <div className="book">
            <h2>{item.volumeInfo.title}</h2>
            <div>Author: {item.volumeInfo.authors}</div>
            <div>Categories: {item.volumeInfo.categories}</div>
            <div>
              <a
                href={item.volumeInfo.previewLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview
              </a>
              {item.saleInfo && item.saleInfo.listPrice && (
                <p>{item.saleInfo.listPrice.amount}</p>
              )}
            </div>
            {/* {this.renderPrice(item)}
                  <li>{item.searchInfo.textSnippet}</li> */}
          </div>
        ))
      ) : (
        <h2>No Results Found</h2>
      )}
    </div>
  );
}
