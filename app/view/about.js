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
                                <strong>business casual</strong>
                            </h2>
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            <img className="img-responsive img-border-left" src="img/slide-2.jpg" alt=""/>
                        </div>
                        <div className="col-md-6">
                            <p>This is a great place to introduce your company or project and describe what you do.</p>
                            <p>Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes nemo minima rerums unsers sadips amets.</p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">Our
                                <strong>Team</strong>
                            </h2>
                            <hr/>
                        </div>
                        <div className="col-sm-4 text-center">
                            <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
                            <h3>John Smith
                                <small>Job Title</small>
                            </h3>
                        </div>
                        <div className="col-sm-4 text-center">
                            <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
                            <h3>John Smith
                                <small>Job Title</small>
                            </h3>
                        </div>
                        <div className="col-sm-4 text-center">
                            <img className="img-responsive" src="http://placehold.it/750x450" alt=""/>
                            <h3>John Smith
                                <small>Job Title</small>
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