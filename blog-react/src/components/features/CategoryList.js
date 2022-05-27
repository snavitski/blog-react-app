import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../redux/categoriesReducer";
import { Link } from "react-router-dom";

const CategoryList = () => {
	const categories = useSelector(getAllCategories);
	console.log("categoriesAll", categories);

	return (
		<ListGroup>
			{categories.map(category => (
				<ListGroup.Item
					key={category}
					action
					as={Link}
					to={"/categories/" + category.toLowerCase()}>
					{category}
				</ListGroup.Item>
			))}
		</ListGroup>
	);
};

export default CategoryList;
