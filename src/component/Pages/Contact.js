import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import vector from '../../img/Vector.png';
import youtube from '../../img/YouTube.png';
import discord from '../../img/Discord.png';

const ContactStyle = styled.div`
.download{
	position: fixed;
	width: 100%;
	height: 100%;
	background: #141C24;
	z-index: 999;
	top:0;
	left:0;
	.container{
		width: 683px;
		margin: 0 auto;
		.box{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.title{
				margin-top: 100px;
				h2{
					position: relative;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 400;
					font-size: 30px;
					line-height: 48px;
					color: #FFFFFF;
					a{
						position: absolute;
						top: 0;
						left:-30px;
						text-decoration: none;
						color: #FFFFFF;
						transition: linear all 0.5s;
						:hover{
							color: #FFFFFF88;
						}
					}
				}
			}
			.load{
				margin-top: 125px;
				display: flex;
				width: 100%;
				justify-content: center;
				a{
					
					img{
						margin: 0 10px;
						width: 30px;
						height: 30px;
					}
					position:relative;
					:hover{
						::before{
							background: rgba(0, 185, 239, 0.25);
							filter: blur(50px);
							transform: matrix(-1, 0, 0, 1, 0, 0);
							}							
						}
					::before{
						content:'';
						position:absolute;
						top: 0;
						width: 40px;
						height: 40px;
						transition: linear all 0.5s;						
					}
				}
			}
		}
	}
}

@media(max-width:640px){
	.download{
		.container{
			width: 90%;
		}
	}
}
`


const Contact = () => {
	return(
		<ContactStyle>
			<section className="download">
				<div className="container">
					<div className="box">
						<div className="title">
							<h2><Link className='first'  to='/'>&lt;</Link>Контакты</h2>
						</div>
						<div className="load">
							<a href='#' ><img src={youtube} alt='img' title='img' /></a>
							<a href='#' ><img src={discord} alt='img' title='img' /></a>
							<a href='#' ><img src={youtube} alt='img' title='img' /></a>
						</div>
					</div>
				</div>
			</section>
		</ContactStyle>
	)
}
export default Contact;
