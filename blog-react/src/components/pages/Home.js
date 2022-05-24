import { Button, Row, Col } from "react-bootstrap";
import AllPosts from "../features/AllPosts";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<Row xs={"auto"} className='justify-content-between mb-3'>
				<Col>
					<h2>All Posts</h2>
				</Col>
				<Col className='text-right'>
					<Button as={Link} to={"/post/add"} variant='outline-info'>
						Add post
					</Button>
				</Col>
			</Row>
			<AllPosts />
		</>
	);
};

export default Home;
