import React from 'react';
import ReactTooltip from "react-tooltip";

const char = (props) => {

const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    boxShadow: '1px 3px 1px #eee',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#999'
}
  function changeBackground(e) {
    e.target.style.background = 'salmon';
    e.target.style.color = 'white';
  }

   function backBackground(e) {
    e.target.style.background = 'none';
    e.target.style.color = '#999';
  }

    return (
        
        <div data-tip="Click to delete" data-for='toolTip1' data-place='top' style={style} onClick={props.clicked} onMouseOver={changeBackground} onMouseLeave={backBackground}>
            {props.character}
<ReactTooltip id="toolTip1" />
        </div>
        
    )
};
export default char;