var React = require('react');

var blog = React.createClass({
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">Company
                                <strong>blog</strong>
                            </h2>
                            <hr/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <img className="img-responsive img-border img-full" src="img/slide-1.jpg" alt=""/>
                            <h2>Post Title
                                <br/>
                                <small>October 13, 2013</small>
                            </h2>
                            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <a href="#" class="btn btn-default btn-lg">Read More</a>
                            <hr/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <img className="img-responsive img-border img-full" src="img/slide-2.jpg" alt=""/>
                            <h2>Post Title
                                <br/>
                                <small>October 13, 2013</small>
                            </h2>
                            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <a href="#" className="btn btn-default btn-lg">Read More</a>
                            <hr/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <img className="img-responsive img-border img-full" src="img/slide-3.jpg" alt=""/>
                            <h2>Post Title
                                <br/>
                                <small>October 13, 2013</small>
                            </h2>
                            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            <a href="#" className="btn btn-default btn-lg">Read More</a>
                            <hr/>
                        </div>
                        <div className="col-lg-12 text-center">
                            <ul className="pager">
                                <li className="previous"><a href="#">&larr; Older</a>
                                </li>
                                <li className="next"><a href="#">Newer &rarr;</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
});

module.exports = blog;