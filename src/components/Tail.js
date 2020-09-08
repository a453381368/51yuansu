import React, { Component } from "react";

class Tail extends Component {
    render() {
        return (
            <div className="tail">
                <div className="i-tail-feature">
                    <div className="content-flexible">
                        <div className="i-tail-fupon">
                            <ul>
                                <li className="i-tail-fitem">
                                    <a href="#">
                                        <i className="i-tail-fpic if1"></i>
                                        <p className="i-tail-p1">免费下载</p>
                                        <p className="i-tail-p2">
                                            海量设计元素免费下载
                                        </p>
                                    </a>
                                </li>
                                <li className="i-tail-fitem">
                                    <a href="#">
                                        <i className="i-tail-fpic if2"></i>
                                        <p className="i-tail-p1">精品素材</p>
                                        <p className="i-tail-p2">
                                            全站精品免抠元素高清背景源文件
                                        </p>
                                    </a>
                                </li>
                                <li className="i-tail-fitem">
                                    <a href="#">
                                        <i className="i-tail-fpic if3"></i>
                                        <p className="i-tail-p1">优质服务</p>
                                        <p className="i-tail-p2">
                                            尊享优质客服及VIP服务体系
                                        </p>
                                    </a>
                                </li>
                                <li
                                    className="i-tail-fitem"
                                    style={{marginRight: "0px"}}
                                >
                                    <a href="#">
                                        <i className="i-tail-fpic if4"></i>
                                        <p className="i-tail-p1">每日更新</p>
                                        <p className="i-tail-p2">
                                            日均更新3000+张,每天都是上新季
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="i-tail-ffund">
                            <ul>
                                <li>
                                    <i className="i-tail-bupic ibu1"></i>
                                    <p>非会员亦可免费下载</p>
                                </li>
                                <li>
                                    <i className="i-tail-bupic ibu2"></i>
                                    <p>一个会员全站特权</p>
                                </li>
                                <li>
                                    <i className="i-tail-bupic ibu3"></i>
                                    <p>高质量新素材优先推荐</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tail;
