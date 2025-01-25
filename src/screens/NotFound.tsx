import { useNavigate } from "react-router-dom";
import "@styles/components/NotFound.scss";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found">
            <div className="not-found__content">
                <h1 className="gradient-text">404</h1>
                <h2>Page Not Found</h2>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <button
                    className="primary-button"
                    onClick={() => navigate("/")}
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;
