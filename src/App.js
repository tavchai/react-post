import './App.css';
import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';
import { useState } from 'react';

let id  = 1;
function App() {
  
  const [posts,setPost] = useState([]);

  function addPost(title) {
    const newPost = {id,title};
    setPost([newPost,...posts]);
    id += 1;
  }

  function deletePost(id) {
    const updatePost  =  posts.filter((post) => post.id != id);
    setPost(updatePost); 
  }
  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost}/>
      {posts.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost} />
      ))}
    </div>
  );
}

export default App;
