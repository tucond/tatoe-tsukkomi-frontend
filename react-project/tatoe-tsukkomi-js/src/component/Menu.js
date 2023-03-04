import React from 'react'
import { Link } from "react-router-dom";
import { slide as Slide} from "react-burger-menu";
import './Menu.css';

const Menu = (props) => {
  return (
    <Slide {...props}>

      <Link style={{color: 'white'}} to="/">
        ホーム
      </Link>

      <Link style={{color: 'white'}} to="/favorites" >
        お気に入り
      </Link>
    </Slide>
  )
}

export default Menu
