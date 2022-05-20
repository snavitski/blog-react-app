import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../reudx/postsRedux";
import { Link } from "react-router-dom";

const AllPosts = () => {
	const posts = useSelector(getAllPosts);
	return (
		<Row xs={1} md={3} className='g4'>
			{posts.map(post =>
			<Col key={posts.id}>
				<Card>
					<Card.Body>
						<Card.Title>{posts.title}</Card.Title>
						<Card.Text>
							<span>Author</span> {posts.author}
						</Card.Text>
						<Card.Text>
							<span>Published</span>
							{posts.publisgedDate}
						</Card.Text>
						<Card.Text>{posts.shortDescription}</Card.Text>
						<Button as={Link} to={"/post/" + posts.id} type='primary'>
							Read more
						</Button>
					</Card.Body>
				</Card>
			</Col>)}
		</Row>
	);
};

export default AllPosts;
