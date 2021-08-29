import React from 'react'
import Card from './Card/Card'
import Collection from './Collection';
const Item = () => {
    return (
        <div className='item'>
        {
            Collection.map((val,ind)=>{
                return <Card key={ind} id={ind} img={val.img} title={val.title} price={val.price} />
            })
        }
        
            
        </div>
    )
}

export default Item;
