import React, {useState} from 'preact/compat'
import Header from "../header";
import SideBar from "../sidebar";

const LayOut = () => {
    const [sidebarActive, setSidebarActive] = useState(false)
        return(
    <>
        <Header sidebarActive={sidebarActive} setSidebarActive={setSidebarActive}/>
        <SideBar active={sidebarActive}/>
    </>
        )
}
export default React.memo(LayOut)
