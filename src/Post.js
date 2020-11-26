import React from 'react' 
function Post({id,title,deletePost}) {
        return (
            <div className="Post">
                <button className="Post__delete" onClick={()=> deletePost(id)}>x</button>
                <div className="Post__title">{title}</div>
                <img className="Post__image" 
                src={`https://source.unsplash.com/random?sig=${id}`} />
            </div>
        )
}
 
export default Post;