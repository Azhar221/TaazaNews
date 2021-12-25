import React from 'react'
import { Link } from 'react-router-dom'

export default function Category() {
    return (
        <>
            <div className="category">
                <div className="category-list">
                        <li><Link to="/">AllNews</Link></li>
                        <li><Link to="/category/business">business</Link></li>
                        <li><Link to="/category/entertainment">entertainment</Link></li>
                        <li><Link to="/category/general">general</Link></li>
                        <li><Link to="/category/health">health</Link></li>
                        <li><Link to="/category/science">science</Link></li>
                        <li><Link to="/category/sports">sports</Link></li>
                        <li><Link to="/category/technology">technology</Link></li>
                        {/* <li><a onClick={console.log(this.props)}>technology</a></li> */}
                        {/* <li><Link to="/">AllNews</Link></li>
                    <li><Link to="/category/business">business</Link></li>
                    <li><Link to="/category/entertainment">entertainment</Link></li>
                    <li><Link to="/category/general">general</Link></li>
                    <li><Link to="/category/health">health</Link></li>
                    <li><Link to="/category/science">science</Link></li>
                    <li><Link to="/category/sports">sports</Link></li>
                    <li><Link to="/category/technology">technology</Link></li> */}


                </div>
            </div>
        </>
    )
}
