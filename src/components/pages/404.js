import { Helmet } from "react-helmet";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Helmet>
        <meta name="description" content="404 error page" />
        <title>Error</title>
      </Helmet>
      <h1>404</h1>
      <p>Page not found</p>
      <ErrorMessage />
      <Link
        style={{
          marginTop: "15px",
          color: "#9F0013",
          fontWeight: "bold",
        }}
        to="/"
      >
        Go back to main page
      </Link>
    </div>
  );
}
