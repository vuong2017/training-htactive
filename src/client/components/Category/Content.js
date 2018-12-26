import React, { Component } from "react"
import ItemCategory from "./ItemCategory"

class Content extends Component {
  render() {
    var { data } = this.props
    return (
      <div role="main" className="content">
        <div id="content" className="full">
          <div className="black-bg background">
            <span className="cat-title">Web Tutorials</span>
            <div className="cat-punch-line">
              <img src="images/icons/slide-title-border.png" alt="border" />
              <span> Web Development Technologies </span>
              <img src="images/icons/slide-title-border.png" alt="border" />
            </div>
          </div>
        </div>
        <div className="container list-item">
          <div className="row">
            {data && data.map(function(item, index) {
              return <ItemCategory item={item} key={index} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Content
