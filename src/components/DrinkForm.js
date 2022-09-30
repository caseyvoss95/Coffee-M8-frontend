const DrinkForm = () => {

    return (
        <form>
            <select>
                <option value="black coffee">black coffee</option>
                <option value="mocha">mocha</option>
                <option value="frappe">frappe</option>
                <option value="tea">tea</option>
                <option value="earl grey">earl grey</option>
            </select>
            <select>
                <option value="small">small</option>
                <option value="meduim">medium</option>
                <option value="large">large</option>
            </select>
            <select>
                <option value="hald and half">half and half</option>
                <option value="whole milk">whole milk</option>
                <option value="almond milk">almond milk</option>
                <option value="oat milk">oat milk</option>
            </select>
            <select>
                <option value="none">(none)</option>
                <option value="pumpkin spice">pumpkin spice</option>
                <option value="apple cinnamon">apple cinnamon</option>
            </select>
        </form>
    )
}

export default DrinkForm;