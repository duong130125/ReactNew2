import React from 'react'

export default function B7con(props) {
    const {posts} = props;
  return (
    <>
    <h1>Danh sách bài viết</h1>
    <ul>
        {posts.map(post => (  
            <p key={post.id}>
                <p>Id: {post.id}</p>
                <p>Title: {post.title}</p>
                <p>Content: {post.content}</p>
                <p>Author: {post.author}</p>
            </p>
        ))}
    </ul>
    </>
  )
}
