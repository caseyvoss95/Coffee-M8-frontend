import { useState } from "react";
import drinkSeed from "./drinkSeed";

const DrinkForm = (props) => {

    const [form, setForm] = useState({
        productName: drinkSeed.productName[0],
        productType: drinkSeed.productType[0],
        productSize: drinkSeed.productSize[0],
        productImage: drinkSeed.productImage[0],
        milk: drinkSeed.milk[0],
        flavor: drinkSeed.flavor[0],
        toppings: drinkSeed.topping[0],
        orderId : "63372013187b01b84368ce48"
    });

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value});
        console.log(form);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createDrink(form);
        console.log("drink is", form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="productName" onChange={handleChange}>
                <option value="coffee">coffee</option>
                <option value="tea">tea</option>
                <option value="coco">coco</option>
            </select>
            <select name="productType" onChange={handleChange}>
                <option value="black">black</option>
                <option value="mocha">mocha</option>
                <option value="frappe">frappe</option>
                <option value="earl grey">earl grey</option>
            </select>
            <select name="productSize" onChange={handleChange}>
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
            </select>
            <select name="milk" onChange={handleChange}>
                <option value="hald and half">half and half</option>
                <option value="whole milk">whole milk</option>
                <option value="almond milk">almond milk</option>
                <option value="oat milk">oat milk</option>
            </select>
            <select name="flavor" onChange={handleChange}>
                <option value="none">(none)</option>
                <option value="pumpkin spice">pumpkin spice</option>
                <option value="apple cinnamon">apple cinnamon</option>
            </select>
            <select name="toppings" onChange={handleChange}>
                <option value="none">(none)</option>
                <option value="whipped cream">whipped cream</option>
            </select>
            <input type="submit" value="submit" />
        </form>
    )
}

export default DrinkForm;