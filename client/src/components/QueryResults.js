import React from "react";

const QueryResults = ({ results }) => {
  if (!results) {
    return <p>No results to display</p>;
  }

  // Handle cases where results are not an array
  if (!Array.isArray(results)) {
    return <p>{JSON.stringify(results)}</p>;
  }

  // Extract table headers from the first result object
  const headers = Object.keys(results[0] || {});

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Query Results</h2>
      <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} style={{ padding: "8px", textAlign: "left" }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header} style={{ padding: "8px" }}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryResults;
