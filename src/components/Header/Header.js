import "./Header.css";

export default function Header({ liked, allPost }) {
    return (
        <div className="app-header d-flex">
            <h1>Asadbek Narzullayev</h1>
            <h2>
                {allPost} posts, like {liked}
            </h2>
        </div>
    );
}
