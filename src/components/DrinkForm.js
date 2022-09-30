import { useState } from "react";
import drinkSeed from "./drinkSeed";

const DrinkForm = (props) => {

    //establishing default drink values
    const defaultProductName = drinkSeed.productName[0];
    const defaultProductType = drinkSeed.productType[0];
    const defaultProductSize = drinkSeed.productSize[0];
    const defaultProductImage = drinkSeed.productImage[0];
    const defaultMilk = drinkSeed.milk[0];
    const defaultFlavor = drinkSeed.flavor[0];
    const defaultTopping = drinkSeed.topping[0];


    const [form, setForm] = useState({
        
        productName: defaultProductName,
        productType: defaultProductType,
        produtSize: defaultProductSize,
        productImage: defaultProductImage,
        milk: defaultMilk,
        flavor: defaultFlavor,
        topping: defaultTopping
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