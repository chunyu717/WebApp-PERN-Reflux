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
< img className = "img-responsive img-rounded" src = "https://photos-3.dropbox.com/t/2/AACm-21inAtAr2l5GHv63zNbFw2NObsX_HX3SD4QBowSPw/12/21998691/jpeg/32x32/1/_/1/2/home-slide1.jpg/EMajwhAY8oBOIAcoBw/B2PlkSLKSeIOjCrGqlp-jjHC6fiScHULTeP-Z7eiJEg?size=1280x960&size_mode=3" alt = "" />
                                        </div>
                                        <div className="item">
< img className = "img-responsive img-full" src = "https://photos-4.dropbox.com/t/2/AADP-OKaMhavVoqDIJLL9Nq59Q4FAXJihQYC724F3eHbjQ/12/21998691/jpeg/32x32/1/_/1/2/home-slide2.jpg/EMajwhAY8oBOIAcoBw/Tm-7ckOSvZ8hYfOSMK0BsrNKD8zVkGEaibUB_9sUO-s?size=1280x960&size_mode=3" alt = "" />
                                        </div>
                                        <div className="item">
< img className = "img-responsive img-full" src = "https://photos-6.dropbox.com/t/2/AACo7QnsqzpWX4oWK29Nnj-y9V3KBg6W_sZYxp0-Hh8lZA/12/21998691/jpeg/32x32/1/_/1/2/home-slide3.jpg/EMajwhAY8oBOIAcoBw/3638yhyAebe9esWUwuQ7kSfwAYe5angwS9BRbf-nA08?size=1280x960&size_mode=3" alt = "" />
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
                    {/*
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
                    */}
                    <div className="row">
                        <hr />
                        <h2 className="intro-text text-center">
                            <strong>服務項目</strong>
                        </h2>
                        <hr />
                        <div className="col-sm-6 col-lg-6 col-md-6 col-centered">
< img className = "img-rounded img-responsive img-border img-full" src = "https://photos-3.dropbox.com/t/2/AACm-21inAtAr2l5GHv63zNbFw2NObsX_HX3SD4QBowSPw/12/21998691/jpeg/32x32/1/_/1/2/home-slide1.jpg/EMajwhAY8oBOIAcoBw/B2PlkSLKSeIOjCrGqlp-jjHC6fiScHULTeP-Z7eiJEg?size=1280x960&size_mode=3" alt = "Generic placeholder image" />
                          <div className="row">
                            <div style={{float: "left", marginLeft: '15px'}}><h4>全身按摩</h4></div>
                            <div style={{float: "right", marginRight: '15px'}}><h4 >NT$600</h4></div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 col-md-6 col-centered">
< img className = "img-rounded img-responsive img-border img-full" src = "https://photos-3.dropbox.com/t/2/AACm-21inAtAr2l5GHv63zNbFw2NObsX_HX3SD4QBowSPw/12/21998691/jpeg/32x32/1/_/1/2/home-slide1.jpg/EMajwhAY8oBOIAcoBw/B2PlkSLKSeIOjCrGqlp-jjHC6fiScHULTeP-Z7eiJEg?size=1280x960&size_mode=3" alt = "Generic placeholder image" />
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