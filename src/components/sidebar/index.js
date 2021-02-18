import React, {useRef, useState} from 'preact/compat'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SideBar = ({active}) => {
    const [activePage, setActivePage] = useState(0)
    const sidebar = useRef()
    const user = useSelector(state => state.user)

    const menuItems = [
        {title: "New Releases", link: '/'},
        {title: "Trending", link: '/'},
        {title: "Privacy Policy", link: '/'},
        {title: "Favourites", link: '/favourites'},
        {title: "Sign Out", link: '/'}
    ]
    return(
        <>
        <div className={`sidebar ${active && "sidebar_active"}`}>
            {!user ?
                <Link to="/login" className="user-href">
                    <span>Sign In</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
                    </svg>
                </Link>
                : <Link to="/profile" className="user-href">
                    <span>{user.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.7 12.7a6 6 0 1 0-7.4 0 10 10 0 0 0-6.2 8.2 1 1 0 0 0 2 0.2 8 8 0 0 1 15.9 0 1 1 0 0 0 1 0.9h0.1a1 1 0 0 0 0.9-1.1A10 10 0 0 0 15.7 12.7ZM12 12a4 4 0 1 1 4-4A4 4 0 0 1 12 12Z"/></svg>
                </Link>
            }
            <ul ref={sidebar} className="sidebar__menu">
                {menuItems.map((el, idx) => {
                    return <li className={idx === activePage && 'active'} onCLick={() => setActivePage(idx)}><Link to={el.link}>{el.title}</Link></li>
                })}
            </ul>
            <hr />
        </div>
        </>
    )
}
export default SideBar
