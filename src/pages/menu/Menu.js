import React, { useState, useEffect } from 'react';
import './Menu.css';
import MenuCards from '../../components/menu-cards/MenuCards';
import { getMenu } from '../../data/data';

const Menu = () => {
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    setMenuList(getMenu());
  }, []);

  return (
    <section className='menu'>
      <MenuCards specialsList={menuList} title={'Our Menu'} isSpecial={false} />
    </section>
  );
};

export default Menu;
