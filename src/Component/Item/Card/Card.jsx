import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const Card = (props) => {
    return (
        <>
        <div className='card'>
            <figure>
                <img src={props.img} alt='props.img' title='props.img' />
            </figure>
            <small> Category: {props.category} </small>
            <div className='card_body'>
                <strong className='card-title'> {props.title} </strong>
                <strong> ${props.price} </strong>
            </div>
            <div className='card_button'>
            <AddShoppingCartIcon/>
            <a >  Add to Cart</a>
            </div>
        </div>

        
            
        </>
    )
}

export default Card;
