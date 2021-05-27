import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <BurgerMenu>
      <Link className="menu-item" to="/gallery">
        Галерея
      </Link>
      <Link className="menu-item" to="/me">
        Обо мне
      </Link>
    </BurgerMenu>
  )
}

export default Header
