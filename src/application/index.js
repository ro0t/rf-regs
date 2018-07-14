import React from 'react';
import firebase from 'firebase/app';
import database from 'firebase/database';
import s from './style.css';

import RegScreen from '../components/RegScreen';
import SuccessfulRegistration from '../components/SuccessfulRegistration';

const DEBUG = true;

const Screens = {
	RegistrationForm: 1,
	SuccessfulRegistration: 2
}

const fbConfig = {
    apiKey: "AIzaSyDfk6l9zMhTqPGzl0hAyLLlLH54UbtbA1k",
    authDomain: "rookiefestivalen-ea9d9.firebaseapp.com",
    databaseURL: "https://rookiefestivalen-ea9d9.firebaseio.com",
    projectId: "rookiefestivalen-ea9d9",
    storageBucket: "rookiefestivalen-ea9d9.appspot.com",
    messagingSenderId: "918519191350"
};

class AppContainer extends React.Component {

	constructor(props) {
		super(props);

		firebase.initializeApp(fbConfig);

		this.submitRegistration = this.submitRegistration.bind(this);

		this.state = {
			error: null,
			screen: Screens.RegistrationForm
		};

	}

	submitRegistration(data) {

		var user = firebase.database().ref(`users`).push({
		    name: data.name,
		    email: data.email,
		    phone: data.phone
		}, ( error ) => {

			if( error == null ) {
				// Saved
				this.setState({
					screen: Screens.SuccessfulRegistration,
					error: null
				});

			} else {
				// Not saved log the error
				!DEBUG || console.error('Error registering the user', error);

				this.setState({
					...this.state,
					error: 'Sorry! the registration is invalid, please try again.'
				})
			}

		});

	}

	render() {

		let screen = null,
			text = null,
			winners = <strong>Vi lottar TVÅ vinnare varje månad!</strong>;

		if( this.state.screen == Screens.RegistrationForm ) {
			screen = <RegScreen error={this.state.error} submitForm={this.submitRegistration} />
			text = <span>Skriv in ditt namn, e-post och telefonnummer och du har en chans att vinna<br /> 2 biljetter till Rookiefestivalen i Hultsfred! <br />{winners}</span>
		} else {
			screen = <SuccessfulRegistration />
			text = winners
		}

		return (
			<div className={s.wrapper}>
				<header>
					<a href="http://www.rookiefestivalen.se" target="_blank" className={s.logo}></a>
					<p>{text}</p>
				</header>
				<div className={s.content}>
					{screen}
				</div>
				<footer>
					<p>Läs mer om festivalen på <a href="http://www.rookiefestivalen.se" target="_blank">www.rookiefestivalen.se</a></p>
				</footer>
			</div>
		);
	}

}

export default AppContainer;
