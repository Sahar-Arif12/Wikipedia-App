import React, { useState, useEffect } from "react";

const User = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  const [showUpdatePost, setShowUpdatePost] = useState(false);
  const [showDeletePost, setShowDeletePost] = useState(false);
  const [content, setContent] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/Sabki/Jaan/Sehar/Khan/allcontent", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContent(data);
        console.log(content);
        setToggle(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [toggle]);

  const handleNewPostClick = () => {
    setShowNewPost(true);
    setShowUpdatePost(false);
    setShowDeletePost(false);
  };

  const handleUpdatePostClick = () => {
    setShowNewPost(false);
    setShowUpdatePost(true);
    setShowDeletePost(false);
  };

  const handleDeletePostClick = () => {
    setShowNewPost(false);
    setShowUpdatePost(false);
    setShowDeletePost(true);
  };

  const NewPost = () => {
    const [body, setBody] = useState("");
    const [header, setHeader] = useState("");

    const handleSubmit = () => {
        // Prepare the data to be sent in the POST request
       
  
        // Perform the fetch POST request
        fetch(`http://localhost:8080/Sabki/Jaan/Sehar/Khan/post?head=${header}&body=${body}&id=1`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Post created:", data);
            // You can handle the response data here if needed
          })
          .catch((error) => {
            console.error("Error creating post:", error);
          });
      };
  


    return (
      <div>
        <div>
          <h3>New Post</h3>
          
          <textarea
            value={header}
            placeholder="header"
            onChange={(e) => setHeader(e.target.value)}
          />
          <textarea value={body} placeholder="body" onChange={(e) => setBody(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };

  const UpdatePost = ({ content }) => {
    const [body, setBody] = useState("");
    const [header, setHeader] = useState("");
    const [id, setId] = useState("");
    const [selectedContent, setSelectedContent] = useState(null);

    const handleHeaderClick = (headerID) => {

      const selectedPost = content.find((post) => post.id === headerID);
      setSelectedContent(selectedPost);
      setId(selectedPost.id)
      setHeader(selectedPost.header); // Set header state with selected post's header
      setBody(selectedPost.body); // Set body state with selected post's body
    };

    const handleUpdateClick = () => {

        console.log(id)
        console.log (body)

        fetch(`http://localhost:8080/Sabki/Jaan/Sehar/Khan/update?head=${header}&body=${body}&id=${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Post created:", data);
              // You can handle the response data here if needed
            })
            .catch((error) => {
              console.error("Error creating post:", error);
            });
        
     
    };

    return (
      <div>
        <div>
          <h3>Update Post</h3>
          <textarea
            placeholder="header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
          <textarea
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button onClick={handleUpdateClick}>Submit</button>
        {content.map((each) => {
          return (
            <h3 key={each.ID} onClick={() => handleHeaderClick(each.id)}>
              {each.header}
            </h3>
          );
        })}
      </div>
    );
  };


  const DeletePost = () => {
    const [postId, setPostId] = useState("");

    const handleSubmit = () => {
        // Prepare the data to be sent in the POST request
       
  
        // Perform the fetch POST request
        fetch(`http://localhost:8080/Sabki/Jaan/Sehar/Khan/delete?id=${postId}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Post created:", data);
            // You can handle the response data here if needed
          })
          .catch((error) => {
            console.error("Error creating post:", error);
          });
      };
    return (
      <div>
        <div>
          <h3>Delete Post</h3>
          <label>Post ID:</label>
          <textarea value={postId} onChange={(e) => setPostId(e.target.value)} />
        </div>
        <button onClick={handleSubmit} >Submit</button>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h1>ADMINISTRATOR</h1>
      </div>
      <div>
        <button onClick={handleNewPostClick}>New Post</button>
        <button onClick={handleUpdatePostClick}>Update Post</button>
        <button onClick={handleDeletePostClick}>Delete Post</button>
      </div>
      <div>
        {showNewPost && <NewPost />}
        {showUpdatePost && <UpdatePost content={content} />}
        {showDeletePost && <DeletePost />}
      </div>
    </div>
  );
};

export default User;
