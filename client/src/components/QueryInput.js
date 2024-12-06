import React from "react";

const QueryInput = ({ query, setQuery, onSubmit }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter SQL query"
        style={{ width: "400px", padding: "8px" }}
      />
      <button onClick={onSubmit} style={{ marginLeft: "10px", padding: "8px 12px" }}>
        Run Query
      </button>
    </div>
  );
};

export default QueryInput;
