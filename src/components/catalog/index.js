import React from 'preact/compat'
import {connect} from "react-redux";
import List from "./list";

const Catalog = (props) => {
    return (
        <>
            <List list={props.list}/>
        </>)
}
export default connect(state => ({list: state.list}))(Catalog)
