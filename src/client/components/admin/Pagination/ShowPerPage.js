import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";

class ShowPerPage extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    onChangeInput(e) {
        this.props.setPerPage(parseInt(e.target.value))
    }

    render() {
        const { perPage } = this.props
        return (
            <React.Fragment>
               <FormGroup controlId="formControlsSelect">
                        <FormControl
                            name="perPage"
                            componentClass="select"
                            value={perPage}
                            placeholder="select"
                            onChange={this.onChangeInput}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
                            <option value={20}>20</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                            <option value={150}>150</option>
                        </FormControl>
                    </FormGroup>
            </React.Fragment>
        );
    }
}

export default ShowPerPage;