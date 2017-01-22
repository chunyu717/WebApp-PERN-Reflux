var React = require('react');

var contact = React.createClass({
    render: function() {
        return (
           <div className="container">
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">聯絡
                                <strong> 宏昇盲人按摩</strong>
                            </h2>
                            <hr/>
                        </div>
                        <div className="col-md-8">
                            <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.3384524490957!2d121.23010951500461!3d24.95459698400956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468224768a13763%3A0xa60d5314626591fc!2zMzIw5qGD5ZyS5biC5Lit5aOi5Y2A5Lit5YyX6Lev5LqM5q61NDUx5be3M-iZnw!5e0!3m2!1szh-TW!2stw!4v1470014756563"></iframe>
                        </div>
                        <div className="col-md-4">
                            <p>預約連絡電話:
                                <strong> 03-4660693</strong>
                            </p>
                            <p>電子信箱:
                                <strong><a href="mailto:name@example.com"> kc109763@yahoo.com.tw</a></strong>
                            </p>
                            <p>地址:
                                <strong> 中壢市中北路二段451巷3號
                                    <br/> (中國信託後巷)</strong>
                            </p>
                            <p>Facebook:
                                <strong><a href="https://www.facebook.com/pages/%E5%AE%8F%E6%98%87%E7%9B%B2%E4%BA%BA%E6%8C%89%E6%91%A9/477649398913384?fref=ts"> 宏昇盲人按摩</a></strong>
                            </p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = contact;