import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import loadRar from '../../download/d.zip';
import Chrome from '../../img/Chrome.png';
import Windows from '../../img/Windows.png';
import Linux from '../../img/Linux.png';
import Mac from '../../img/Mac.png';

const DownloadStyle = styled.div`
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
				justify-content: space-evenly;
				a{
					position:relative;
					:hover{
						::before{
							background: rgba(0, 185, 239, 0.25);
							filter: blur(100px);
							transform: matrix(-1, 0, 0, 1, 0, 0);
							}							
						}
					::before{
						content:'';
						position:absolute;
						top: 0;
						width: 100px;
						height: 100px;
						transition: linear all 0.5s;						
					}
				}
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
@media(max-width:640px){
	.download{
		.container{
			width: 90%;
			.box{
				.title {
					margin-top: 70px;
					h2{
						font-size: 26px;
						a{
							left: 0px;
							top: -50px;
							font-size: 36px;
						}
					}
				}
				.load{
					margin-top: 10px;
					justify-content: space-evenly;
					flex-direction: column;
					align-items: center;
					a{
						margin-top: 20px;
					}
				}
			}
		}
	}
}
@media (max-width: 577px){}
@media (max-width: 500px){}
@media (max-width: 470px){}
@media (max-width: 430px){}
@media (max-width: 400px){}
@media (max-width: 350px){}
`

const Download = () => {
	return(
		<DownloadStyle>
			<section className="download">
				<div className="container">
					<div className="box">
						<div className="title">
							<h2><Link className='first'  to='/'>&lt;</Link>Выберете операционную систему</h2>
						</div>
						<div className="load">
							<a href={loadRar} ><img src={Chrome} alt='img' title='img' /></a>
							<a href={loadRar} ><img src={Windows} alt='img' title='img' /></a>
							<a href={loadRar} ><img src={Linux} alt='img' title='img' /></a>
							<a href={loadRar} ><img src={Mac} alt='img' title='img' /></a>
						</div>
					</div>
				</div>
			</section>
		</DownloadStyle>
		
	)
}
export default Download;