import { useState } from "react";
import { getCohereResult } from "../../services/cohere";

const CommentScreen = () => {
  const [comment, setComment] = useState("");
  const [result, setResult] = useState({ generations: [] });

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    const result = await getCohereResult(comment);
    setResult(result);
  };

  return (
    <div className="App">
      <header>Comment it</header>
      <input onChange={handleComment} />
      <button onClick={handleSubmit}>Submit</button>
      <div>{result?.generations[0]?.text}</div>
    </div>
  );
};

export default CommentScreen;
