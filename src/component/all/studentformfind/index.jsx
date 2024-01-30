import React, { useState, useEffect } from 'react';
import Student from '../student/student';

const StudentFormFind = () => {
    const [inputId, setInputId] = useState('');
    const [studentId, setStudentId] = useState(null);

    useEffect(() => {
        console.log("Updated studentId=" + studentId);
    }, [studentId]); // This effect will run whenever itemId changes

    const handleSubmit = (event) => {
        event.preventDefault();
        // print inputId to console
        console.log("inputId=" + inputId);
        setStudentId(Number(inputId)); // Convert inputId to a number
        console.log("studentId=" + studentId);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter Student ID:
                    <input
                        type="number"
                        value={inputId}
                        onChange={e => setInputId(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">ค้นหา</button>
            </form>
            {/* Render the Item component if itemId is not null */}
            {studentId !== null && <Student id={studentId} />}

        </div>
    );
};

export default StudentFormFind;