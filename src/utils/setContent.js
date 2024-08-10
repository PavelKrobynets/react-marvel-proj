import Loader from "../components/loader/Loader";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
import Skeleton from "../components/skeleton/Skeleton";

export default function setContent (loadMore ,process, Component, data) {
	switch (process) {
		case "waiting":
			return <Skeleton />;

		case "loading":
			return loadMore ? <Component {...data} /> : <Loader/>;

		case "confirmed":
			return <Component {...data} />;

		case "error":
			return <ErrorMessage />;

		default:
			throw new Error("Unexpected process state")
	}
};