    /**
     * @class   Responsible for storing and manipulating Spacebook posts,
     *          and provides methods to add and delete posts and comments 
     *          in-memory
     */
    
class PostsRepository {
    constructor() {
        this.posts = [];
    }

    addPost(postText) {
        this.posts.push({ text: postText, comments: [] });
    }

    removePost(index) {
        this.posts.splice(index, 1);
    }
    
    addComment(newComment, postIndex) {
        this.posts[postIndex].comments.push(newComment);
    };

    deleteComment(postIndex, commentIndex) {
        this.posts[postIndex].comments.splice(commentIndex, 1);
      };
}

export default PostsRepository