import React from 'react';
import s from './style.css';

class RegScreen extends React.Component {

	constructor(props) {
		super(props);

		this.submit = this.submit.bind(this);

	}

	submit(event) {

		event.preventDefault();

		this.props.submitForm({
			name: this.refs.name.value,
			email: this.refs.email.value,
			phone: this.refs.phone.value
		});

	}

	render() {

		const { error } = this.props;
		let errorElement = null;

		if( error != null ) {
			errorElement = <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
		}

		return (
			<div>
				{errorElement}
				<form method="post" onSubmit={this.submit}>
					<div className={s.inputContainer}>
						<label htmlFor="name"><span>*</span> Ditt namn</label>
						<input type="text" id="name" ref="name" placeholder="Ditt namn" required />
					</div>
					<div className={s.inputContainer}>
						<label htmlFor="email"><span>*</span> E-post address</label>
						<input type="email" id="email" ref="email" placeholder="E-post address" required />
					</div>
					<div className={s.inputContainer}>
						<label htmlFor="phone"><span>*</span> Ditt telefonnummer</label>
						<input type="text" id="phone" ref="phone" placeholder="Ditt telefonnummer" required />
					</div>
					<div className={s.button}>
						<button type="submit">Registrera</button>
					</div>
				</form>
			</div>
		);
	}

}

export default RegScreen;
