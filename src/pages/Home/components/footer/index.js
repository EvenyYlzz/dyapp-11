import React, { } from 'react'
import './footer.css'

function Footer() {
	return (
		<div className="info-bar">
			<div className="item"><span>@yangstar</span></div>
			<div className="item"><span>这只是一个开端</span></div>
			<div className="item">
				<span className="iconfont iconyinfu2"></span>
				<div className="music-name">
					<span data-text="yangstar的原声">yangstar的原声</span>
				</div>
			</div>
		</div>
	)
}

export default Footer