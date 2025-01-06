import React from 'react'

export default function App() {

  const news = ["1", "2", "3", "4", "5"];

  const [num, setNum] = React.useState(1);

  const moreNews = () => {
    setNum(num + 1);
  }

  return (
    <div>
      <h1>新闻列表</h1>
      <ul>
        {
          news.slice(0,num).map((item,index)=>(
            <li key={index}>{item}</li>
          ))
        }
      </ul>
      <button onClick={moreNews}>更多</button>
    </div>
  )
}
