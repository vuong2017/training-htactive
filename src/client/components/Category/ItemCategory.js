import React from "react"
import { Link } from "react-router-dom"

function ItemCategory({ item }) {
  return (
    <div>
      <div className="col-md-3">
        <div className="course-box">
          <Link target="_top" to={`${item._id}`} title={item.title}>
            <img src={`/uploads/${item.logo}`} alt={item.name} />
            <div className="text-center name-item">{item.name}</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ItemCategory
