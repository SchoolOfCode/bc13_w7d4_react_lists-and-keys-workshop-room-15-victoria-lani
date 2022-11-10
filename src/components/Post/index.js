import React from 'react';

import './index.css';

function Post({postId, title, date, author, text, highlights, image}) {
  console.log(`hello ${title}`)
  return <article style={{border: "1px solid red"}}>
   <h1>{title}</h1>
  </article>;
}

export default Post;

{/* <h1>{title}</h1>
<h2>{author} </h2> 
<p>{text}</p> */}
