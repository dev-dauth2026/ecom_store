import React from 'react'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

        
const TabMenu = ({onFilter,menuItem}) => {
    
    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid nav_head">
                <h4 className="navbar-brand text-warning font-weight-bold"  >Shree Store</h4>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ms-auto mb-lg-0">
                        {
                            menuItem.map((elem,ind) => {
                                
                                return (
                                    <li className="nav-item" key={ind}>
                                        <button className="nav_button"  onClick={() => onFilter(elem)}> {elem}</button>
                                    </li>
                                )
                            })
                        }
                        <li className="nav-item">
                            <button className="nav_button" ><AddShoppingCartIcon /> </button>
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
