import React, { useState } from 'react'
import Footer from './Footer';
import Collection from './Item/Collection';
import Item from './Item/Item';
import TabMenu from './Tabmenu/TabMenu';


const Portfolio = () => {
    const [item,setItem]=useState(Collection);
    const FilterItem=(catItem)=>{
        if (catItem===null){
            const home= Collection.filter((elem)=>{
                return elem
            })
            setItem(home)
        }
        else{
            const updateItem=Collection.filter((elem)=>{
                return elem.category===catItem
            })
            setItem(updateItem);
        }
    }
    return (
        <>
        <TabMenu onFilter={FilterItem} />
        <Item item={item} />
        
        <Footer/>
        </>
    )
}

export default Portfolio;
