import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import { HomeProjectsContainer, HomeProjectsImg, HomeProjectsTitle, HomeProjectsLink, HomeProjectsWrapper, HomeProjectsText, HomeProjectsTextContainer } from './home-projects-styles.js';
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";


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
        body,
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
              <HomeProjectsWrapper key={post.slug.current}>
          		<HomeProjectsLink to={"/" + post.slug.current}>
              <HomeProjectsTextContainer>
                	<HomeProjectsTitle>{post.title}</HomeProjectsTitle>
                  <HomeProjectsText>
                  <BlockContent
                blocks={post.body}
                projectId={sanityClient.clientConfig.projectId}
                dataset={sanityClient.clientConfig.dataset}
              />
              </HomeProjectsText>
              </HomeProjectsTextContainer>
                  <HomeProjectsImg src={urlFor(post.mainImage.asset.url).url()} alt="" />
          		</HomeProjectsLink>
              </HomeProjectsWrapper>
        	))}
      	</div>
		</HomeProjectsContainer>
	)
};  

export default HomeProjects;