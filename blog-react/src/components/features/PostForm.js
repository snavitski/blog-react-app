import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PostForm = ({ action, actionText, ...props }) => {
	const [title, setTitle] = useState(props.title || "");
	const [author, setAuthor] = useState(props.author || "");
	const [publishedDate, setPublishedDate] = useState(props.publishedDate || "");
	const [shortDescription, setShortDescription] = useState(
		props.shortDescription || ""
	);
	const [content, setContent] = useState(props.content || "");

	const handleSubmit = e => {
		e.preventDefault();
		action({ title, author, publishedDate, shortDescription, content });
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
				{actionText}
			</Button>
		</Form>
	);
};
export default PostForm;
