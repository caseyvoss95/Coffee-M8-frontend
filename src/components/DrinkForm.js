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
        orderId: "63372013187b01b84368ce48"
    });

    const [drinkAlert, setDrinkAlert] = useState("");

    const [drinkOrdered, setDrinkOrdered] = useState(false);

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(form);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!drinkOrdered) { //ignore subsequent attemps to submit
            props.createDrink(form);
            console.log("drink is", form);
            setDrinkAlert("Drink Submitted");
            setDrinkOrdered(true);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Drink Name</label>
                <select className="form-control" name="productName" onChange={handleChange}>
                    <option value="coffee">coffee</option>
                    <option value="tea">tea</option>
                    <option value="coco">coco</option>
                </select>
                <label>Coffee Type</label>
                <select className="form-control" name="productType" onChange={handleChange}>
                    <option value="black">black</option>
                    <option value="mocha">mocha</option>
                    <option value="frappe">frappe</option>
                    <option value="earl grey">earl grey</option>
                </select>
                <label>Size</label>
                <select className="form-control" name="productSize" onChange={handleChange}>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>
                <label>Milk</label>
                <select className="form-control" name="milk" onChange={handleChange}>
                    <option value="hald and half">half and half</option>
                    <option value="whole milk">whole milk</option>
                    <option value="almond milk">almond milk</option>
                    <option value="oat milk">oat milk</option>
                </select>
                <label>Flavor</label>
                <select className="form-control" name="flavor" onChange={handleChange}>
                    <option value="none">(none)</option>
                    <option value="pumpkin spice">pumpkin spice</option>
                    <option value="apple cinnamon">apple cinnamon</option>
                </select>
                <label>Add-ons</label>
                <select className="form-control" name="toppings" onChange={handleChange}>
                    <option value="none">(none)</option>
                    <option value="whipped cream">whipped cream</option>
                </select>
                <button className="btn" id="submit" type="submit" value="submit">submit</button>
            </div>
            {drinkAlert}
        </form>

    )
}

export default DrinkForm;