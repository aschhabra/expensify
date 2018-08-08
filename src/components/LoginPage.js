import React from "react";
import {connect} from "react-redux";
import {startLogin} from "../actions/auth";

export const LoginPage= ({startLogin}) =>(

<div className="box_layout">
  <div className="box_layout__box">
    <h1 className="box_layout__title"> Expensify App </h1>
    <p> It's time to get your expenses under control</p>
    <button className="button" onClick={startLogin}>Login with Google</button>
  </div>
</div>

);

const mapDispatchToProps= (dispatch) =>({
  startLogin: () => dispatch(startLogin())

});

export default connect(undefined,mapDispatchToProps)(LoginPage);
