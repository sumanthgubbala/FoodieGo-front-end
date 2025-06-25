import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GetRestaurantById, GetMenuItemsByRestaurantId, UpdateRestaurant } from '../utils/apis';
import NavBar from '../components/NavBar';

const EditRestaurant = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phoneNumber: '',
        email: '',
        openingTime: '',
        closingTime: '',
        imgUrl: '',
        status: 'OPEN',
    });

    // Fetch restaurant info
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await GetRestaurantById(id);
                const menu = await GetMenuItemsByRestaurantId(id);
                setRestaurant(res);
                setMenuItems(menu);
                setFormData({
                    name: res.name,
                    address: res.address,
                    phoneNumber: res.phoneNumber,
                    email: res.email,
                    openingTime: res.openingTime,
                    closingTime: res.closingTime,
                    imgUrl: res.imgUrl,
                    status: res.status,
                });
            } catch (err) {
                console.error("Error fetching restaurant or menu items:", err);
            }
        };
        fetchData();
    }, [id]);

    // Handle form change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle update
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedData = { ...formData, id }; // include ID for backend
            const response = await UpdateRestaurant(updatedData);
            if (response) {
                alert("Restaurant updated successfully!");
                navigate("/manage-restaurant");
            }
        } catch (err) {
            console.error("Failed to update restaurant:", err);
        }
    };

    return (
        <div>
            <NavBar />
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Edit Restaurant</h1>

                {restaurant ? (
                    <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded" />
                        <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded" />
                        <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone" className="border p-2 rounded" />
                        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded" />
                        <input name="openingTime" value={formData.openingTime} onChange={handleChange} placeholder="Opening Time (HH:mm:ss)" className="border p-2 rounded" />
                        <input name="closingTime" value={formData.closingTime} onChange={handleChange} placeholder="Closing Time (HH:mm:ss)" className="border p-2 rounded" />
                        <input name="imgUrl" value={formData.imgUrl} onChange={handleChange} placeholder="Image URL" className="border p-2 rounded" />
                        <select name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded">
                            <option value="OPEN">Open</option>
                            <option value="CLOSED">Closed</option>
                        </select>
                        <button type="submit" className="col-span-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700">
                            Update Restaurant
                        </button>
                    </form>
                ) : (
                    <p>Loading restaurant...</p>
                )}

                {/* Menu Items Section */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold mb-3">Menu Items</h2>
                    {menuItems.length > 0 ? (
                        <div className="grid gap-4 md:grid-cols-2">
                            {menuItems.map((item) => (
                                <div key={item.id} className="border p-4 rounded shadow">
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p className="text-sm text-gray-600">₹{item.price}</p>
                                    <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No menu items found for this restaurant.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditRestaurant;
