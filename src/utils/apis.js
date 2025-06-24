import axios from "axios";


const GetCategory = async()  =>{

    try{
        const res = await axios.get("http://localhost:8080/category/home");
    
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
        const res = await axios.get("http://localhost:8080/restaurant/all");
       // console.log(res.data)
        return res.data;
    }catch(err){
        throw err;
    }
}

export const GetMenuItems = async() =>{
    try{
        const res = await axios.get("http://localhost:8080/menuItems/all");
       // console.log(res.data)
        return res.data;
    }catch(err){
        throw err;
    }
}


export const GetMenuItemsByCategory = async(category) =>{
    try{
        const res = await axios.get(`http://localhost:8080/menuItems/category/${category}`);
        console.log(res.data);
        return res.data;
    }catch(err){
        throw err;
    }
}
