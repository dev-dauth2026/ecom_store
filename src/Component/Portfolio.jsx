import React, { useState } from 'react'
import Footer from './Footer';
import Collection from './Item/Collection';
import Item from './Item/Item';
import TabMenu from './Tabmenu/TabMenu';

const menuItem= [...new Set(Collection.map((elem)=>elem.category)),'all'];   
const Portfolio = () => {
    const [item,setItem]=useState(Collection);
    const FilterItem=(category)=>{
        if (category==='all'){
            setItem(Collection);
            return;
        }
        else{
            const updateItem=Collection.filter((elem)=>{
                return elem.category===category
            })
            setItem(updateItem);
        }
    }
    return (
        <>
        <TabMenu onFilter={FilterItem} item={item} menuItem={menuItem} />
        <Item item={item} />
        
        <Footer/>
        </>
    )
}

export default Portfolio;
