import React, { Component } from 'react';
import Content  from '../../components/Category/Content';
import { categoryActions } from '../../action/client/category.action';
import {connect} from 'react-redux';

import Header from './../../components/Category/Header';
import Footer from './../../components/Category/Footer';


class Category extends Component {
    componentDidMount(){
        this.props.fetchDataAllCategory();
    }

    close_obs_sidenav(){
        document.getElementById("mySidenav").style.width = "0";
	    document.getElementById("right_obs").style.display = "none";
    }
    render() {
        var {dataCategorys} = this.props;
        if(dataCategorys){
            return (
                <div>
                <div id="right_obs" className="display-none" onClick={this.close_obs_sidenav} style={{display: 'none'}}></div>
                    <Header />
                        <Content  data = {dataCategorys}/>
                    <Footer />
                </div>
            );
        }else{
            console.log('đang tải!')
        }
        return <h1>Chưa có dữ liệu !</h1>    
    }
}
const mapStateToProps = (state) => {
    return {
      dataCategorys: state.CategoryReducer.data
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      fetchDataAllCategory: () => dispatch(categoryActions.fetchDataAllCategory()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category);