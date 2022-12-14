import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { OneFilmContainer, FilmTitle, DirectedByText, DescriptionText, DatePublished, VideoContainer, ProjectTextContainer, ReactVideoPlayer } from './one-film-styles.js';
import { motion } from 'framer-motion';

// numCounter = num + 1;
//   return numCounter;


const OneFilm = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          url,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": director->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

 if (!postData) return <div>Loading...</div>;

	return (
		<motion.div 
					initial={{opacity: 0}}
		      animate={{opacity: 1}}
		      exit={{opacity: 0}}
					>
			<OneFilmContainer>
				<ProjectTextContainer>
					<FilmTitle>{postData.title}</FilmTitle> 
					<DirectedByText>Directed By: {postData.name}</DirectedByText>
					
					<DescriptionText>
				        <BlockContent
				          blocks={postData.body}
				          projectId={sanityClient.clientConfig.projectId}
				          dataset={sanityClient.clientConfig.dataset}
				        />
		      		</DescriptionText>
		      		<DatePublished>{postData.publishedAt}</DatePublished>
	      		</ProjectTextContainer>
	      		<VideoContainer>
					<ReactVideoPlayer 
					controls
					url={postData.url}
					allow="true"
	      			allowFullScreen
					/>
				</VideoContainer>
			</OneFilmContainer>
		</motion.div>
		)
};

export default OneFilm;