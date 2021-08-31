import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const Card = ({img,title, category,price}) => {
    return (
        <>
        <div className='card'>
            <figure>
                <img src={img} alt={title} title={title} />
            </figure>
            <small> Category: {category} </small>
            <div className='card_body'>
                <strong className='card-title'> {title} </strong>
                <strong> ${price} </strong>
            </div>
            <button className='card_button'>  <AddShoppingCartIcon/> Add to Cart</button>
            
        </div>

        
            
        </>
    )
}

export default Card;
