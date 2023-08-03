import React from "react";
import "./PostListItem.css";

export default class PostListItem extends React.Component {
    render() {
        const {
            label,
            onDelete,
            onToggleImportant,
            onToggleLiked,
            important,
            like,
        } = this.props;

        let className = "app-list-item d-flex justify-content-between";
        if (important) {
            className += " important";
        }

        if (like) {
            className += " like";
        }

        return (
            <div className={className}>
                <span className="app-list-item-label" onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}
                    >
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm"
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }
}
