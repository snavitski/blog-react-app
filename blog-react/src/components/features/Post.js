import { useState } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useParams, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPostById } from "../../redux/postsReducer";
import { deletePost } from "../../redux/postsReducer";
import dateToStr from "../../utils/dateToStr";

const Post = () => {
	const { id } = useParams();
	const postData = useSelector(state => getPostById(state, id));

	const [showModal, setShowModal] = useState(false);
	const dispatch = useDispatch();
	const handleClose = () => setShowModal(false);
	const handleShow = () => setShowModal(true);
	const deletedPost = () => {
		dispatch(deletePost(postData.id));
	};

	if (!postData) return <Navigate to='/' />;
	return (
		<>
			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Are you sure?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						This operation will completely remove this from the app. Are you
						sure you want to do that?
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cancel
					</Button>
					<Button variant='danger' onClick={deletedPost}>
						Remove
					</Button>
				</Modal.Footer>
			</Modal>

			<Container>
				<Row xs={"auto"} className='justify-content-between mb-3'>
					<Col as={"h2"}>{postData.title}</Col>
					<Col>
						<Button
							as={Link}
							to={"/post/edit/" + postData.id}
							variant='outline-info'>
							Edit
						</Button>{" "}
						<Button onClick={handleShow} variant='danger'>
							Delete
						</Button>
					</Col>
				</Row>
				<p>
					<b>Author:</b> {postData.author}
				</p>
				<p>
					<b>Published:</b>{dateToStr(postData.publishedDate)}
				</p>
				<p dangerousSlySteInnerHTML={{ __html: postData.content}} />
			</Container>
		</>
	);
};
export default Post;
