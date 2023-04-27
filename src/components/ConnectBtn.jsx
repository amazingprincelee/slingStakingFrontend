import React from 'react';

 const btnStyle = {
    backgroundColor: "orange",
    color: "white",
    borderRadius: "15px",
    width: "100px",
    height: "40px",
    marginRight: "10px",
    
 }



function ConnectBtn(props) {


  function handleMouseOver(){
    console.log("mouse over");
  }

  return (
    <button onMouseEnter={handleMouseOver} style={btnStyle}>
      {props.btnName}
    </button>
  )
}

export default ConnectBtn;