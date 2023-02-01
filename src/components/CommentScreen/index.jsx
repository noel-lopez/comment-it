import { useState } from "react";
import { getCohereResult } from "../../services/cohere";

const CommentScreen = () => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setResult("");
    const result = await getCohereResult(comment);
    setLoading(false);
    if (result) setResult(result);
  };

  return (
    <div className="App">
      <header>Comment it</header>
      <input onChange={handleComment} />
      <button onClick={handleSubmit}>Submit</button>
      {loading && <div>Loading...</div>}
      <div>{result}</div>
    </div>
  );
};

export default CommentScreen;
