import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ItemCategory extends Component {
    render() {
        var {item} = this.props;
        if(item){
            return (
                <div>
                     <div className="col-md-3">
                        <div className="course-box">
                        <Link target="_top" to={`/${item._id}`} title={item.title}>
                            <img src={item.logo} alt={item.name} />
                            <div className="text-center name-item">{item.name}</div>
                        </Link>
                        </div>
                    </div>
                </div>
            );
        }
        return '';
        
    }
}

export default ItemCategory;