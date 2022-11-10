import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

// function extractArray(post){
//   return  <Post key={post.postId} title={post.title}/> 
// }

function Main() {
  const [posts, setPosts] = useState(samplePosts);

  return(
  <main id="main">
{/*   
    {posts.map(extractArray)} */}

    {posts.map((post)=>{
    return  <Post key={post.postId} title={post.title}/> 
    })}

 </main>
  )
}


{/* // destructure later!!
  {posts.map(()=> {return <Post key={posts.postId} title={posts.title} date={posts.date} author={posts.author} text={posts.text} highlights={posts.highlights} image={posts.image} />})}
*/}
 

export default Main;

