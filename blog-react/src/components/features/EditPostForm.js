import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { editPost } from "../../redux/postsReducer";
import PostForm from "./PostForm";
import { getPostById } from "../../redux/postsReducer";
import PropTypes from "prop-types";

const EditPostForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const postData = useSelector(state => getPostById(state, id));

	const handleSubmit = post => {
		dispatch(editPost({ ...post, id }));
		navigate("/post/" + id);
	};

	if (!postData) return <Navigate to='/' />;
	return (
		<PostForm
			action={handleSubmit}
			actionText='Edit Post'
			title={postData.title}
			author={postData.author}
			publishedDate={postData.publishedDate}
			content={postData.content}
			shortDescription={postData.shortDescription}
			category
		/>
	);
};

EditPostForm.propTypes = {
	postData: PropTypes.array,
	handleSubmit: PropTypes.func,
	editPost: PropTypes.func,
};
export default EditPostForm;
