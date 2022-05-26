import { Card, Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsReducer";
import { Link } from "react-router-dom";
import dateToStr from "../../utils/dateToStr";

const AllPosts = () => {
	const posts = useSelector(getAllPosts);
	return (
		<Row xs={1} md={3} className='g-4'>
			{posts.map(post => (
				<Col key={post.id}>
					<Card>
						<Card.Body>
							<Card.Title>{post.title}</Card.Title>
							<Card.Text>
								<span>Author</span> {post.author}
							</Card.Text>
							<Card.Text>
								<span>Published:</span> {dateToStr(post.publishedDate)}
							</Card.Text>
							<Card.Text>{post.shortDescription}</Card.Text>
							<Button as={Link} to={"/post/" + post.id} type='primary'>
								Read more
							</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
};
export default AllPosts;
