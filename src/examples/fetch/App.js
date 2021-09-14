import { useEffect, useState } from "react";
export default function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, []);
  return (
    <div>
      {items.map((item, index) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}
