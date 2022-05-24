import { Container } from "react-bootstrap";
import EditPostForm from "../features/EditPostForm";

const PostEdit = () => {
	return (
		<Container className="w-50">
			<h2>Edit Post</h2>
			<EditPostForm />
		</Container>
	);
};

export default PostEdit;
