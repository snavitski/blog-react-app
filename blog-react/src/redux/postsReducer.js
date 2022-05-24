import shortid from "shortid";

// selectors
export const getAllPosts = state => state.posts;
export const getPostById = ({ posts }, id) =>
	posts.find(post => post.idd === id);

// actions
const createActionName = actionName => `app/cards/${actionName}`;
const DELETE_POST = createActionName("DELETE_POST");
const ADD_POST = createActionName("ADD_POST");

// actions creators
export const deletedPost = payload => ({ type: DELETE_POST, payload });
export const addPost = payload => ({ type: ADD_POST, payload });

const postsReducer = (statePart = [], action) => {
	switch (action.type) {
		case DELETE_POST:
			return statePart.filter(post => post.id !== action.payload);
		case ADD_POST:
			return [...statePart, { ...action.payload, id: shortid() }];
		default:
			return statePart;
	}
};

export default postsReducer;
