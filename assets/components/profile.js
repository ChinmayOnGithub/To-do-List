import React, { useState } from 'react';

const Profile = () => {
    // State to control modal visibility
    const [isOpen, setIsOpen] = useState(false);

    // Function to open modal
    const openModal = () => {
        setIsOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* Button to open the profile modal */}
            <button
                onClick={openModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
                Show Profile
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="text-gray-500 float-right text-xl hover:text-gray-700"
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                        <p className="mb-2">Name: John Doe</p>
                        <p className="mb-2">Email: johndoe@example.com</p>
                        <p>Bio: A short bio about John Doe.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
