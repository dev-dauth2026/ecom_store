import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Footer from './Footer';
import Item from './Item/Item';
import TabMenu from './Tabmenu/TabMenu';

const Portfolio = () => {
    return (
        <>
        <TabMenu/>
        {/* <Switch>
            <Route exact path='' component={} />
            <Route exact path='' component={} />
            <Route exact path='' component={} />
        </Switch> */}
        <Item/>
        <Footer/>
        </>
    )
}

export default Portfolio;
