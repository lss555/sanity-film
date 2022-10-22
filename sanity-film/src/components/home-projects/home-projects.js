import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../client.js";
import { HomeProjectsContainer } from './home-projects-styles.js';
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}



const HomeProjects = () => {
	const [allPostsData, setAllPosts] = useState(null);

useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && highlight]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

return (
		<HomeProjectsContainer>
      		<div>
        		{allPostsData &&
          		allPostsData.map((post, index) => (
            		<Link to={"/" + post.slug.current} key={post.slug.current}>
              			<span key={index}>
                			<img src={urlFor(post.mainImage.asset.url).width(200).url()} alt="" />
                			<span>
                  			<h2>{post.title}</h2>
                			</span>
              			</span>
            		</Link>
          		))}
      		</div>
		</HomeProjectsContainer>
	)
};  

export default HomeProjects;