import React from 'react';
import Logo from '../../img/logo2.png';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import vector from '../../img/Vector.png';
import youtube from '../../img/YouTube.png';
import discord from '../../img/Discord.png';

const FooterBox = styled.div`
padding: 56px 0;
background: #171717;
.container{
	max-width: 1203px;
	margin: 0 auto;
	display: flex;
	align-items: center;
  justify-content: space-between;
	.left{
		display: flex;
		align-items: center;
		.left_link {
			margin-left: 30px;
			display: flex;	
				a{
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 400;
				font-size: 12px;
				line-height: 11px;
				color: #ECECEC;
				text-decoration: none;
				border-bottom: solid 1px transparent;
				transition: linear all 0.4s; 
					:hover{
						text-shadow: 0px 0px 7px white;
						color: white;
						border-bottom: solid 1px #00C5FF;
					}			
			}
	
		}
		.left_link2 {
				margin-left: 20px;
				display: flex;	
				a{
				position: relative;
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 400;
				font-size: 12px;
				line-height: 11px;
				color: #838383;
				text-decoration: none;
				border-bottom: solid 1px transparent;
				transition: linear all 0.4s; 
					::before{
						content: '';
						position: absolute;
						height: 8px;
						width: 9px;
						background: url(${vector}) no-repeat;
						right: -15px;
					}
					:hover{
						text-shadow: 0px 0px 7px white;
						border-bottom: solid 1px #00C5FF;
					}			
			}
		}
	}
	.right{
		display: flex;
		.right_link{
			margin-right: 51px;
			a{
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 200;
				font-size: 12px;
				line-height: 14px;
				color: #FFFFFF;
				text-decoration: none;
				transition: linear all 0.4s;
				:hover{
						text-shadow: 0px 0px 7px white;
						border-bottom: solid 1px #00C5FF;
					}	 
			}
		}
		.right_link2{
			margin-right: 51px;
			a{
				font-family: 'Roboto';
				font-style: normal;
				font-weight: 200;
				font-size: 12px;
				line-height: 14px;
				color: #FFFFFF;
				text-decoration: none;
				transition: linear all 0.4s;
				:hover{
						text-shadow: 0px 0px 7px white;
						border-bottom: solid 1px #00C5FF;
					}	 
			}
		}
		.social{
			a{
				margin-right: 10px;
			}
			a:last-child{
				margin-right: 0px;
			}
		}
	}
}
@media (max-width: 1440px){}
@media (max-width:1199px){}
@media (max-width: 991px){
	.footer{
		.container{
			display: flex;
			flex-direction: column-reverse;
			.left{
				margin-top: 25px;
			}
		}
	}
}
@media (max-width: 767px){}
@media(max-width:640px){}
@media (max-width: 577px){
	.footer{
		.container{
			.left{
				margin-top: 10px;
				flex-direction: column;
				align-items: center;
				.left_link2{
					margin-top: 10px;
					margin-left: 0px;
				}
				.left_link{
					margin-top: 10px;
					margin-left: 0px;
				}
			}
			.right{
				flex-direction: column;
				align-items: center;
				.right_link{
					margin-right: 0;
					
				}
				.right_link2{
					margin-right: 0;
					margin-top: 10px;
				}
				.social{
					margin-top: 10px;
				}
			}
		}
	}
}
@media (max-width: 500px){}
@media (max-width: 470px){}
@media (max-width: 430px){}
@media (max-width: 400px){}
@media (max-width: 350px){}
`

const Footer = () =>{
  return(
    <FooterBox>
			<section className='footer'>
				<div className='container'>
					<div className="left">
						<div className="logo">
							<a href='#'><img src={Logo} alt='img' title='img' /></a>
						</div>
						<div className="left_link">
							<a href='#'>2022. All rights reserved.</a>
						</div>
						<div className="left_link2">
							<a href='#'>Design by desart</a>
						</div>
					</div>
					<div className="right">
						<div className="right_link">
							<a href='#'>Политика конфиденциальности</a>
						</div>
						<div className="right_link2">
							<a href='#'>Файлы Coocie</a>
						</div>
						<div className="social">
							<a href='#'><img src={youtube} alt='img' title='img' /></a>
							<a href='#'><img src={discord} alt='img' title='img' /></a>
							<a href='#'><img src={youtube} alt='img' title='img' /></a>
						</div>
					</div>
				</div>
    	</section>
		</FooterBox>
  )
}
export default Footer;