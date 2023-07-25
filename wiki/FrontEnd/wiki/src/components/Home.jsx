import React, { useEffect, useState } from "react";

const Home = () => {
  const [content, setContent] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

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

  const Wikis = ({ post }) => {
    return (
      <div>
        <div>
          <h1>{post.header}</h1>
        </div>
        <div>
          <p>{post.body}</p>
        </div>
      </div>
    );
  };

  const handleHeaderClick = (headerID) => {
    const selectedPost = content.find((post) => post.id === headerID);
    setSelectedContent(selectedPost);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "0 0 25%", backgroundColor: "#adadad" }}>
        <h1>Wikis</h1>
        {toggle &&
          content.map((each) => {
            return (
              <h3 key={each.ID} onClick={() => handleHeaderClick(each.id)}>
                {each.header}
              </h3>
            );
          })}
      </div>
      <div style={{ flex: "0 0 75%" }}>
        {selectedContent ? <Wikis post={selectedContent} /> : null}
      </div>
    </div>
  );
};

export default Home;
