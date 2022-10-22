import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = ({number,title,body,deletePost,id}) => {

    return (
        <div className="post">
            <div className="post__content">
                <h2 className="post__title">{id}. {title}</h2>
                <p className="post__description">
                    {body}
                </p>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => deletePost(id) }>Delete</MyButton>
            </div>
        </div>
    )
}

export default PostItem
