import React, { useEffect } from 'react'
import './home.css'
import RightBar from './components/rightBar'
import logo from "../../assets/logo.png"
import Footer from './components/footer'

import 'video-react/dist/video-react.css';
import { Player,ControlBar } from 'video-react';
import { Carousel, WingBlank } from 'antd-mobile';
//  测试连接
function Home() {
  let dataList = [
    {
      url: 'http://video.jishiyoo.com/3720932b9b474f51a4cf79f245325118/913d4790b8f046bfa1c9a966cd75099f-8ef4af9b34003bd0bc0261cda372521f-ld.mp4',//视频源
      cover: 'http://oss.jishiyoo.com/images/file-1575341210559.png',//封面
      tag_image: 'http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575449277018pF3XL.jpg',//作者头像
      fabulous: false,//是否赞过
      tagFollow: false,//是否关注过该作者
      author_id: 1,//作者ID
      author: 'superKM',
      des: '武汉加油'
    }, {
      url: 'http://video.jishiyoo.com/1eedc49bba7b4eaebe000e3721149807/d5ab221b92c74af8976bd3c1473bfbe2-4518fe288016ee98c8783733da0e2da4-ld.mp4',
      cover: 'http://oss.jishiyoo.com/images/file-1575343195934.jpg',
      tag_image: 'http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575449298299M3V50.jpg',
      fabulous: true,//是否赞过
      tagFollow: false,//是否关注过该作者
      author_id: 2,//作者ID
      author: 'superKM',
      des: '中国加油'
    }, {
      url: 'http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4',
      cover: 'http://oss.jishiyoo.com/images/file-1575343262684.jpg',
      tag_image: 'http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575449277018pF3XL.jpg',
      fabulous: false,//是否赞过
      tagFollow: false,//是否关注过该作者
      author_id: 1,//作者ID
      author: 'superKM',
      des: '武汉加油'
    }, {
      url: 'http://video.jishiyoo.com/549ed372c9d14b029bfb0512ba879055/8e2dc540573d496cb0942273c4a4c78c-15844fe70971f715c01d57c0c6595f45-ld.mp4',
      cover: 'http://oss.jishiyoo.com/images/file-1575343508574.jpg',
      tag_image: 'http://npjy.oss-cn-beijing.aliyuncs.com/images/file-1575449277018pF3XL.jpg',
      fabulous: false,//是否赞过
      tagFollow: false,//是否关注过该作者
      author_id: 1,//作者ID
      author: 'superKM',
      des: '中国加油'
    }]
  
  let comentShow = false

  return (
    <div className="swiperList">
      <WingBlank>
        <Carousel className="my-carousel"
          vertical
          dots={false}
          dragging={false}
          swiping={true}
          autoplay={false}
          infinite
        >
          { 
            dataList.map(item => {
              return(
                <div className="v-item">
                  <Player poster	>
                    <source src={ item.url } />
                    <ControlBar autoHide={false} />
                  </Player>
                  <div class="info_wrapper"><Footer /></div>
                  <div class="right_bar_wrapper"><RightBar /></div>
                </div>
              )
            })
          }
        </Carousel>
      </WingBlank>
      
      <transition name="up">
      {comentShow ? 
        <div className="comment_wrap">
          <div className="comment_list">
            <div className="comment_top">
              <div className="number">10万条评论</div>
              <div className="close">X</div>
            </div>
            <div className="comment_body">
              <div className="comment_box">
                <div className="comment_item">
                  <div className="user-pic">
                    <img src={ logo } alt="" />
                  </div>
                  <div className="item-info">
                    <div className="replay">
                      <p className="name">前端切图仔</p>
                      <p className="replay_dec">什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿 <span className="time">2-19</span></p>
                    </div>
                    <div className="zan">
                      <span className="iconfont iconaixinxiantiao"></span><p>200</p>
                    </div>
                  </div>
                </div>

                <div className="comment_item">
                  <div className="user-pic">
                    <img src={ logo } alt="" />
                  </div>
                  <div className="item-info">
                    <div className="replay">
                      <p className="name">前端切图仔</p>
                      <p className="replay_dec">什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿 <span className="time">2-19</span></p>
                    </div>
                    <div className="zan">
                      <span className="iconfont iconaixinxiantiao"></span><p>200</p>
                    </div>
                  </div>
                </div>

                <div className="comment_item">
                  <div className="user-pic">
                    <img src={ logo } alt="" />
                  </div>
                  <div className="item-info">
                    <div className="replay">
                      <p className="name">前端切图仔</p>
                      <p className="replay_dec">什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿什么时候才是一个头啊，我也不知道该怎么办阿 <span className="time">2-19</span></p>
                    </div>
                    <div className="zan">
                      <span className="iconfont iconaixinxiantiao"></span><p>200</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="reply_input">
              <input type="text" placeholder="留下你精彩的评论" />
              <span className="iconfont iconpinglun"></span>
              <span className="iconfont iconxiangji"></span>
            </div>
          </div>
        </div>
        :null}
      </transition>
    </div>
  )
}

export default Home