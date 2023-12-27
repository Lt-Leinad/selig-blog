import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import client from "../client";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
      title, 
      _id, 
      slug,
      publishedAt, 
      readTime,
      mainImage{
        asset->{
          _id, 
          url
        }
      }, 
      body, 
      "name": author->name,
      "authorImage":author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <div className="body">
      <h1>{singlePost.title}</h1>
      <BlockContent
        blocks={singlePost.body}
        projectId={"8ab8bcjd"}
        dataset={"production"}
      />
    </div>
  );
}
