import React, { useState, useEffect } from 'react';
import Subject from "../subject/subject"

const SubjectFormFind = () => {
    const [inputId, setInputId] = useState('');
    const [subjectId, setSubjectId] = useState(null);

    useEffect(() => {
        console.log("Updated subjectId=" + subjectId);
    }, [subjectId]); // This effect will run whenever itemId changes

    const handleSubmit = (event) => {
        event.preventDefault();
        // print inputId to console
        console.log("inputId=" + inputId);
        setSubjectId(Number(inputId)); // Convert inputId to a number
        console.log("subjectId=" + subjectId);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter subject ID:
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
            {subjectId !== null && <Subject id={subjectId} />}

        </div>
    );
};

export default SubjectFormFind;