import React, { useState, useEffect } from "react";
import axios from "axios";

const Schema = () => {
  const [tables, setTables] = useState([]); 
  const [schemas, setSchemas] = useState({}); 
  const [error, setError] = useState(null);

  // Fetch all table names
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const res = await axios.get("http://localhost:8800/tables");
        setTables(res.data); // Store the table names
      } catch (err) {
        setError(err.message); // Handle errors
      }
    };

    fetchTables();
  }, []);

  // Fetch schema for a specific table
  const fetchSchemaForTable = async (tableName) => {
    try {
      const res = await axios.post("http://localhost:8800/query", {
        query: `DESCRIBE ${tableName};`,
      });
      setSchemas((prev) => ({ ...prev, [tableName]: res.data })); // Update schemas
    } catch (err) {
      setError(err.message); // Handle errors
    }
  };

  // Fetch schemas for all tables when the table names are loaded
  useEffect(() => {
    if (tables.length > 0) {
      tables.forEach((table) => fetchSchemaForTable(table));
    }
  }, [tables]);

  return (
    <div>
      <h1>Database Schema</h1>
      {error && <p>Error: {error}</p>}
      {tables.map((table) => (
        <div key={table} style={{ marginBottom: "20px" }}>
          <h2>Table: {table}</h2>
          <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Field</th>
                <th>Type</th>
                <th>Null</th>
                <th>Key</th>
                <th>Default</th>
                <th>Extra</th>
              </tr>
            </thead>
            <tbody>
              {schemas[table] &&
                schemas[table].map((row, index) => (
                  <tr key={index}>
                    <td>{row.Field}</td>
                    <td>{row.Type}</td>
                    <td>{row.Null}</td>
                    <td>{row.Key}</td>
                    <td>{row.Default}</td>
                    <td>{row.Extra}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Schema;
