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
                                            <img className="img-responsive img-rounded" src="/img/home-slide1.jpg" alt="" />
                                        </div>
                                        <div className="item">
                                            <img className="img-responsive img-full" src="/img/home-slide2.jpg" alt="" />
                                        </div>
                                        <div className="item">
                                            <img className="img-responsive img-full" src="/img/home-slide3.jpg" alt="" />
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
  
                                </h2>
                                {/*
                                <h1 className="brand-name">宏昇盲人按摩</h1>
                                <hr className="tagline-divider" />
                                <h2/>
                                */}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="box">
                            <div className="col-lg-12">
                                <hr />
                                <h2 className="intro-text text-center">
                                    <strong>最新消息</strong>
                                </h2>
                                <hr />
                                <p>2016/07/27 : 因颱風 1/19​(三)​~1/21​(五) 將暫停營業, 8/24(一)恢復正常作業。造成您的不便，盡請見諒。祝您平安順心</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <hr />
                        <h2 className="intro-text text-center">
                            <strong>服務項目</strong>
                        </h2>
                        <hr />
                        <div className="col-sm-6 col-lg-6 col-md-6 col-centered">
                          <img className="img-rounded img-responsive img-border img-full" src="/img/home-slide1.jpg" alt="Generic placeholder image" />
                          <div className="row">
                            <div style={{float: "left", marginLeft: '15px'}}><h4>全身按摩</h4></div>
                            <div style={{float: "right", marginRight: '15px'}}><h4 >NT$600</h4></div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-md-6 col-centered">
                          <img className="img-rounded img-responsive img-border img-full" src="/img/home-slide1.jpg" alt="Generic placeholder image" />
                          <div className="row">
                            <div style={{float: "left", marginLeft: '15px'}}><h4>半身按摩</h4></div>
                            <div style={{float: "right", marginRight: '15px'}}><h4 >NT$400</h4></div>
                          </div>
                        </div>
                    </div>

                </div>
        );
    }
});

module.exports = home;