import React, { useState, useEffect } from 'react';

const Item = ({ id }) => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                console.log("id from form =" + id);
                const response = await fetch(`http://localhost:5000/items/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("data = " + data);
                setItem(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchItem();
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading item: {error}</p>;
    if (!item) return <p>No item found for ID {id}</p>;

    return (
        <div>
            <h2>Item Details</h2>
            <table style={{ borderCollapse: 'collapse', width: '50%', marginTop: '20px' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>ID:</strong></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.ID}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}><strong>Name:</strong></td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.Name}</td>
                    </tr>
                    {/* Add additional rows for other item properties as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default Item;
