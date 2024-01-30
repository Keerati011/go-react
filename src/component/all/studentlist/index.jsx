import React, { useState, useEffect } from "react";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:5000/students');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Students List</h1>
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
          {students.map((student) => (
            <tr key={student.ID}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.ID}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.Code}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.Name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;
