import React, { useState, useEffect } from "react";

function Article() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/");

    const items = await data.json();
    console.log(data);
    console.log(items);
    setItems(items);
  };

  return (
    <div>
      <ul>
        {/* {items.map((item, index) => (
          <li key={index}>
            <h1>
              {index}
              {item.title}
            </h1>
          </li>
        ))}{" "} */}
        <h1>{items.map((item) => ({ item }))}</h1>
      </ul>
    </div>
  );
}

export default Article;
