import React, { Component } from 'react'
import './index.css'
import '../icon/css/all.css'
import '../icon/旧版/css/font-awesome.min.css'
let n = 180
let f = true
export default class Header extends Component {
    more_list = (event) => {
        event.target.style.transform = 'rotate(' + n + 'deg)';
        let display = this.more_l.style.display
        if (display != 'block') this.more_l.style.display = 'block'
        else this.more_l.style.display = 'none'
        n += 180
        f = false
    }
    input_down = (event) => {
        event.target.style.width = '400px'
        event.target.setAttribute('placeholder', '搜索文章/小册/文档/用户');
        this.icon.style.left = '390px'
        this.author.style.display = 'none'
    }
    input_over = (event) => {
        event.target.setAttribute('placeholder', '探索稀土掘金');
        event.target.style.width = '250px'
        this.icon.style.left = '240px'
        this.author.style.display = 'block'
    }
    componentDidMount() {
        window.addEventListener('click', () => {
            if (f) {
                let display = this.more_l.style.display
                if (display === 'block') {
                    this.more_l.style.display = 'none'
                    this.mine.style.transform = 'rotate(' + n + 'deg)';
                    n += 180
                }
            }
            if (t) {
                let display_1 = this.phone_hidden.style.display
                if (display_1 === 'block') {
                    this.phone_hidden.style.display = 'none'
                }
            }
            f = true
            t = true
        })
    }
    appear = ()=>{

    }
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="left-header">
                        <div className="left-logo">
                            <a href="" className="logo" >
                                <img src="	https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
                                    alt="稀土掘金" className="logo-img" />
                                <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6c61ae65d1c41ae8221a670fa32d05aa.svg"
                                    alt="稀土掘金" className="mobile" />
                            </a>
                        </div>
                        <div className="menu">
                            <div className="phone-show-menu" onClick={this.appear}>
                                <span>首页</span>
                                <div className="triangle"></div>
                            </div>
                            <ul className="phone-hidden" ref={refs => this.phone_hidden = refs}>
                                <li><a href="">首页</a> </li>
                                <li><a href="">沸点</a></li>
                                <li><a href="">课程</a></li>
                                <li><a href="">直播</a></li>
                                <li><a href="">活动</a></li>
                                <li>商城</li>
                                <li className="disappear_1">App</li>
                                <li className="disappear_1">插件</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-header">
                        <div className="slide">
                            <div className="right-input">
                                <form action="" className="from">
                                    <input type="text" placeholder="探索稀土掘金" className="search-input" onMouseDown={this.input_down} onBlur={this.input_over} />
                                    <div className="search-icon-container" ref={refs => this.icon = refs}>
                                        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
                                            alt="探索" />
                                    </div>
                                </form>
                            </div>
                            <div className="creator-item" ref={refs => this.author = refs}>
                                <div className="author">
                                    <span className="text">创作者中心</span>
                                    <div className="mine"><i ref={refs => this.mine = refs} className="fa fa-caret-down" aria-hidden="true" onClick={this.more_list}></i></div>
                                </div>
                            </div>
                        </div>
                        <ul className="more-list" ref={refs => this.more_l = refs}>
                            <li className="item">
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                <span>写文章</span>
                            </li>
                            <li className="item">
                                <i className="fa fa-smile-o" aria-hidden="true"></i>
                                <span>发沸点</span>
                            </li>
                            <li className="item">
                                <i className="fa fa-download" aria-hidden="true"></i>
                                <span>写代码</span>
                            </li>
                        </ul>
                        <div className="vip">
                            <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/24127194d5b158d7eaf8f09a256c5d01.svg"
                                alt="vip" />
                            <div className="vip-words" ref={refs => this.vip = refs}>会员</div>
                        </div>
                        <div className="register">
                            <button>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

