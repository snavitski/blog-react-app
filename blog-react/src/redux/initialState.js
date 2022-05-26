const initialState = {
	posts: [
		{
			id: "1",
			title: "Animal spirit",
			shortDescription: "Wake up your animal spirit...",
			content: "Main content of the article",
			publishedDate: "02-02-2022",
			author: "John Doe",
		},
		{
			id: "2",
			title: "New moon in libra",
			shortDescription: "What brings you this new moon...",
			content: "Main content of the article",
			publishedDate: new Date("03-02-2022"),
			author: "Alicia Key",
		},
		{
			id: "3",
			title: "Full moon in pisces",
			shortDescription: "What brings you this full moon...",
			content: "Main content of the article",
			publishedDate: new Date("24-02-2022"),
			author: "John Doe",
		},
		{
			id: "4",
			title: "Inner child",
			shortDescription: "How to recognize your inner child needs...",
			content: "Main content of the article",
			publishedDate: new Date("01-03-2022"),
			author: "Vito Drawn",
		},
	],
};
export default initialState;
