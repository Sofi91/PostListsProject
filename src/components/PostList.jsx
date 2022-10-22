import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PostItem from './PostItem'

const PostList = ({ posts, deletePost }) => {
    if (!posts.length) {
        return (
            <h1>No Posts</h1>
        )
    }
    return (
        <>
            <h1 style={{ color: 'red', fontSize: '50px', marginTop: '20px' }}>Posts List</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem
                            deletePost={deletePost}
                            number={index + 1}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>


        </>
    )
}

export default PostList