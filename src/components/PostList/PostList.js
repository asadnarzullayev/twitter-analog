import PostListItem from "../PostListitem/PostListItem";
import "./PostList.css";

export default function PostList({
    posts,
    onDelete,
    onToggleImportant,
    onToggleLiked,
}) {
    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </li>
        );
    });
    return <ul className="app-list list-group-item">{elements}</ul>;
}
