const OrderIndex = (props) => {

    const loaded = () => {
        return  props.drinks.map((drink) => (
                <div className="container" key={drink._id}><h1>{drink.productName}</h1>
                                     <p>{drink.productSize}</p>
                                     <p>{drink.milk}</p>
                                     <p>{drink.flavor}</p>
                                     <p>{drink.toppings}</p>
                
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