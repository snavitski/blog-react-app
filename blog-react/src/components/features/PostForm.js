import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesReducer";

const PostForm = ({ action, actionText, ...props }) => {
	const [title, setTitle] = useState(props.title || "");
	const [author, setAuthor] = useState(props.author || "");
	const [publishedDate, setPublishedDate] = useState(
		props.publishedDate || new Date()
	);
	const [shortDescription, setShortDescription] = useState(
		props.shortDescription || ""
	);
	const [content, setContent] = useState(props.content || "");
	const [contentError, setContentError] = useState(false);
	const [dateError, setDateError] = useState(false);
	const {
		register,
		handleSubmit: validate,
		formState: { errors },
	} = useForm();

	const categories = useSelector(getAllCategories);
	const [category, setCategory] = useState(props.category || "");

	const handleSubmit = e => {
		setContentError(!content);
		setDateError(!publishedDate);
		if (content && publishedDate) {
			action({
				title,
				author,
				publishedDate,
				shortDescription,
				content,
				category,
			});
		}
	};

	return (
		<Form onSubmit={validate(handleSubmit)}>
			<Form.Group className='mb-3 w-50' controlId='formTitle'>
				<Form.Label className='mt-3'>Title</Form.Label>
				<Form.Control
					{...register("title", { required: true, minLength: 3 })}
					value={title}
					onChange={e => setTitle(e.target.value)}
					type='text'
					placeholder='Enter title'
				/>
				{errors.title && (
					<small className='d-block form-text text-danger mt-2'>
						{" "}
						This field is required and need min 3 characters.
					</small>
				)}
			</Form.Group>
			<Form.Group className='mb-3 w-50' controlId='formAuthor'>
				<Form.Label>Author</Form.Label>
				<Form.Control
					{...register("author", { required: true, minLength: 3 })}
					value={author}
					onChange={e => setAuthor(e.target.value)}
					type='text'
					placeholder='Enter author'
				/>
				{errors.author && (
					<small className='d-block form-text text-danger mt-2'>
						{" "}
						This field is required and need min 3 characters.
					</small>
				)}
			</Form.Group>
			<Form.Group className='mb-3 w-50' controlId='formPublishedDate'>
				<Form.Label>Published Date</Form.Label>
				<DatePicker
					selected={publishedDate}
					onChange={date => setPublishedDate(date)}
				/>
				{dateError && (
					<small className='d-block form-text text-danger mt-2'>
						{" "}
						Date can't be empty.
					</small>
				)}
			</Form.Group>
			<Form.Group className='mb-3' controlId='formShortDescription'>
				<Form.Label>Short Description</Form.Label>
				<Form.Control
					{...register("shortDescription", { required: true, minLength: 20 })}
					value={shortDescription}
					onChange={e => setShortDescription(e.target.value)}
					as='textarea'
					rows={2}
					placeholder='Short Description'
				/>
				{errors.shortDescription && (
					<small className='d-block form-text text-danger mt-2'>
						{" "}
						This field is required and need min 20 characters.
					</small>
				)}
			</Form.Group>
			<Form.Group className='mb-3' controlId='formCategory'>
				<Form.Label>Category</Form.Label>
				<Form.Select
					value={category}
					onChange={e => setCategory(e.target.value)}>
					<option>Select Category</option>
					{categories.map(category => (
						<option key={category}>{category}</option>
					))}
				</Form.Select>
			</Form.Group>
			<Form.Group className='mb-3' controlId='formMainContent'>
				<Form.Label>Main content</Form.Label>
				<ReactQuill theme='snow' value={content} onChange={setContent} />
				{contentError && (
					<small className='d-block form-text text-danger mt-2'>
						Content can't be empty
					</small>
				)}
			</Form.Group>
			<Button variant='primary' type='submit'>
				{actionText}
			</Button>
		</Form>
	);
};

export default PostForm;
