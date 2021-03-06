import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from './../Container/Container.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore.js';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.defaultHeaderIcon}/>
            </Link>
            <Search />
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
              <NavLink exact to='/faq'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
      </header> 
    );
  }   
}

export default Header;
