import React from 'react'
import Card from './Card/Card'
const Item = (props) => {
    return (
        <div className='item'>
        {
            props.item.map((elem)=>{
                const {img,title,category,price}=elem
                return <Card  img={img} title={title} category={category} price={price} />
            })
        }
        </div>
    )
}

export default Item;
