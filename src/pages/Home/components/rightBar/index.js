import React,{ } from 'react'
import './rightBar.css'
import logo from "../../../../assets/logo.png"

function RightBar() {
    return (
			<div className="right_bar">
				<div className="right-item">
					<div className="avatar-border">
							<img src={ logo } alt="" />
							<span className="iconfont iconziyuan2"></span>
					</div>
				</div>
				<div className="item-icon">
					<span className="iconfont iconaixinxiantiao" ></span>
					<p>6.2w</p>
				</div>
				<div className="item-icon">
					<span className="iconfont iconpinglun"></span>
					<p>1.2w</p>
				</div>
				<div className="item-icon">
					<span className="iconfont iconicon-" ></span>
					<p>3.0w</p>
				</div>
				<div className="right-item">
					<div className="right-music">
						<img src={ logo } alt="" />
					</div>
				</div>
			</div>
    )
}

export default RightBar