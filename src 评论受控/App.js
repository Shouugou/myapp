import React, { useState } from 'react'

export default function App() {

  const [comment, setComment] = useState(["你好", "再见", "再也不见"]);
  const [input, setInput] = useState("");

  const buttononClick = () => {
    const newComment = [...comment, input];
    setComment(newComment);
    setInput("");
  }

  const buttonDelete = (index) => {
    const newComment = [...comment];
    newComment.splice(index, 1);
    setComment(newComment);
  }

  return (
    <div>
      <h1>评论功能</h1>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={buttononClick}>提交</button>
      <h2>评论列表</h2>
      <ul>
        {
          comment.map((value, index) => (
            <li key={index}>{value}<button onClick={() => buttonDelete(index)}>删除</button></li>
          ))
        }
      </ul>
    </div>
  )
}
