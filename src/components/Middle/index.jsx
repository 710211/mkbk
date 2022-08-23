import React, { Component } from 'react'
import './index.css'
export default class Middle extends Component {
    render() {
        return (
            <div className="middle">
                <div className="middle-container">
                    <div className="middle-left">
                        <ul>
                            <li><a href="#">综合</a></li>
                            <li><a href="#">后端</a></li>
                            <li><a href="#">前端</a></li>
                            <li><a href="#">Android</a></li>
                            <li><a href="#">iOS</a></li>
                            <li><a href="#">人工智能</a></li>
                            <li><a href="#">开发工具</a></li>
                            <li><a href="#">代码人生</a></li>
                            <li><a href="#">阅读</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
