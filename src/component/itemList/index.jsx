import React,{useState, useEffect} from "react";

const ItemsList = () => {
    const[items,setItems]= useState([]);
    const[isLoading,setIsLoading]= useState(true);
    const[error,setError]= useState(null);

    const fetchItems = async() => {
        try{
            const response = await fetch('http://localhost:5000/items');
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json();
            setItems(data);
        }
        catch(error){
            setError(error.message);
        } finally{
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchItems();
    },[]);
    
    return(
        <div>
        <h1>Items List</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
            {items.map(item =>(
                <li key={item.ID}> Name = {item.Name}       price = {item.Price} </li>
            ))}
        </ul>
        </div>
    )
}
export default ItemsList

