import classes from './User.module.css';

// rcc

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

// export default User;

import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
