import React, { useState } from 'react';

const AssignmentUpload = () => {
    const [assignment, setAssignment] = useState({
        title: '',
        description: '',
        className: '',
        subject: '',
        guidelines: '',
        deadline: '',
    });

    const handleChange = (e) => {
        setAssignment({ ...assignment, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:8000/api/v1/teachers/assignments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(assignment),
            });

            if (!response.ok) {
                throw new Error('Something went wrong with the request');
            }

            const result = await response.json();
            console.log(result);
            alert('Assignment saved successfully!');

            setAssignment({
                title: '',
                description: '',
                className: '',
                subject: '',
                guidelines: '',
                deadline: '',
            });
        } catch (error) {
            console.error('Failed to save the assignment:', error);
            alert('Failed to save the assignment.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#202020]">
            <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 space-y-4 bg-black rounded shadow">
                <h2 className="text-xl font-bold">Upload Assignment</h2>
                <div>
                    <label className="block text-sm font-medium text-gray-100">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={assignment.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm"
                        placeholder="Assignment Title"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-100">Description</label>
                    <textarea
                        name="description"
                        value={assignment.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm"
                        placeholder="Assignment Description"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-100">Class Name</label>
                    <input
                        type="text"
                        name="className"
                        value={assignment.className}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm"
                        placeholder="Class Name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-100">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        value={assignment.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm"
                        placeholder="Subject"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-100">Guidelines</label>
                    <textarea
                        name="guidelines"
                        value={assignment.guidelines}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm"
                        placeholder="Assignment Guidelines"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-100">Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        value={assignment.deadline}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm"
                    />
                </div>
                <button type="submit" className="px-4 py-2 font-bold text-black bg-blue-500 rounded hover:bg-blue-700">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AssignmentUpload;
