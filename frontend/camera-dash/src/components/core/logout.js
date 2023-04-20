import React from 'react';

function LogoutButton(props) {
  return (
    <button className="btn"  style={{color:'white'}} onClick={props.onClick}>
      Logout
    </button>
  );
}

export default LogoutButton;
