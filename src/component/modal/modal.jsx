import React from "react";
//import styled from "styled-components";
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';



export default class Modal extends  React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Акаун ' + this.state.value + ' зарегистрирован');
    event.preventDefault();
  }

  render() {
    return (
		<div>
						<Popup trigger={<button>Начать</button>} position="top left">
							{close => (
								<div className="modal">
									<div className="container">
										<div className="header">
											<h2><a className="close" onClick={close}>&lt;</a>Регистрация</h2>
										</div>
										<div className="content">
											<form className="formReg" onSubmit={this.handleSubmit}>
												<input type="text" placeholder="Почта / Телефон" value={this.state.value} onChange={this.handleChange} required/>
												<input placeholder="Пароль" type="password" required/>
												<input className="btn" type="submit" value="Зарегестрироваться" />
											</form>
										</div>										
									</div>
								</div>
							)}
						</Popup>
		</div>
    );
  }
}