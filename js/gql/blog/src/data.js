export const data = {
  users: [{
    id: "1",
    name: "Dave", 
    email: "dave@example.com"
  }],
  posts: [
    {
      id: "1",
      title: "post 1",
      body: "first post",
      author: "1",
      published: true
    },
    {
      id: "2",
      title: "post 2",
      body: "second post",
      author: "1",
      published: true
    }
  ],
  comments: [
    { text: "everything dave does is awesome", post: "2"}
  ],
};
