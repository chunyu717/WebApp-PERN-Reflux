var React = require('react');

var about = React.createClass({
    propTypes: {
            login: React.PropTypes.bool
    },
    
    componentDidMount: function() {
        //console.log(this.props.login);
    },

    componentWillReceiveProps: function(nextProps) {
        if(nextProps.login !== this.props.login){
             console.log(nextProps.login);
        }
    },
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">關於 
                                <strong> 宏昇盲人按摩</strong>
                            </h2>
                            <hr/>
                        </div>
                        <div className="col-md-6">
                            {/*<img style={{height: '400px'}} className="img-responsive img-border-left" src="img/slide-2.jpg" alt=""/> */}
                            <iframe style={{width: '100%', height: '300px'}} src="https://www.youtube.com/embed/vf2pPneuoLg" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <div className="col-md-6">
                            <p style={{fontSize: '20px'}}>連續四年榮獲桃園優良視障按摩院的中壢宏昇按摩院，其實是一間個人工作室；按摩師張文政40歲才開始學按摩，如今擁有固定客源、固定收入，經營得有聲有色。</p>
                            <p style={{fontSize: '20px'}}>按摩特色：腳底按摩、全身按摩以及各種病症處理為主，採預約制。作業中專心為客人按摩，尊重客人感受，不隨意攀談，發現客人有不舒服之處，會告知相關病理知識及復健處置。</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>

                <div className="row">
                    <div className="box">
                        <div className="col-lg-12">
                            <hr/>
                            <h2 className="intro-text text-center">Our
                                <strong> Master</strong>
                            </h2>
                            <hr/>
                        </div>
                        <div className="col-md-5 text-center">
< img className = "img-responsive" style = {{height: '300px', margin: 'auto'}}src = "https://photos-5.dropbox.com/t/2/AADmOaF-T3HvdbG6TPQ3POFAwhMtn453U2UsRU3-eQYWMg/12/21998691/jpeg/32x32/3/1500544800/0/2/chang.jpg/EMajwhAY8oBOIAcoBw/DiTfirgCBQK7BN_h3_BMoiTfHjg3sIOzRYLKzAZFBsg?dl=0&size=2048x1536&size_mode=3" alt = "" />
                            <h3>張文政
                                <small> </small>
                            </h3>
                        </div>
                        <div className="col-md-7">
                            <p style={{fontSize: '20px'}}>張文政病理、復健專業知識以及擁有乙級按摩證照，再加上他不斷加強本身的學理知識，如急性閃腰、慢性勞損、媽媽手等，甚至每年都進修經穴按摩相關課程、提升自己的技術專業以解決客人的各項症狀。</p>
                            <p style={{fontSize: '20px'}}>許多有五十肩的客人前來按摩，張文政發現他們也看過醫生吃了藥，但往往效果不佳，很多情況是醫病之間的溝通不良所致，也造成他們對五十肩的恐懼與誤解。張文政說:「在按摩前，我們都跟他們說明病因及後續該如何復健，客人才會很放心的把身體交給你！」按摩完，張文政隔天還會電話提醒復健，客人經過在家的復健配合及張文政的巧手按摩，往往有不錯的效果。</p>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = about;