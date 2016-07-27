var React = require('react');

var about = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">About 
                                <strong> CxN Boutique</strong>
                            </h2>
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <img className="img-responsive img-border-left" src="img/slide-2.jpg" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <p style={{fontSize: '20px'}}>為2016年創立的一家台灣網路郵購服飾品牌，其以廉價時尚為構想，同時設計符合台灣副熱帶氣候的衣服，並加入多樣化圖案元素，而且由網路購物發跡，非實體店面。2016年營業額為臺灣網路服飾品牌第一，名稱 CxN Boutique 由來為創辦人 Celia 與 Nina 的縮寫'.</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">Our
                                <strong> Team</strong>
                            </h2>
                            <hr/>
                        </div>
                        <div className="col-sm-6 text-center">
                            <img className="img-responsive" style={{height: '500px'}} src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p160x160/13423931_1240873552590623_6232383415813128213_n.jpg?oh=9d8aba977a29bd2d07f3a0034abdcf34&oe=581A2E3D" alt=""/>
                            <h3>Celia Lu
                                <small> co-founder</small>
                            </h3>
                        </div>
                        <div className="col-sm-6 text-center">
                            <img className="img-responsive" style={{height: '500px'}} src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-9/12038038_1181189185231697_1843338662193459627_n.jpg?oh=62c759f3baf92fdf7d9c18baead37fba&oe=582D1D6F" alt=""/>
                            <h3>Nina Lu
                                <small> co-founder</small>
                            </h3>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = about;