import React from 'preact/compat'

const MenuBtn = ({active, setActive}) => {
    return(
        <button className="menu-btn" onClick={() => setActive(!active)}>
            <img src="../../../assets/hamburger.svg" />
        </button>
    )
}

export default MenuBtn
