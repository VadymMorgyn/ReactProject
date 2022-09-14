import React from 'react';
import Logo from '../../img/logo.png';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

export default class Burger extends React.Component {
	constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }


  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  

  closeMenu () {
    this.setState({menuOpen: false})
  }


  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  showSettings (event) {
    event.preventDefault();

  }

  render () {

    return (
      <Menu  isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
        <nav>    
						<ul>
							<li ><Link onClick={() => this.closeMenu()}  className='first'  to='/'>Главная</Link></li>
							<li ><Link onClick={() => this.closeMenu()}  to='/server'>Сервера</Link></li>
							<li ><Link onClick={() => this.closeMenu()}  to='/download'>Скачать</Link></li>
							<li ><Link onClick={() => this.closeMenu()}  to='/open'>Открыть в браузере</Link></li>
							<li ><Link onClick={() => this.closeMenu()}  to='/price'>цены</Link></li>
							<li ><Link onClick={() => this.closeMenu()}  to='/support'>Тех поддержка</Link></li>
							<li ><Link onClick={() => this.closeMenu()}  to='/contact'>Контакты</Link></li>
					</ul>
				</nav>
      </Menu>
    );
  }
}