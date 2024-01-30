import React, { useState, useEffect } from "react";

const SubjectsList = () => {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSubjects = async () => {
    try {
      const response = await fetch('http://localhost:5000/subjects');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSubjects(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <div>
      <h1>Subjects List</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Code</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.ID}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{subject.ID}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{subject.Code}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{subject.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectsList;
