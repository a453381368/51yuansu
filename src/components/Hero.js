import React, { Component } from "react";

class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="i-header-box">
                    <ul className="i-header-box-m">
                        <li>
                            <a
                                href="#"
                                style={{
                                    background:
                                        `url(${require("../images/img/banner18-quarter4.jpg")}) no-repeat center`,
                                    backgroundSize: "cover",
                                }}
                            >
                                <div className="site-pos">
                                    <p className="site-pos-i">
                                        免抠设计元素免费下载网站
                                    </p>
                                    <p className="site-pos-c">
                                        统计&nbsp;:&nbsp;昨日新增&nbsp;
                                        <b>1,523</b>&nbsp;张
                                    </p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                style={{
                                    background:
                                        `url(${require("../images/img/banner18-onlinebj.png")}) no-repeat center`,
                                    backgroundSize: "cover",
                                }}
                            ></a>
                        </li>
                        <li>
                            <a
                                href="#"
                                style={{
                                    background:
                                        "url(../images/img/banner14.png) no-repeat center",
                                    backgroundSize: "cover",
                                }}
                            ></a>
                        </li>
                        <li>
                            <a
                                href="#"
                                style={{
                                    background:
                                        "url(../images/img/banner18-upload-shuangdan.jpg) no-repeat center",
                                    backgroundSize: "cover",
                                }}
                            ></a>
                        </li>
                        <li>
                            <a
                                href="#"
                                style={{
                                    background:
                                        "url(../images/img/banner18-yuandan.png) no-repeat center",
                                    backgroundSize: "cover",
                                }}
                            ></a>
                        </li>
                        <li>
                            <a
                                href="#"
                                style={{
                                    background:
                                        "url(../images/img/banner17.jpg) no-repeat center",
                                    backgroundSize: "cover",
                                }}
                            ></a>
                        </li>
                    </ul>
                    <ul
                        className="i-header-box-i"
                        style={{ marginLeft: "-106px" }}
                    >
                        <li>
                            <a href="javascript:void(0);" rel="nofollow">
                                1
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" rel="nofollow">
                                2
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" rel="nofollow">
                                3
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" rel="nofollow">
                                4
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" rel="nofollow">
                                5
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" rel="nofollow">
                                6
                            </a>
                        </li>
                    </ul>
                    <a
                        href="javascript:void(0);"
                        className="i-header-b i-header-bleft"
                    >
                        上一张
                    </a>
                    <a
                        href="javascript:void(0);"
                        className="i-header-b i-header-bright"
                    >
                        下一张
                    </a>
                    <div className="i-header-search-wrap">
                        <form className="site-search-wrap">
                            <input
                                type="text"
                                value=""
                                name="search-keyword"
                                className="search-keyword"
                                autocomplete="off"
                            />
                            <input
                                type="button"
                                value="搜元素"
                                name="ys-submit"
                                className="search-submit-btn class-ys-submit"
                                data-id="1"
                                title="搜索元素"
                            />
                            <input
                                type="button"
                                value="搜背景"
                                name="bg-submit"
                                className="search-submit-btn class-bg-submit"
                                data-id="2"
                                title="搜索背景"
                            />
                        </form>
                        <div className="hb-keyword">
                            <span style={{ marginLeft: "34px" }}>
                                热门搜索&nbsp;:&nbsp;
                            </span>
                            <a href="#">元旦</a>
                            <a href="#">新年</a>
                            <a href="#">雪花</a>
                            <a href="#">招聘</a>
                            <a href="#">背景</a>
                            <a href="#">banner</a>
                            <a href="#">科技</a>
                            <a href="#">彩带</a>
                            <a href="#">草地</a>
                            <a href="#">边框</a>
                        </div>
                    </div>
                </div>
                <div className="i-inner-wrap">
                    <div className="content-flexible">
                        <ul className="i-inner-ul">
                            <li className="i-inner-item">
                                <a href="#">
                                    <img src={require("../img/5c21ff6e50343.png")} />
                                </a>
                            </li>
                            <li className="i-inner-item">
                                <a href="#">
                                    <img src={require("../img/5c22002198f44.png")} />
                                </a>
                            </li>
                            <li className="i-inner-item">
                                <a href="#">
                                    <img src={require("../img/5c11d5f3835f5.jpg")} />
                                </a>
                            </li>
                            <li className="i-inner-item">
                                <a href="#">
                                    <img src={require("../img/5c220058dfa20.png")} />
                                </a>
                            </li>
                            <li
                                className="i-inner-item"
                                style={{ marginRight: "0px" }}
                            >
                                <a href="#">
                                    <img src={require("../img/5bf7c440ca9cc.png")} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
