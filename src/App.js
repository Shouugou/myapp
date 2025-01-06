import React from 'react'

export default function App() {

  const news = ["1", "2", "3", "4", "5"];

  const listRef = React.useRef(null);

  const moreNews = () => {
    const currentLength = listRef.current.children.length;
    const newLi = document.createElement("li");
    newLi.textContent = news[currentLength];
    listRef.current.appendChild(newLi);
  }

  return (
    <div>
      <h1>新闻列表</h1>
      <ul ref={listRef}>
        <li>{news[0]}</li>
      </ul>
      <button onClick={moreNews}>更多</button>
    </div>
  )
}
