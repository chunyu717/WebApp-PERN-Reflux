import React from 'react';
import Reflux from 'reflux';
import ProductsStore from '../stores/ProductsStore'; 
import ProductActions from '../actions/ProductsActions'; 
import { Button/*, Modal, Radio, FormGroup, FormControl, ControlLabel*/ } from 'react-bootstrap';
import CounterInput from 'react-bootstrap-personalized-counter';

//const uuidv4 = require('uuid/v4');

class Products extends Reflux.Component{
    constructor(props) {
        super(props);
        this.store = ProductsStore; 
        this.state = { purchaseNum: 1 };
    }

    componentDidMount() {
      ProductActions.load();
      //this.updateWindowDimensions();
      //window.addEventListener('resize', this.updateWindowDimensions);
  }

    render() {
      var me = this ; 
     // console.log(this.state.data);
     // console.log( this.props ) ; 
      console.log( 'this.state.purchaseNum =' + me.state.purchaseNum ) ;
      var products = (
            <div id="aaa">
               <div className="row" style={{ padding: "0px 20px 0px 20px" }} >
                 {this.state.data ? this.state.data.map(function(header, i) {
                          if( me.props.category === 'all' || header.category === me.props.category ) {
                            return (
                                <div className="col-sm-4 col-lg-4 col-md-4 col-centered" style={{borderStyle: "ridge", padding: "5px 5px 5px 5px" }} key={'aaa' + i } >
                                    <div className="thumbnail"  >
                                      < img className = "img-rounded" src = {  header.pic } alt = "" style={{ width: "100%", height: "300px", padding: "10px 0px 0px 0px"  }} />
                                        <div className="caption">
                                            {/* <h4 className="pull-right">$200</h4> */}
                                            <h4><a href="">{header.title}</a></h4>
                                            {header.desc}
                                            <CounterInput value={ me.state.purchaseNum } min={1} max={50} glyphPlus={{glyph:'fa fa-plus', position:'right'}} glyphMinus={{glyph:'fa fa-minus', position:'left'}} onChange={ (value) => { me.setState({purchaseNum: value }) } } />
                                            <Button bsStyle="primary" style={{ width: "100%"}} onClick={ () => { console.log(header.title) ; me.props.addProductToCart( header.title, me.state.purchaseNum ) ; me.setState({ purchaseNum: 1 }) } }>加入購買車</Button>
                                        </div>
                                    </div>
                                </div>
                            );
                          } else {
                            return "" ;
                          }
                    }) : "" }
         </div></div>) ;

        return (
          <div style={{ height: "100%", width: "100%", padding: "0px 20px 0px 20px" }}>
             {products}
          </div>
        );
      }
};

export default Products;