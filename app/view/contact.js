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
                                <strong>business casual</strong>
                            </h2>
                            <hr/>
                        </div>
                        <div className="col-md-8">
                            <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed"></iframe>
                        </div>
                        <div className="col-md-4">
                            <p>Phone:
                                <strong>123.456.7890</strong>
                            </p>
                            <p>Email:
                                <strong><a href="mailto:name@example.com">name@example.com</a></strong>
                            </p>
                            <p>Address:
                                <strong>3481 Melrose Place
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
                                <strong>form</strong>
                            </h2>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, vitae, distinctio, possimus repudiandae cupiditate ipsum excepturi dicta neque eaque voluptates tempora veniam esse earum sapiente optio deleniti consequuntur eos voluptatem.</p>
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