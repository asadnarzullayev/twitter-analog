import React from "react";
import "./Search.css";

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearchTwo(term);
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Search by Posts"
                onChange={this.onUpdateSearch}
            />
        );
    }
}
