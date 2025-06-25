import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { AddRestaurant } from '../utils/apis';

const Restaurant = () => {
    const [restaurantData, setRestaurantData] = useState({
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        openingTime: '',
        closingTime: '',
        status: 'OPEN',
        imgUrl: '',
        ownerId: ''
    });

    const fieldOrder = [
        { name: 'name', label: 'Restaurant Name', type: 'text' },
        { name: 'address', label: 'Address', type: 'text' },
        { name: 'phoneNumber', label: 'Phone Number', type: 'tel' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'openingTime', label: 'Opening Time', type: 'time' },
        { name: 'closingTime', label: 'Closing Time', type: 'time' },
        { name: 'status', label: 'Status', type: 'select' },
        { name: 'imgUrl', label: 'Image URL', type: 'url' },
    ];

    const [step, setStep] = useState(0);
    const [previewMode, setPreviewMode] = useState(false);

    const handleNext = (e) => {
        e.preventDefault();
        if (step < fieldOrder.length - 1) {
            setStep(step + 1);
        } else {
            setPreviewMode(true);
        }
    };

    const handleBack = () => {
        if (previewMode) {
            setPreviewMode(false);
            setStep(fieldOrder.length - 1);
        } else if (step > 0) {
            setStep(step - 1);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurantData({ ...restaurantData, [name]: value });
    };

    const handleEdit = (index) => {
        setStep(index);
        setPreviewMode(false);
    };

    const formatTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(':');
    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:00`;
};

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ownerId = sessionStorage.getItem("userId");
        console.log("Owner ID:", ownerId);
        if (!ownerId) {
            alert("You must be logged in to add a restaurant.");
            return;
        }

        const restaurantWithOwner = { ...restaurantData, ownerId };
        restaurantWithOwner.openingTime = formatTime(restaurantWithOwner.openingTime);
        restaurantWithOwner.closingTime = formatTime(restaurantWithOwner.closingTime);
        console.log("Form submitted:", restaurantWithOwner);

        const response = await AddRestaurant(restaurantWithOwner);
        if (response) {
            console.log("Restaurant added successfully:", response);
            alert("Restaurant added successfully!");
        } else {
            console.error("Failed to add restaurant");
            alert("Failed to add restaurant.");
        }

        setRestaurantData({
            name: '',
            address: '',
            phoneNumber: '',
            email: '',
            openingTime: '',
            closingTime: '',
            status: 'open',
            imgUrl: '',
        });
        setStep(0);
        setPreviewMode(false);
    };


    const currentField = fieldOrder[step];

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">Add Restaurant</h1>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border p-5 rounded-lg border-gray-300">
                    <form onSubmit={previewMode ? handleSubmit : handleNext} className="space-y-6">
                        {!previewMode ? (
                            <>
                                <div>
                                    <label htmlFor={currentField.name} className="block text-sm font-medium text-gray-900">
                                        {currentField.label}
                                    </label>

                                    {currentField.type === 'select' ? (
                                        <select
                                            name={currentField.name}
                                            id={currentField.name}
                                            value={restaurantData[currentField.name]}
                                            onChange={handleChange}
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                        >
                                            <option value="OPEN">OPEN</option>
                                            <option value="CLOSE">CLOSE</option>
                                        </select>
                                    ) : (
                                        <input
                                            type={currentField.type}
                                            name={currentField.name}
                                            id={currentField.name}
                                            value={restaurantData[currentField.name]}
                                            onChange={handleChange}
                                            required
                                            placeholder={'Enter ' + currentField.label.toLowerCase()}
                                            autoComplete={currentField.name}
                                            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                                        />
                                    )}
                                </div>

                                <div className="flex justify-between">
                                    {step > 0 && (
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="bg-gray-300 text-gray-800 px-4 py-1.5 rounded-md text-sm"
                                        >
                                            Back
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        className="bg-orange-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-orange-500"
                                    >
                                        {step === fieldOrder.length - 1 ? 'Preview' : 'Next'}
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Preview Details</h2>
                                <ul className="text-sm space-y-4">
                                    {fieldOrder.map((field, index) => (
                                        <li key={field.name} className="flex justify-between items-start">
                                            <div>
                                                <strong>{field.label}:</strong>{' '}
                                                {field.name === 'imgUrl' ? (
                                                    <div className="mt-2">
                                                        <img
                                                            src={restaurantData[field.name]}
                                                            alt="Restaurant"
                                                            className="w-full h-32 object-cover rounded-md"
                                                        />
                                                    </div>
                                                ) : (
                                                    <span className="text-gray-700">{restaurantData[field.name]}</span>
                                                )}
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handleEdit(index)}
                                                className="text-blue-500 text-sm hover:underline"
                                            >
                                                Edit
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-between mt-6">
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="bg-gray-300 text-gray-800 px-4 py-1.5 rounded-md text-sm"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-green-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-green-500"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Restaurant;
