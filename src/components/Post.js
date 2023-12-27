import React, { useState, useEffect } from "react";
import client from "../client";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title, 
        slug,
        author,
        "authorImage":author->image, 
        mainImage{
            asset->{
                _id, 
                url
            }, 
            alt
        }
    }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <div className="body">
      <div>
        {postData &&
          postData.map((post, index) => (
            <Link
              to={"/post/" + post.slug.current}
              key={post.slug.current}
              className="thumbnailLink"
            >
              <h1 className="title">{post.title}</h1>
            </Link>
          ))}
      </div>
    </div>
  );
}
