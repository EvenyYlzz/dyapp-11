import React,{ useState } from 'react'
import './topBar.css'
import {Link, HashRouter,Redirect,Route} from 'react-router-dom'

function tabBar(props) {
	return (
		<div className="top-bar">
			<div className="left"><span className="iconfont iconlive"></span></div>
			<div className="middle">
					<div className="item">
							<span className="active">同城</span>
					</div>
					<div className="item">
							<span>关注</span>
					</div>
					<div className="item">
							<span>推荐</span>
					</div>
			</div>
			<div className="right"><span className="iconfont iconsousuo"></span></div>
		</div>
	)
}

export default tabBar