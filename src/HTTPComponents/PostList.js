import React, { Component } from "react";
import axios from "axios";
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((responce) => {
        console.log(responce);
        this.setState({
          posts: responce.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "error retrieving the data" });
      });
  }
  render() {
    const { posts, errorMessage } = this.state;
    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    );
  }
}

export default PostList;
