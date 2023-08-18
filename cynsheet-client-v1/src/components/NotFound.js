import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page cannot be found.</p>
            <p>Click on link below or use the header!</p>
            <Link to="/">Back to Home Page</Link>
        </div>
      );
}
 
export default NotFound;