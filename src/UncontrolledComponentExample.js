import React, { useRef } from "react";

function UnControlledComponent() {
    var txtName = useRef("null");
    const onChangeHandler = (event) => {
        txtName.current.value = event.target.value;
    };
    return (
    <>
    <label>Last Name: </label>
    <input ref={txtName} name="txt_name" onChange={onChangeHandler} />
    <div>{txtName.current.value}</div>
    </>);
    }

export default UnControlledComponent;