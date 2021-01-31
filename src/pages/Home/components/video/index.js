import React, { } from 'react'
import '~video-react/dist/video-react.css';
import { Player } from 'video-react';

function Video() {
	return (
		<Player>
			<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
		</Player>
	)
}

export default Video