import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/postsReducer";

const AddPostForm = () => {
	const dispatch = useDispatch();

	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [publishedDate, setPublishedDate] = useState("");
	const [shortDescription, setShortDescription] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(
			addPost({ title, author, publishedDate, shortDescription, content })
		);
		setTitle("");
		setAuthor("");
		setPublishedDate("");
		setShortDescription("");
		setContent("");
	};

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Label className='mt-3'>Title</Form.Label>
			<Form.Control
				className='mb-3 w-50'
				type='text'
				placeholder='Title'
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>

			<Form.Label>Author</Form.Label>
			<Form.Control
				className='mb-3 w-50'
				type='text'
				placeholder='Author'
				value={author}
				onChange={e => setAuthor(e.target.value)}
			/>

			<Form.Label>Published Data</Form.Label>
			<Form.Control
				className='mb-3 w-50'
				type='text'
				placeholder='DD-MM-YYYY'
				value={publishedDate}
				onChange={e => setPublishedDate(e.target.value)}
			/>

			<Form.Label>Short Description</Form.Label>
			<Form.Control
				className='mb-3'
				as='textarea'
				rows={2}
				placeholder='Short Description'
				value={shortDescription}
				onChange={e => setShortDescription(e.target.value)}
			/>

			<Form.Label>Main content</Form.Label>
			<Form.Control
				className='mb-3'
				as='textarea'
				rows={4}
				placeholder='Short Description'
				value={content}
				onChange={e => setContent(e.target.value)}
			/>

			<Button variant='primary' type='submit'>
				Add Post
			</Button>
		</Form>
	);
};

export default AddPostForm;
