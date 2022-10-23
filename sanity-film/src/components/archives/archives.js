import React, { useEffect, useState } from "react";

import sanityClient from "../../client.js";
import { ArchivesContainer, ArchivesFilmsContainer, YearH3, FilmNameH3, ArchivesHeader, FilmLink, ProjectRowContainer, DateHeader, FilmNameHeader, SubHeaderContainer } from './archives-styles.js';


const Archives = () => {
	const [allPostsData, setAllPosts] = useState(null);

	 useEffect(() => {
	   sanityClient
	     .fetch(
	       `*[_type == "post"]{
	       title,
	       slug,
	       publishedAt,
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
    <ArchivesContainer>
      <ArchivesHeader>Archives</ArchivesHeader>
      <SubHeaderContainer>
	      <DateHeader>Release Date</DateHeader>
	      <FilmNameHeader>Title</FilmNameHeader>
      </SubHeaderContainer>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <FilmLink to={"/" + post.slug.current} key={post.slug.current}>
	           <ArchivesFilmsContainer>
	              <span key={index}>
	                <ProjectRowContainer>
	                  <YearH3>{post.publishedAt}</YearH3>
	                  <FilmNameH3>{post.title}</FilmNameH3>
	                </ProjectRowContainer>
	              </span>
              </ArchivesFilmsContainer>
            </FilmLink>
          ))}
      
    </ArchivesContainer>
  );
};

export default Archives;