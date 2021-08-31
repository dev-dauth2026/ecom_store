import React from 'react'
import Card from './Card/Card'
const Item = ({item}) => {
    return (
        <div className='item'>
        {
            item.map((elem)=>{
                const {id,img,title,category,price}=elem
                return <Card key={id} img={img} title={title} category={category} price={price} />
            })
        }
    
        </div>
    )
}

export default Item;
