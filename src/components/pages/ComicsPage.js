import ComicsList from "../comicsList/ComicsList";
import {Helmet} from "react-helmet"

export default function ComicsPage() { 
	return (
	<>
	<Helmet>
			<meta 
			name="description"
			content="Page with comics list"
			/>
			<title>Marvel comics list</title>
		</Helmet>
	<ComicsList />
	</>	
)
}