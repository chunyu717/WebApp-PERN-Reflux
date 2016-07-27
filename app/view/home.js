var React = require('react');

var home = React.createClass({
    render() {
        return (
            <div className="container">
                    <div className="row">
                        <div className="box">
                            <div className="col-lg-12 text-center">
                                <div id="carousel-example-generic" className="carousel slide">

                                    <ol className="carousel-indicators hidden-xs">
                                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                    </ol>

                                    <div className="carousel-inner">
                                        <div className="item active">
                                            <img className="img-responsive img-full" src="/img/slide-1.jpg" alt="" />
                                        </div>
                                        <div className="item">
                                            <img className="img-responsive img-full" src="/img/slide-2.jpg" alt="" />
                                        </div>
                                        <div className="item">
                                            <img className="img-responsive img-full" src="/img/slide-3.jpg" alt="" />
                                        </div>
                                    </div>

                                    <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                        <span className="icon-prev"></span>
                                    </a>
                                    <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                        <span className="icon-next"></span>
                                    </a>
                                </div>
                                <h2 className="brand-before">
                                    <small>Welcome to</small>
                                </h2>
                                <h1 className="brand-name">CxN Boutique</h1>
                                <hr className="tagline-divider" />
                                <h2/>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="box">
                            <div className="col-lg-12">
                                <hr />
                                <h2 className="intro-text text-center">
                                    <strong>Latest News</strong>
                                </h2>
                                <hr />
                                <p>2016/07/27 : 因教育訓練 1/19​(三)​~1/21​(五) 將暫停退貨處理及退貨退款作業, 8/24(一)恢復正常作業，期間不影響線上退貨申請作業​。造成您的不便，盡請見諒。C&N 祝您平安順心'.</p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
});

module.exports = home;