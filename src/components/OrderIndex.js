const OrderIndex = (props) => {

    const loaded = () => {
        return props.drinks.map((drink) => (
            <div className="container" id="drinks" key={drink._id}><h5>{drink.userId}: {drink.productName}</h5>
                <p>{drink.productSize}, {drink.milk}, {drink.flavor}, {drink.toppings}</p>
            </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <div className="container">{props.drinks ? loaded() : loading()}</div>
    )
}

export default OrderIndex;