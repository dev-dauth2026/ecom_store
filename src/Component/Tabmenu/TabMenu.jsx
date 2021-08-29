import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const TabMenu = (props) => {
    const fitlerItem = (cateItem) => {
        props.onFilter(cateItem)
    }
    return (
        
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid nav_head">
                    <a className="navbar-brand text-warning font-weight-bold" href="#" onClick={() => fitlerItem(null)}>Shree Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ms-auto mb-lg-0">
                            
                            
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#" onClick={() => fitlerItem(null)}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => fitlerItem('Men')}>Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => fitlerItem('Women')}>Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => fitlerItem('Teenage')}>Teenage</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" onClick={() => fitlerItem('Kids')}>Kids</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" ><AddShoppingCartIcon /> </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                       
                    </div>
                </div>
            </nav>

      

    )
}

export default TabMenu
