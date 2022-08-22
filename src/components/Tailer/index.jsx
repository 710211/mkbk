import React, { Component } from 'react'
import '../img/link-one.png'
import axios from 'axios'
import './index.css'
export default class Tailer extends Component {
  state = { authors: [] }
  middle = () => {
    let scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop
    if (document.body.offsetWidth <= 950) {
      this.tail_left.style.display = 'none'
      this.tail_right.style.width = '100%'
    } else {
      this.tail_left.style.display = 'block'
      this.tail_right.style.width = '65%'
    }
    if (scrollTop >= 1280) {
      this.banner.style.position = 'fixed'
      this.banner.style.top = '0px'
    } else {
      this.banner.style.position = 'relative'
    }
  }
  componentDidMount() {
    this.middle()
    var _this = this
    window.addEventListener('resize', function () {
      _this.middle()
    })
    window.addEventListener('scroll', function () {
      _this.middle()
    })
  }
  search = () => {
    axios.get('http://localhost:3000/api1/authors').then(
      response => {
        this.setState({ authors: response.data })
      },
      error => { console.log('失败了', error) }
    )
  }
  disappear = (event) => {
    event.target.parentNode.style.display = 'none'
    event.stopPropagation()
  }
  jump = (event) => {
      // window.location.href = event
      if(event === '') event = 'https://juejin.cn/post/7123120819437322247?utm_source=web1&utm_medium=feed&utm_campaign=gengwen202208'
      window.open(event)
  }
  render() {
    this.search()
    const { authors } = this.state
    return (
      <div className="tail">
        <div className="tail-right" ref={refs => this.tail_right = refs}>
          <div className="right-top">
            <a href="#">推荐</a><i></i>
            <a href="https://juejin.cn/?sort=newest">最新</a><i></i>
            <a href="https://juejin.cn/?sort=three_days_hottest">热榜</a>
          </div>
          {authors.map((authorsObj) => {
            return (
              <div className="right-article" key={authorsObj.id} onClick={()=>this.jump(authorsObj.url)}>
                <div className="article-top">
                  <div className="title">{authorsObj.name}</div><i></i>
                  <p>25天前</p><i></i>
                  <div className="label">前端|GitHub|React.js</div>
                </div>
                <div className="article-middle">
                  <div className="subject">
                    <div className="main-body">
                      {authorsObj.title}
                    </div>
                    <p className="text">{authorsObj.content}</p>
                  </div>
                  <img src={authorsObj.img} alt="" width="130" />
                </div>
                <div className="cha" onClick={this.disappear}>x</div>
                <div className="button">
                  <i className="fa fa-eye" aria-hidden="true"> <span>915</span></i>
                  <i className="fa fa-thumbs-o-up" aria-hidden="true"> <span>16</span></i>
                  <i className="fa fa-comment-o comment" aria-hidden="true"> </i> <span>9</span>
                </div>
              </div>
            )
          })
          }
        </div>
        <div className="tail-left" ref={refs => this.tail_left = refs}>
          <div className="sign-in">
            <div className="top">
              <i className="fa fa-calendar calendar" aria-hidden="true"></i>
              <p>下午好！</p>
              <div className="box">去签到</div>
            </div>
            <p className="text">点亮你在社区的每一天</p>
          </div>
          <div className="banner" ref={refs => this.banner = refs}>
            <div className="one_1 img">
              <a href="https://juejin.cn/post/7130964538433732644?utm_source=webguding" target="_blank">
                <img src={require("../img/one_1.webp")} alt="" width="250" height="200" />
              </a>
              <span className="fork" onClick={this.disappear}>x</span>
              <a className="ad" href="https://bd.juejin.cn/?utm_campaign=bd&utm_source=web&utm_medium=banner"
                target="_blank">
                <span>投放</span>
                <span>广告</span>
              </a>
            </div>
            <div className="one img">
              <a href="https://juejin.cn/pin/7129334097113006116?utm_source=slide&utm_medium=banner&utm_campaign=reading"
                target="_blank">
                <img src={require("../img/one.webp")} alt="" width="250" height="200" />
              </a>
              <span className="fork" onClick={this.disappear}>x</span>
              <a className="ad" href="https://bd.juejin.cn/?utm_campaign=bd&utm_source=web&utm_medium=banner"
                target="_blank">
                <span>投放</span>
                <span>广告</span>
              </a>
            </div>
            <div className="two img">
              <a href="https://juejin.cn/book/7126538479051210766?utm_source=web_banner&utm_medium=banner&utm_campaign=Book_SK_0817"
                target="_blank">
                <img src={require("../img/two.webp")} alt="" width="250" height="200" />
              </a>
              <span className="fork" onClick={this.disappear}>x</span>
              <a className="ad" href="https://bd.juejin.cn/?utm_campaign=bd&utm_source=web&utm_medium=banner"
                target="_blank">
                <span>投放</span>
                <span>广告</span>
              </a>
            </div>
          </div>
          <div className="three img">
            <div className="three-img">
              <img src={require("../img/three.png")} alt="" width="50" height="50" />
            </div>
            <div className="content-box">
              <div>下载稀土掘金APP</div>
              <div className="p-two">一个帮助开发者成长的社区</div>
            </div>
          </div>
          <div className="link-block">
            <div className="one">
              <a href="https://juejin.cn/book/6844733795329900551" target="_blank">
                <img src={require("../img/link-one.png")} alt="" width="40" />
                <span>稀土漫游掘金</span>
              </a>
            </div>
            <div className="two">
              <a href="https://juejin.cn/extension" target="_blank">
                <img src={require("../img/link-two.png")} alt="" width="40" />
                <span>安装掘金浏览器插件</span>
              </a>
            </div>
            <div className="three">
              <a href="https://github.com/xitu/gold-miner" target="_blank">
                <img src={require("../img/link-three.png")} alt="" width="40" />
                <span>前往掘金翻译计划</span>
              </a>
            </div>
          </div>
          <div className="more">
            <ul>
              <li><a
                href="https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/juejin/86857833-55f6-4d9e-9897-45cfe9a42be4.html">用户协议</a>
              </li>
              <li><a href="https://juejin.cn/license">营业执照</a></li>
              <li><a
                href="https://lf3-cdn-tos.draftstatic.com/obj/ies-hotsoon-draft/juejin/7b28b328-1ae4-4781-8d46-430fef1b872e.html">隐私政策</a>
              </li>
              <li><a href="https://juejin.cn/about">关于我们</a></li>
              <li><a href="https://juejin.cn/map-author-A-1">站点地图</a></li>
              <li><a href="https://juejin.cn/book/6844733795329900551">使用指南</a></li>
              <li><a href="https://juejin.cn/links">友情连接</a></li>
              <li><a href="https://juejin.cn/more_posts">更多文章</a></li>
              <li><a href="https://beian.miit.gov.cn/">京ICP备18012699号-3</a></li>
            </ul>
            <div className="police"><a href="https://beian.miit.gov.cn/">
              <img src={require("../img/1.png")} alt="" width="25" />
              <span>京公网安备11010802026719号</span>
            </a>
            </div>
            <p>版权所有：北京北比信息技术有限公司</p>
            <p> 公司地址：北京市海淀区信息路甲28号13层B座13B-5</p>
            <p>公司座机：010-83434395</p>
            <p>举报邮箱：
              <a href="">feedback@xitu.io</a>
            </p>
            <p><a href="">©2022 稀土掘金</a></p>
          </div>
        </div>
      </div>
    )
  }
}

