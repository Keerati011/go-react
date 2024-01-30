import React, { useState, useEffect } from 'react';

const Subject = ({ id }) => {
    const [subject, setSubject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                console.log("id from form =" + id);
                const response = await fetch(`http://localhost:5000/subjects/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("data = " + data);
                setSubject(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSubject();
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading subject: {error}</p>;
    if (!subject) return <p>No subject found for id {id}</p>;

    return (
        <div>
            <h2>Student Details</h2>
            <table style={{ borderCollapse: 'collapse', width: '50%', marginTop: '20px' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>ID:</strong></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{subject.ID}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Code:</strong></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{subject.Code}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Name:</strong></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{subject.Name}</td>
                    </tr>
                    {/* Add additional rows for other item properties as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Subject;
