import React, { useEffect, useState } from "react";

import sanityClient from "../../client.js";
import { ArchivesContainer, ArchivesFilmsContainer, YearH3, FilmNameH3, ArchivesHeader, FilmLink, ProjectRowContainer, DateHeader, FilmNameHeader, SubHeaderContainer, TitleColumn } from './archives-styles.js';


const Archives = () => {
	const [allPostsData, setAllPosts] = useState(null);

	 useEffect(() => {
	   sanityClient
	     .fetch(
	       `*[_type == "post" && about != true]{
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
	      <TitleColumn>
	      	<FilmNameHeader>Title</FilmNameHeader>
	      </TitleColumn>
      </SubHeaderContainer>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <FilmLink to={"/" + post.slug.current} key={post.slug.current}>
	           <ArchivesFilmsContainer>
	              <span key={index}>
	                <ProjectRowContainer>
	                  <YearH3>{post.publishedAt}</YearH3>
	                  <TitleColumn>
	                  	<FilmNameH3>{post.title}</FilmNameH3>
	                  </TitleColumn>
	                </ProjectRowContainer>
	              </span>
              </ArchivesFilmsContainer>
            </FilmLink>
          ))}
      
    </ArchivesContainer>
  );
};

export default Archives;