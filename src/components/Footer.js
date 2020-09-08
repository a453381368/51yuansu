import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="content-flexible">
                    <ul className="footer-t">
                        <li>
                            <a href="#">关于我们</a>
                        </li>
                        <li>
                            <a href="#">版权声明</a>
                        </li>
                        <li>
                            <a href="#">VIP服务</a>
                        </li>
                        <li>
                            <a href="#">素材上传</a>
                        </li>
                        <li>
                            <a href="#">QQ群部落</a>
                        </li>
                        <li style={{ borderRight: "none" }}>
                            <a
                                href="http://wpa.qq.com/msgrd?v=3&uin=373604177&site=qq&menu=yes"
                                title="联系觅元素"
                                rel="nofollow"
                            >
                                在线客服
                            </a>
                        </li>
                    </ul>
                    <ul className="footer-b">
                        <li>Copyright&nbsp;?2018觅元素&nbsp;&nbsp;&nbsp;</li>
                        <li>&nbsp;&nbsp;浙ICP备000000000号-1&nbsp;&nbsp;</li>
                        <li style={{ borderRight: "none" }}>
                            &nbsp;&nbsp;浙公网安备&nbsp;33010902001000号&nbsp;&nbsp;
                        </li>
                        <li style={{ display: "none" }}>0.0073</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
