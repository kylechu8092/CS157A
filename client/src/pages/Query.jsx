import React, { useState } from "react";
import QueryInput from "../components/QueryInput";
import QueryResults from "../components/QueryResults";
import axios from "axios";

const Query = () => {
  const [query, setQuery] = useState(""); 
  const [results, setResults] = useState(null); 
  const [error, setError] = useState(null); 

  const handleQuerySubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8800/query", { query });
      setResults(res.data); 
      setError(null); 
    } catch (err) {
      setError(err.response?.data || "Error occurred"); // Handle errors
      setResults(null);
    }
  };

  return (
    <div>
      <h1>Query Executor</h1>
      <QueryInput query={query} setQuery={setQuery} onSubmit={handleQuerySubmit} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <QueryResults results={results} />
    </div>
  );
};

export default Query;
