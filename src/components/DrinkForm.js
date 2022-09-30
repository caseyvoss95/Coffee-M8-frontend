import { useState } from "react";

const DrinkForm = (props) => {

    const [form, setForm] = useState({
        productName: "",
        productType: "",
        produtSize: "",
        productImage: "",
        milk: "",
        flavor: "",
        toppings: ""
    });
    console.log(form);

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: [event.target.value] });
        console.log(form);
    }

    return (
        <form>
            <select name="type" onChange={handleChange}>
                <option value="black coffee">black coffee</option>
                <option value="mocha">mocha</option>
                <option value="frappe">frappe</option>
                <option value="tea">tea</option>
                <option value="earl grey">earl grey</option>
            </select>
            <select name="type" onChange={handleChange}>
                <option value="black coffee">black coffee</option>
                <option value="mocha">mocha</option>
                <option value="frappe">frappe</option>
                <option value="tea">tea</option>
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
        </form>
    )
}

export default DrinkForm;