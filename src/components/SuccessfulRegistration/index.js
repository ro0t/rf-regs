import React from 'react';
import Thumby from '../../assets/thumby.gif';
import s from './style.css';

class SuccessfulRegistration extends React.Component {

	render() {
		return (
			<div className={s.centerText}>
				<div className={s.centerText}>
					<img src={Thumby} alt="Thumbs up" width="100" className={s.reverse} />
					<span className={s.wizard}>😄</span>
					<img src={Thumby} alt="Thumbs up" width="100" />
				</div>
				<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frookiefestivalen&tabs=timeline&width=340&height=120&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=1634043703359522" width="340" height="140" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
				<p>
					Nu behöver du bara <strong>gilla oss på facebook</strong> för att va med i tävlingen
				</p>
				<a href="https://www.facebook.com/rookiefestivalen" className={s.complete} target="_blank">Gå til Rookiefestivalens facebook sida</a>
			</div>
		);
	}

}

export default SuccessfulRegistration;
