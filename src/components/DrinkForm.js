import { useState } from "react";
import drinkSeed from "./drinkSeed";

const DrinkForm = (props) => {

    const [form, setForm] = useState({
        productName: drinkSeed.productName[0],
        productType: drinkSeed.productType[0],
        produtSize: drinkSeed.productSize[0],
        productImage: drinkSeed.productImage[0],
        milk: drinkSeed.milk[0],
        flavor: drinkSeed.flavor[0],
        topping: drinkSeed.topping[0]
    });

    console.log(form);

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: [event.target.value] });
        console.log(form);
    }

    return (
        <form>
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
            <select name="size" onChange={handleChange}>
                <option value="small">small</option>
                <option value="meduim">medium</option>
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
            <input type="submit" value="submit"/>
        </form>
    )
}

export default DrinkForm;