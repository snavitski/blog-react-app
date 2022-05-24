import {Containe, Container} from "react-bootstrap";
import AddPostForm from "../features/AddPostFrom";

const PostAdd = () => {
	return (
		<Container className="w-50">
			<h2>Add Post</h2>
			<AddPostForm />
		</Container>
	);
	
};

export default PostAdd;
