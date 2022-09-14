import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Modal from '../modal/modal.jsx';

import bannerBg from '../../img/banner.png';
import WorkImg from '../../img/WorkImg.png';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';
import icon4 from '../../img/icon4.png';
import browserImg from '../../img/browser.png';
import mapimg from '../../img/ua.png';


const HomeBox = styled.div`
position:relative;
.banner{
	margin-bottom: 97px;


::after{
				content:'';
				position: absolute;
				height: 77px;
				width: 1px;
				background: #FFFFFF;
				top: 40px;
				left: 50%;
			}
::before{
				content:'';
				position: absolute;
				height: 132px;
				width: 1px;
				background: #FFFFFF;
				bottom: -50px;
				left: 50%;
			}



.container{
	max-width: 1327px;
	margin: 0 auto;
	height: 100%;
	background: url(${bannerBg})  50% -100px/cover no-repeat;
	.title{
		h1{
			padding-top: 287px;
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 500;
			font-size: 16px;
			line-height: 19px;
			color: #FFFFFF;
			text-align: center;
			
		}
		h2{
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-size: 48px;
			line-height: 48px;
			color: #FFFFFF;
			text-align: center;
		}		
	}
	.link{
		padding-bottom: 165px;
	}
	.link a{
		display: block;
		width: 251px;
		height: 61px;
		margin: 0 auto;
		margin-top: 97px;
		background: #FFFFFF;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 24px;
		text-align: center;
		line-height: 24px;
		padding-top: 19px;
		color: #000000;
		text-decoration: none;
		clip-path: polygon(91% 0, 100% 33%, 100% 100%, 0 100%, 0 0);
		transition: linear all 0.4s;
		:hover{
			background: #FFFFFF99;
			text-shadow: 0px 0px 7px white;
			}		
		}
	}
}
}
@media (max-width: 1440px){}
@media (max-width:1199px){
.banner{
	
	::before{
				content:'';
				position: absolute;
				height: 100px;
				width: 1px;
				background: #FFFFFF;
				bottom: -60px;
				left: 50%;
			}
		.container{
			width: 100%;
			padding: 0 10px;
			background: url(${bannerBg})  50% -100px/no-repeat scroll;
			.title{
				h1{
					padding-top: 187px;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 500;
					font-size: 16px;
					line-height: 19px;
					color: #FFFFFF;
					text-align: center;
					
				}
		}
	}
}
@media (max-width: 991px){
	.banner{
		margin-bottom: 20px;
	
	::before{
				content:'';
				position: absolute;
				height: 100px;
				width: 1px;
				background: #FFFFFF;
				bottom: 40px;
				left: 50%;
			}
		.container{
			.title{
				h1{
					padding-top: 187px;
					
				}
		}
	}
}
@media (max-width: 767px){}
@media(max-width:640px){
	.banner{
		.container{
			.title{
				h2{
					font-size: 36px;
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
const HowWork = styled.div`
.HowItWork{
	
	.container{
		max-width: 1211px;
		margin: 0 auto;
		border-left: solid 1px rgba(255, 255, 255, 0.15);
		.HowItWork_box{
			display: flex;
			flex-direction: row;
			.image{
				padding-left: 30px; 
			}
			.title{
				h2{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 300;
					font-size: 16px;
					line-height: 180%;
					color: #57D6FF;
					margin-left: 84px;
					position: relative;
					::before{
						content:'';
						position:absolute;
						height: 1px;
						width: 50px;
						background: #57D6FF;
						left: -84px;
						top: 14px;
					}
				}
				h3{
					margin-top: 17px;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 400;
					font-size: 39px;
					line-height: 39px;
					color: #FFFFFF;
				}
			}
			.text{
				p{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 300;
					font-size: 21.33px;
					line-height: 150%;
					color: #ABABAB;
					margin-top: 50px;
				}
				.first{
					margin-top: 60px;
				}
			}
			.download{
				margin-top: 74px;
				a{
					text-decoration: none;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 500;
					font-size: 16px;
					line-height: 19px;
					color: #00C5FF;
					border-bottom: solid 1px #00C5FF;
					transition: linear all 0.4s; 
					:hover{
						text-shadow: 0px 0px 7px white;
						color: white;
					}	
				}
			}
		}
	}
}
@media (max-width: 1440px){}
@media (max-width:1199px){
.HowItWork{
	.container{
		.HowItWork_box{
			display: flex;
			flex-direction: column-reverse;
			.text{
				display: flex;
				flex-direction: column;
				align-items: center;
			}
			.image{
				display: flex;
				flex-direction: column;
				align-items: center;
				img{
					vertical-align: top;
					width: auto;
					height: auto;
					max-width: 100%;
				}
			}
		}
	}
}
}
@media (max-width: 991px){

}
@media (max-width: 767px){}
@media(max-width:640px){
	.HowItWork{
	.container{
		.HowItWork_box{
			.info{
				padding: 0 15px;
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
const GoPlay = styled.div`
.play{
	.container{
		max-width: 1211px;
		margin: 0 auto;
		border-left: solid 1px rgba(255, 255, 255, 0.15);
		.title{
			h2{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 300;
					font-size: 16px;
					line-height: 180%;
					color: #57D6FF;
					margin-left: 40px;
					position: relative;
					text-align: center;
					::before{
						content:'';
						position:absolute;
						height: 1px;
						width: 50px;
						background: #57D6FF;
						margin-left: -84px;
						top: 14px;
					}
				}
				h3{
					margin-top: 17px;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 400;
					font-size: 39px;
					line-height: 39px;
					color: #FFFFFF;
					text-align: center;
				}
		}
		.icon_block{
			margin-top: 90px;
			display: flex;
			align-items: center;
   		justify-content: space-evenly;
			.block{
				display: flex;
				flex-direction: column;
        align-items: center;
				position: relative;
				p{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 300;
					font-size: 21.33px;
					line-height: 150%;
					color: #F1F1F1;
				}
			}
			.block1{
				::before{
					content:'';
					position: absolute;
					width: 73px;
					height: 1px;
					background: #50AFCD;
					right: -80px;
					top: 32px;

				}
			}
			.block2{
				::before{
					content:'';
					position: absolute;
					width: 73px;
					height: 1px;
					background: #50AFCD;
					right: -80px;
					top: 32px;

				}
			}
			.block3{
				::before{
					content:'';
					position: absolute;
					width: 73px;
					height: 1px;
					background: #50AFCD;
					right: -80px;
					top: 32px;

				}
			}
		}
		.start{
			margin-top: 90px;
			text-align: center;
			button{
					cursor: pointer;
					background: transparent;
					text-decoration: none;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 500;
					font-size: 16px;
					line-height: 19px;
					color: #00C5FF;
					border-bottom: solid 1px #00C5FF;
					transition: linear all 0.4s; 
					:hover{
						text-shadow: 0px 0px 7px white;
						color: white;
					}	
				}
		}
	}
}
@media (max-width: 1440px){}
@media (max-width:1199px){
	.container{
		width: 90%;
		padding: 0 10px;
	}
}
@media (max-width: 991px){
	.play{
	.container{
		max-width: 1211px;
		margin: 0 auto;
		border-left: solid 1px rgba(255, 255, 255, 0.15);
			.icon_block{
				margin-top: 10px;
				display: flex;
				flex-direction: column;
    		align-items: center;
				.block{
					margin-top: 40px;
					::before{
						display:none;
					}
				}
			}
			.start{
				margin-top: 30px;
				padding-bottom: 30px;
			}
		}
	}
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

const Subscriptions = styled.div`
.subscriptions{	
	.container{
		padding-top: 154px;
		max-width: 1211px;
		margin: 0 auto;
		border-left: solid 1px rgba(255, 255, 255, 0.15);
		.title{
			h2{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 300;
					font-size: 16px;
					line-height: 180%;
					color: #57D6FF;
					margin-left: 40px;
					position: relative;
					text-align: center;
					::before{
						content:'';
						position:absolute;
						height: 1px;
						width: 50px;
						background: #57D6FF;
						margin-left: -84px;
						top: 14px;
					}
				}
				h3{
					margin-top: 17px;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 400;
					font-size: 39px;
					line-height: 39px;
					color: #FFFFFF;
					text-align: center;
				}
		}
		.subscriptions_box{
			position: relative;
			margin-top: 80px;
			display: flex;
			justify-content: center;
			::before{
					content:'';
					position: absolute;
					height: 1px;
					width: 582px;
					background: #00C5FF;
					bottom: -90px;
				}
			.item{
				transition: linear all 0.7s;
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin: 0 5px;
				height: 543px;
				background: #1F2631;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
				border-radius: 5px;
				padding: 76px 42px 47px 42px;
				:hover{
					background: #00C5FF;
					box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
					h4{
						color: #141C24;
					}
					h5{
						color: #141C24;
					}
					p{
						color: #000000;
					}
					button{
						background: #141C24;
						color: #F1F8FF;
					}
				}
				h4{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 700;
					font-size: 36px;
					line-height: 42px;
					color: #FFFFFF;
				}
				h5{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 500;
					font-size: 24px;
					line-height: 28px;
					color: #FFFFFF;
					margin-top: 19px;
				}
				p{
					margin-top: 21px;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 300;
					font-size: 21.33px;
					line-height: 150%;
					color: #ABABAB;
				}
				button{
					padding-top: 14px;
					padding-bottom: 10px;
					background: #00C5FF;
					border-radius: 5px;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 500;
					font-size: 24px;
					line-height: 180%;
					color: #141C24;
					cursor: pointer;
				}
			}
			
		}

	}
}
@media (max-width: 1440px){}
@media (max-width:1199px){
	padding-bottom: 60px;
	.container{
		width: 90%;
		padding: 0 10px;
	}
}
@media (max-width: 991px){
	.subscriptions{	
	.container{
		padding-top: 50px;
		.subscriptions_box{
			justify-content: center;
			flex-direction: column;
			align-items: center;
			.item {
				margin-top: 15px;
			}
			}
		}
	}
}
@media (max-width: 767px){}
@media(max-width:640px){
	.subscriptions{	
	.container{
		padding-top: 154px;
		max-width: 1211px;
		margin: 0 auto;
		border-left: solid 1px rgba(255, 255, 255, 0.15);
		.subscriptions_box{
			position: relative;
			margin-top: 80px;
			display: flex;
			justify-content: center;
			::before{
					content:'';
					position: absolute;
					height: 1px;
					width: 350px;
					background: #00C5FF;
					bottom: -90px;
				}
			}
		}
	}
}
@media (max-width: 577px){}
@media (max-width: 500px){
	.subscriptions{	
	.container{
		padding-top: 54px;
		.subscriptions_box{
			margin-top: 30px;
		}
	}
}
}
@media (max-width: 470px){}
@media (max-width: 430px){}
@media (max-width: 400px){
		.subscriptions{	
	.container{
		.subscriptions_box{
			::before{
					width: 200px;
					bottom: -40px;
				}
			}
		}
	}
}
@media (max-width: 350px){}
`
const Browser = styled.div`
.browser{

		background: url(${browserImg})  800px 0/contain no-repeat;
	.container{
		display: flex;
		width: 1152px;
		margin: 0 auto;
		.title{
			padding-top: 300px;
			margin-bottom: 421px;
			h2{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 300;
					font-size: 16px;
					line-height: 180%;
					color: #57D6FF;
					margin-left: 90px;
					position: relative;
					::before{
						content:'';
						position:absolute;
						height: 1px;
						width: 50px;
						background: #57D6FF;
						margin-left: -84px;
						top: 14px;
					}
				}
				h3{
					margin-top: 17px;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 400;
					font-size: 39px;
					line-height: 39px;
					color: #FFFFFF;
					margin-bottom: 90px;
				}
				p{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 300;
					font-size: 21.33px;
					line-height: 150%;
					color: #ABABAB;
					margin-bottom: 60px;
				}
				a{
					text-decoration: none;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 500;
					font-size: 16px;
					line-height: 19px;
					color: #00C5FF;
					border-bottom: solid 1px #00C5FF;
					transition: linear all 0.4s; 
					:hover{
						text-shadow: 0px 0px 7px white;
						color: white;
					}	
				}
		}
	}
}
@media (max-width: 1440px){}
@media (max-width:1199px){
	.browser{
		background: url(${browserImg})  500px 0/contain no-repeat;
		.container{
			width: 90%;
			padding: 0 10px;
		}
	}
}
@media (max-width: 991px){
	.browser{
		background: url(${browserImg})  100px 250px/contain no-repeat;
		.container{
			justify-content: center;
			width: 90%;
			padding: 0 10px;
			.title{
			padding-top: 100px;
			margin-bottom: 551px;
			display: flex;
			flex-direction: column;
			a{
				width: 155px;
			}
			}
			.image{
				display: none;
			}
			
		}
	}
}
@media (max-width: 767px){
	.browser{
		background: url(${browserImg})  0px 350px/contain no-repeat;
	}
}
@media(max-width:640px){
	.browser{
		.container{
			.title{
			padding-top: 100px;
			margin-bottom: 451px;
			}
		}
	}
}
@media (max-width: 577px){
	.browser{
		background: url(${browserImg})  0px 350px/contain no-repeat;
		.container{
			.title{
			padding-top: 100px;
			margin-bottom: 371px;
			}
		}
	}
}
@media (max-width: 500px){
	.browser{
		background: url(${browserImg})  0px 390px/contain no-repeat;
		.container{
			.title{
			padding-top: 100px;
			margin-bottom: 321px;
			}
		}
	}
}
@media (max-width: 470px){}
@media (max-width: 430px){}
@media (max-width: 400px){
	.browser{
		background: url(${browserImg})  0px 440px/contain no-repeat;
		.container{
			.title{
			padding-top: 40px;
			}
		}
	}
}
@media (max-width: 350px){
		.browser{
		background: url(${browserImg})  0px 470px/contain no-repeat;
	}
}
`
const Map = styled.div`
.map{
	padding-bottom: 80px;
	.container{
		display: flex;
		justify-content: center;
    flex-direction: column;
    align-items: center;
		.title{
			h2{
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 300;
					font-size: 16px;
					line-height: 180%;
					color: #57D6FF;
					margin-left: 80px;
					position: relative;
					::before{
						content:'';
						position:absolute;
						height: 1px;
						width: 50px;
						background: #57D6FF;
						margin-left: -84px;
						top: 14px;
					}
				}
				h3{
					margin-top: 17px;
					font-family: 'Roboto';
					font-style: normal;
					font-weight: 400;
					font-size: 39px;
					line-height: 39px;
					color: #FFFFFF;
					margin-bottom: 90px;
				}
		}
		.image{
			position: relative;
			::before{
				content:'';
				position:absolute;
				top: 0;
				width: 461px;
				height: 461px;
				background: rgba(0, 185, 239, 0.15);
				filter: blur(250px);
				transform: matrix(-1, 0, 0, 1, 0, 0);
			}
		}
	}
}
@media (max-width: 1440px){}
@media (max-width:1199px){
	.container{
		width: 90%;
		padding: 0 10px;
		.image {
			img{
				vertical-align: top;
					width: auto;
					height: auto;
					max-width: 100%;
			}
		}
	}
}
@media (max-width: 991px){}
@media (max-width: 767px){}
@media(max-width:640px){
	.map{
	padding-bottom: 20px;
	.container{
		.title{
			h3{
			margin-bottom: 30px;
			}
		}
	}
}
@media (max-width: 577px){}
@media (max-width: 500px){}
@media (max-width: 470px){
.map{
	.container{
		.title{			
		}
		.image{
			position: relative;
			::before{
				width: 150px;
				height: 150px;
				background: rgba(0, 185, 239, 0.15);
				filter: blur(250px);
				transform: matrix(-1, 0, 0, 1, 0, 0);
			}
		}
	}
}
@media (max-width: 430px){}
@media (max-width: 400px){}
@media (max-width: 350px){}
`

const Home = () => {
	return(
		<div>
			<HomeBox>
			<section className="banner">
				<div className="container">
					<div className="title">
						<h1>Сервис облачного гейминга</h1>
						<h2>Преврати свое устройство в игровое</h2>
					</div>
					<div className="link">
						<Link  to='/download'>UPGRADE</Link>
					</div>
				</div>
			</section>
		</HomeBox>
		<HowWork>
				<section className="HowItWork">
					<div className="container">
						<div className="HowItWork_box">
							<div className="image">
								<img src={WorkImg} alt='img' title='img' />
							</div>
							<div className="text">
								<div className="title">
									<h2>Облачный гейминг</h2>
									<h3>Как это работает</h3>
								</div>
								<div className="info">
									<p className="first">
										Наши сервера запускают игру, и передают
										вам картинку, которой вы можете управлять
										в реальном времени!
									</p>
									<p>Приложение  запустится на ПК с процессором
										от 1.5 GHz , от 1 Gb RAM и доступом в интернет
										от 15 мбит/с
										на всех операционых системах
										Windows 7, 8, 10 MacOS и Linux .
									</p>
								</div>
								<div className="download">
									<Link  to='/download'>Загрузить</Link>
								</div>
							</div>
						</div>						
					</div>
				</section>
		</HowWork>
		<GoPlay>
			<section className="play">
				<div className="container">
					<div className="title">
						<h2>Быстрый старт</h2>
						<h3>Начни играть</h3>
					</div>
					<div className="icon_block">
						<div className="block1 block">
							<img src={icon1} alt='img' title='img' />
							<p>Cоздайте аккаунт</p>
						</div>
						<div className="block2 block">
							<img src={icon2} alt='img' title='img' />
							<p>Cкачайте модуль</p>
						</div>
						<div className="block3 block">
							<img src={icon3} alt='img' title='img' />
							<p>Выберите тариф </p>
						</div>
						<div className="block4 block">
							<img src={icon4} alt='img' title='img' />
							<p>Начни играть</p>
						</div>
					</div>
					<div className="start">
						<Modal />
					</div>
				</div>
			</section>
		</GoPlay>
		<Subscriptions>
			<section className="subscriptions">
				<div className="container">
					<div className="title">
						<h2>Гибкие тарифы</h2>
						<h3>Доступные подписки</h3>
					</div>
					<div className="subscriptions_box">
						<div className="item">
							<div className="txt">
								<h4>Почасовая<hr/>оплата</h4>
								<h5>45 грн.  -  час</h5>
								<p>Доступно:<hr/>
									Каталог игр<hr/>
									Виртуальный ПК<hr/>
									Безлимитная игровая сессия
								</p>
							</div>
							<button>Выбрать</button>
						</div>
						<div className="item line">
							<div className="txt">
								<h4>Подписка<hr/>Максимум</h4>
								<h5>1500 грн.  -  месяц</h5>
								<p>Доступно:<hr/>
									Каталог игр<hr/>
									Виртуальный ПК<hr/>
									Игровая сесия 10 часов/день
								</p>
							</div>
							<button>Выбрать</button>
						</div>
						<div className="item">
							<div className="txt">
								<h4>Подписка<hr/>Минимум</h4>
								<h5>700 грн.  -  месяц</h5>
								<p>Доступно:<hr/>
									Каталог игр<hr/>
									Игровая сессия 4 часов/день
								</p>
							</div>
							<button>Выбрать</button>
						</div>
					</div>
				</div>
			</section>
		</Subscriptions>
		<Browser>
		<section className="browser">
			<div className="container">
				<div className="title">
					<h2>Играть можно в браузере</h2>
					<h3>Запускайте на любых <hr/> устройствах</h3>
					<p>Наш модуль доступен на все популярные ОС<hr/>
						и работает на всех компьютерах.</p>
					<Link  to='/open'>Открыть в браузере</Link>
				</div>
				<div className="image">

				</div>
			</div>
		</section>
		</Browser>
		<Map>
			<section className="map">
				<div className="container">
					<div className="title">
						<h2>Игровые сервера на карте</h2>
						<h3>Карта локаций</h3>
					</div>
					<div className="image">
						<img src={mapimg} alt='img' title='img' />
					</div>
				</div>
			</section>
		</Map>
		</div>
	
		
	)
}
export default Home;





