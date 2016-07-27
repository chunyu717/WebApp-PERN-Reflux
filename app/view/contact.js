var React = require('react');

var contact = React.createClass({
    render: function() {
        return (
           <div className="container">
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">Contact
                                <strong> CxN Boutique</strong>
                            </h2>
                            <hr/>
                        </div>
                        <div className="col-md-8">
                            <iframe width="100%" height="400" frameborder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.3463877142609!2d121.232044229221!3d24.952993814919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34682247221ad027%3A0xaca762864fdb9b5b!2zMzIw5Y-w54Gj5qGD5ZyS5biC5Lit5aOi5Y2A56aP5bee6LevNTDomZ8!5e0!3m2!1szh-TW!2stw!4v1447243092192"></iframe>
                        </div>
                        <div className="col-md-4">
                            <p>Phone:
                                <strong> 123.456.7890</strong>
                            </p>
                            <p>Email:
                                <strong><a href="mailto:name@example.com"> name@example.com</a></strong>
                            </p>
                            <p>Address:
                                <strong> 3481 Melrose Place
                                    <br/>Beverly Hills, CA 90210</strong>
                            </p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">Contact
                                <strong> form</strong>
                            </h2>
                            <hr/>
                            <form role="form">
                                <div className="row">
                                    <div className="form-group col-lg-4">
                                        <label>Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label>Email Address</label>
                                        <input type="email" className="form-control"/>
                                    </div>
                                    <div className="form-group col-lg-4">
                                        <label>Phone Number</label>
                                        <input type="tel" className="form-control"/>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="form-group col-lg-12" style={{padding: '15px'}}>
                                        <label>Message</label>
                                        <textarea className="form-control" rows="6"></textarea>
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="hidden" name="save" value="contact"/>
                                        <button type="submit" className="btn btn-default">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = contact;