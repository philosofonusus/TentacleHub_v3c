import React from 'preact/compat'
import Catalog from "../../components/catalog";
import LayOut from "../../components/layout";

const HomeRoute = () => {
    return(
        <>
            <LayOut/>
            <div className="container">
                <Catalog/>
            </div>
        </>
    )
}
export default HomeRoute
