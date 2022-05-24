// selectors
export const getAllPosts = state => state.posts;
console.log("getAllPost", getAllPosts);

// actions
//const createActionName = actionName => `app/cards/${actionName}`;

// actions creators

const postsReducer = (statePart = [], action) => {
	switch (action.type) {
		default:
			return statePart;
	}
};

export default postsReducer;
