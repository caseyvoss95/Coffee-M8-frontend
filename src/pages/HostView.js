import { useState, useEffect } from "react";

const HostView = () => {
  
    const [drinkList, setDrinkList] = useState(null);

    const URL = "http://localhost:4000/orders/allOrders"; //where orders live
    const orderID = "63372013187b01b84368ce48"; //Dunkin order ID
  
    const getDrinks = async () => {
       console.log('get Drinks is on')
        const response = await fetch(URL);
        const data = await response.json();
        setDrinkList(data);
    }

    useEffect(() => {getDrinks()}, []);
    console.log("drinkList after useEffect", drinkList);

    return (
    <div>Host View</div>
  )
}

export default HostView