import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
export default function MainNavigation() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>good woirkd</div>
      <nav className={classes.nav}>
        <ul>
            <li>
<NavLink to='/quotes' activeClassName={classes.active}>
    all quotes
</NavLink>
            </li>
            <li>
<NavLink to='/new-quotes' activeClassName={classes.active}>
    add a  quotes
</NavLink>
            </li>
        </ul>
      </nav>
    </div>
  )
}
