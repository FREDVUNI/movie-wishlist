import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to='/'> wish list</Link>
                    </div>
                    <ul className="nav-links">
                        <li>
                            <Link to='/wish-list'>watch list</Link>
                        </li>
                        <li>
                            <Link to='/watched'>watched list</Link>
                        </li>
                        <li>
                            <Link to='/add' className="btn">+ Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header