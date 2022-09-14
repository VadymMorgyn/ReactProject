import React from 'react';
import Logo from '../../img/logo.png';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Burger from './burger.jsx';



const HeaderBox = styled.div`
	
	background: #141C24;
	width: 100%;
	padding: 42px 0;
	padding-bottom: 10px;
	.container{
		max-width: 1156px;
		margin: 0 auto;
	}
	.header_box{
		margin-top: 35px;
		margin-bottom: 39px;
		display: flex;
		justify-content: space-between;
		align-items: center;
			.menu_burger{
				display: none;
			}
			.menu_bar nav ul{
				display: flex;
				list-style: none;
				
				li a{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 300;
					font-size: 16px;
					line-height: 180%;
					color: #FFFFFF;
					text-decoration: none;
					margin-left: 47px;
					border-bottom: 1px solid transparent;
					padding-bottom: 2px;
					transition: linear all 0.4s; 
					:hover{
						text-shadow: 0px 0px 7px white;
						border-bottom: 1px solid #00C5FF; 
					}					
				}
				.first {
						margin-left: 0px;
					}
				
			}
		}		
	}


@media (max-width: 1440px){}
@media (max-width:1199px){
	
	.header_box{
		.menu_bar{
			display: none;
			}
		.menu_burger{
					display: block;
			}
	}
}
@media (max-width: 991px){
	background: transparent;
}
@media (max-width: 767px){}
@media(max-width:640px){}
@media (max-width: 577px){}
@media (max-width: 500px){}
@media (max-width: 470px){}
@media (max-width: 430px){}
@media (max-width: 400px){}
@media (max-width: 350px){}
`

const Header = () =>{
  return(
    <HeaderBox>
			<section className='header'>
				<div className='container'>
					<div className="header_box">
						<div className="logo">
							<a href='#'><img src={Logo} alt='img' title='img' /></a>
						</div>
						<div className="menu_bar">
								<nav>    
									<ul>
										<li ><Link className='first'  to='/'>Главная</Link></li>
										<li ><Link  to='/server'>Сервера</Link></li>
										<li ><Link  to='/download'>Скачать</Link></li>
										<li ><Link  to='/open'>Открыть в браузере</Link></li>
										<li ><Link  to='/price'>цены</Link></li>
										<li ><Link  to='/support'>Тех поддержка</Link></li>
										<li ><Link  to='/contact'>Контакты</Link></li>
								</ul>
							</nav>
						</div>
						<div className="menu_burger">
							<Burger />
						</div>
					</div>
				</div>
    	</section>
		</HeaderBox>
  )
}

export default Header;