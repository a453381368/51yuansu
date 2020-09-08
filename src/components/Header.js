import React, { Component } from "react";
import "../css/base.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div id="header-wrap" className="header-wrap">
                    <div className="content-flexible">
                        <div className="header-logo-wrap">
                            <a href="#" title="觅元素">
                                觅元素
                            </a>
                        </div>
                        <ul className="header-list">
                            <li className="bcat-li">
                                <a className="bcat-li-a" href="#">
                                    免抠元素
                                </a>
                                <div className="bcat-h-wrap">
                                    <a href="#">漂浮元素</a>
                                    <a href="#">装饰元素</a>
                                    <a href="#">节日元素</a>
                                    <a href="#">手绘/卡通</a>
                                    <a href="#">字体元素</a>
                                    <a href="#">标签元素</a>
                                    <a href="#">图标元素</a>
                                    <a href="#">背景元素</a>
                                    <a href="#">动植物元素</a>
                                    <a href="#">其他元素</a>
                                </div>
                            </li>
                            <li
                                className="bcat-li bbcat-h"
                                style={{ marginLeft: "25px" }}
                            >
                                <a className="bcat-li-a" href="#">
                                    高清背景
                                </a>
                                <div className="bcat-h-wrap">
                                    <a href="#">扁平/简约</a>
                                    <a href="#">商务/科技</a>
                                    <a href="#">文艺/清新</a>
                                    <a href="#">卡通/手绘</a>
                                    <a href="#">质感/纹理</a>
                                    <a href="#">摄影/风景</a>
                                    <a href="#">电商/狂欢</a>
                                    <a href="#">复古/中国风</a>
                                    <a href="#">另类/其他</a>
                                </div>
                            </li>
                            <li style={{ marginLeft: "25px" }}>
                                <a
                                    className="bcat-li-a"
                                    href="#"
                                    onclick="statistNav(1);"
                                >
                                    赞助VIP
                                </a>
                                <span className="header-zhe-icon"></span>
                            </li>
                            <li style={{ marginLeft: "25px" }}>
                                <a className="bcat-li-a" href="#">
                                    邀请比赛
                                </a>
                                <span className="header-hot-icon"></span>
                            </li>
                            <li style={{ marginLeft: "25px" }}>
                                <a className="bcat-li-a" href="#">
                                    活动
                                </a>
                            </li>
                        </ul>
                        <div className="login-info">
                            <ul className="user-login">
                                <li className="mr10">
                                    <a
                                        href="#"
                                        title="登录"
                                        className="header-login-bt"
                                        onclick="loginBoxShow();"
                                    >
                                        <span>登录</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        title="注册"
                                        className="header-reg-bt"
                                        onclick="regBoxShow();"
                                    >
                                        1秒注册
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="header-right-icons-wrap">
                            <a className="header-right-icona" href="#">
                                <i
                                    className="header-ricon-i1"
                                    title="赞助VIP"
                                ></i>
                                <p>VIP</p>
                            </a>
                            <a
                                className="header-right-icona"
                                href="#"
                                title="上传作品"
                            >
                                <i className="header-ricon-i2"></i>
                                <p>上传</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="logo-plh" style={{ display: "none" }}>
                    <img src="img/logo-color.png" alt="觅元素官方logo" />
                </div>
            </div>
        );
    }
}

export default Header;
