import React from "react";

export default function FilterableList(props) {
  return (
    <section className="List">
      <ul>
        {props.items.map((item) => (
          <div>
            <li>{item.volumeInfo.title}</li>
            <ul>
              <li>Author: {item.volumeInfo.authors}</li>
              <li>Categories: {item.volumeInfo.categories}</li>
              <li>
                <a
                  href={item.volumeInfo.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              </li>
              {/* {this.renderPrice(item)}
                  <li>{item.searchInfo.textSnippet}</li> */}
            </ul>
          </div>
        ))}
      </ul>
    </section>
  );
}
