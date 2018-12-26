import React from 'react'
import ReactPaginate from "react-paginate"

class Pagination extends React.Component {
    constructor(props){
        super(props)
        this.handlePageClick = this.handlePageClick.bind(this)
    }

    handlePageClick({selected}) {
        this.props.handleClickPage(selected)
    }
    render() {
        const { totalPage, currentPage } = this.props
        return (
            <ReactPaginate
                previousLabel={"Sau"}
                nextLabel={"Trước"}
                breakLabel={<a href="">...</a>}
                breakClassName={"break-me"}
                pageCount={totalPage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={totalPage}
                forcePage={currentPage}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        )
    }
}

export default Pagination