import Reflux from 'reflux';
import ProductsActions from '../actions/ProductsActions'; 

import $ from 'jquery'; 

class ProductsStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.listenables = ProductsActions;
    }

    onLoad()
    {
       //console.log('load');
       this.setState({ isloaded: false, loadResult: undefined});
       var me = this;
       $.ajax({
            url: 'http://localhost:8088/api/productsList',
            method: 'GET',
            success: function(returnData) {
                console.log('onLoad success!');
                returnData.loadResult =  'success';
                me.setState( returnData ) ;
            },
            error: function(returnData) {
                console.log('onLoad error!');
                //mockData
                var mockData = me._getMockResult() ;
                mockData.loadResult = 'false' ;
                //me.setState( me._getMockResult ) ;
                me.setState( mockData ) ;
            }
        })
    }

   
    
    _getMockResult() {
        return {
            "lastUpdated":"2014-06-03T16:00:00Z",
            "data":[{
                title: 'SteriFuse™ DBM Crunch',
                category: 'aaa',
                pic: 'http://www.ums.com.tw/sites/default/files/styles/large/public/product/images/2_2.jpg?itok=I3U0yfxh',
                desc: '產品特性:• DBM 富含骨塑型蛋白BMP-2，具良好之骨誘導特性。• 100% 人體組織，不需混合溶液，直接塑型好操作。',
                brand: 'wed'
              },{
                title: 'SteriFuse™ DBM Crunch',
                category: 'aaa',
                pic: 'http://www.ums.com.tw/sites/default/files/styles/large/public/product/images/13_1.jpg?itok=artsJ8KB',
                desc: '產品特性:• DBM 富含骨塑型蛋白BMP-2，具良好之骨誘導特性。• 100% 人體組織，不需混合溶液，直接塑型好操作。',
                brand: 'wed'
              },{
                title: 'SteriFuse™ DBM Crunch',
                category: 'aaa',
                pic: 'http://www.ums.com.tw/sites/default/files/styles/large/public/product/images/12-01.png?itok=DExZ_NMh',
                desc: '產品特性:• DBM 富含骨塑型蛋白BMP-2，具良好之骨誘導特性。• 100% 人體組織，不需混合溶液，直接塑型好操作。',
                brand: 'wed'
              },{
                title: 'SteriFuse™ DBM Crunch2',
                category: 'bbb',
                pic: 'http://www.ums.com.tw/sites/default/files/styles/large/public/product/images/1_2.jpg?itok=AmN0O76F',
                desc: '產品特性:• DBM 富含骨塑型蛋白BMP-2，具良好之骨誘導特性。• 100% 人體組織，不需混合溶液，直接塑型好操作。',
                brand: 'wed'
              },{
                title: 'SteriFuse™ DBM Crunch2',
                category: 'bbb',
                pic: 'http://www.ums.com.tw/sites/default/files/styles/large/public/product/images/LUXATEMP%20STAR.PNG?itok=JU7tulKF',
                desc: '產品特性:• DBM 富含骨塑型蛋白BMP-2，具良好之骨誘導特性。• 100% 人體組織，不需混合溶液，直接塑型好操作。',
                brand: 'wed'
              },{
                title: 'SteriFuse™ DBM Crunch2',
                category: 'bbb',
                pic: 'http://www.ums.com.tw/sites/default/files/styles/large/public/product/images/InterOss%C2%AE.jpg?itok=9hIMhXNV',
                desc: '產品特性:• DBM 富含骨塑型蛋白BMP-2，具良好之骨誘導特性。• 100% 人體組織，不需混合溶液，直接塑型好操作。',
                brand: 'wed'
              }]
        }
    }
}

export default ProductsStore;