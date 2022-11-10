import React from 'react';

import './index.css';

function Post({postId, title, date, author, text, highlights, image}) {
  console.log("hello")
  return <article>
   <h1>{title}</h1>
  </article>;
}

export default Post;

{/* <h1>{title}</h1>
<h2>{author} </h2> 
<p>{text}</p> */}
