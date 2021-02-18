import React from 'preact/compat'
import SearchField from "./SearchField";
import HeaderLogo from "./HeaderLogo";
import MenuBtn from "./MenuBtn";

const Header = (props) => {
	return(
		<header className="header">
			<HeaderLogo/>
			<div className="header__main">
				<MenuBtn active={props.sidebarActive} setActive={props.setSidebarActive}/>
				<HeaderLogo />
				<SearchField />
			</div>
		</header>
)
};

export default Header;
