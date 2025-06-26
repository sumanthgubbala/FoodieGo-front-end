import axios from "axios";



const auth = sessionStorage.getItem('auth');

export const SignupApi = async(userData) => {
    const signupData = {
        firstName: userData.first_name,
        lastName: userData.last_name,
        userName: userData.username,
        email: userData.email,
        password: userData.password,
        address: userData.address,
        phoneNumber: userData.phoneNumber,
        role: userData.role
    };
    console.log("Signup Data:", signupData);
    try {
        const response = await axios.post("http://localhost:1234/user/register", signupData, {
        });
        console.log("User signed up successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error signing up user:", error.response?.data || error.message);
        throw error;
    }
}

const GetCategory = async()  =>{

    try{
        const res = await axios.get("http://localhost:1234/category/home");
    
    return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }

}
export default GetCategory;

export const GetRestaurants = async() =>{
    try{
        const res = await axios.get("http://localhost:1234/restaurant/all");
       // console.log(res.data)
        return res.data;
    }catch(err){
        throw err;
    }
}

export const GetMenuItems = async() =>{
    try{
        const res = await axios.get("http://localhost:1234/menuItems/all");
       // console.log(res.data)
        return res.data;
    }catch(err){
        throw err;
    }
}


export const GetMenuItemsByCategory = async(category) =>{
    try{
        const res = await axios.get(`http://localhost:1234/menuItems/category/${category}`);
        console.log(res.data);
        return res.data;
    }catch(err){
        throw err;
    }
}

export const addItemsToCart = async(cartItemDTO) => {
    try {
        const response = await axios.post("http://localhost:1234/cart/add", cartItemDTO, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Item added to cart:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error saving to DB:", error.response?.data || error.message);
        throw error;
    }
}

export const GetCartItems = async(userId) => {
    try {
        const response = await axios.get(`http://localhost:1234/cart/user/${userId}`, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Cart items fetched:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching cart items:", error.response?.data || error.message);
        throw error;
    }
}

export const DeleteCartItem = async(cartItemId) => {
    try {
        const response = await axios.delete(`http://localhost:1234/cart/${cartItemId}`, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Cart item deleted:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error deleting cart item:", error.response?.data || error.message);
        throw error;
    }
}

export const UpdateCartQuantity = async(cartItemId, newQuantity) => {
    try {
        const response = await axios.put(`http://localhost:1234/cart/update`, { id: cartItemId , quantity: newQuantity }, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Cart item quantity updated:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating cart item quantity:", error.response?.data || error.message);
        throw error;
    }
}

export const PlaceOrderByUserId = async(userId) => {
    try {
        const response = await axios.post(`http://localhost:1234/orders/batch`, { userId : userId}, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Order placed successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error placing order:", error.response?.data || error.message);
        throw error;
    }
}

export const getAllOrdersByUserId = async(userId) => {
    try {
        const response = await axios.get(`http://localhost:1234/orders/myOrders/${userId}`, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Orders fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching orders:", error.response?.data || error.message);
        throw error;
    }
}

export const GetRestaurantsByOwnerId = async(ownerId) => {
    try {
        const response = await axios.get(`http://localhost:1234/restaurant/user/${ownerId}`, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Restaurants fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching restaurants:", error.response?.data || error.message);
        throw error;
    }
}

export const AddRestaurant = async(restaurantData) => {
    try {
        const response = await axios.post("http://localhost:1234/restaurant/add", restaurantData, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Restaurant added successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error adding restaurant:", error.response?.data || error.message);
        throw error;
    }
}

export const GetRestaurantById = async(id) => {
    try {
        const response = await axios.get(`http://localhost:1234/restaurant/${id}`, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Restaurant fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching restaurant:", error.response?.data || error.message);
        throw error;
    }
}
export const UpdateRestaurant = async(restaurantData) => {
    try {
        const response = await axios.put("http://localhost:1234/restaurant/update", restaurantData, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Restaurant updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating restaurant:", error.response?.data || error.message);
        throw error;
    }
}
export const GetMenuItemsByRestaurantId = async(restaurantId) => {
    try {
        const response = await axios.get(`http://localhost:1234/menuItems/restaurant/${restaurantId}`, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Menu items fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching menu items:", error.response?.data || error.message);
        throw error;
    }
}
export const GetOrderRequests = async(restaurantId) => {
    try {
        const response = await axios.get(`http://localhost:1234/orders/restaurant/${restaurantId}`, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Order requests fetched successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching order requests:", error.response?.data || error.message);
        throw error;
    }
}

export const UpdateOrderStatus = async(orderId, newStatus) => {
    try {
        console.log("Updating order status for orderId:", orderId, "to newStatus:", newStatus);
        const response = await axios.put("http://localhost:1234/orders/update", { id:orderId, orderStatus: newStatus }, {
            headers: {
                'Authorization': auth
            }
        });
        console.log("Order status updated successfully:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error updating order status:", error.response?.data || error.message);
        throw error;
    }
}