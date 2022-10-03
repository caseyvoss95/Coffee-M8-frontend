const OrderIndex = (props) => {

    const loaded = () => {
        return  props.drinks.map((drink) => (
                <div key={drink._id}><h1>{drink.productName}</h1>
                                     <p>{drink.productSize}</p>
                
                
                </div>
        ))
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }

    return (
        <div>{props.drinks ? loaded() : loading()}</div>
    )
}

export default OrderIndex;