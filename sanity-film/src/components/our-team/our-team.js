import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { OurTeamContainer, TopHalf, TopHalfTitle, TopHalfSubTitle, OurTeamBody, AuthorPicture, BottomHalf, AuthorContainer } from './our-team-styles.js';
import { motion } from 'framer-motion';



const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
};

const OurTeam = () => {
	const [ourTeamData, setOurTeamData] = useState(null);

	  useEffect(() => {
	    sanityClient
	      .fetch(
	        `*[_type == "director"]{
	          name,
	          slug,
	          image{
	            asset->{
	              _id,
	              url
	             }
	           },
	         bio,
	       }`
	      )
	      .then((data) => setOurTeamData(data))
	      .catch(console.error);
	  }, []);

if (!ourTeamData) return <div>Loading...</div>;

	return (
		<motion.div 
					initial={{opacity: 0}}
		      animate={{opacity: 1}}
		      exit={{opacity: 0}}
					>
          <OurTeamContainer>
      <TopHalfTitle>Our Team</TopHalfTitle>
      {ourTeamData.map((author, index) => (
        <AuthorContainer key={author.slug.current}>
          <TopHalf>
            
            <TopHalfSubTitle>{author.name}</TopHalfSubTitle>
            <AuthorPicture
                src={urlFor(author.image).url()}
                alt="Author is chris"
              />
          </TopHalf>
          <BottomHalf>
            <OurTeamBody>
              <BlockContent
                blocks={author.bio}
              />
            </OurTeamBody>
          </BottomHalf>
        </AuthorContainer>
      ))}
      </OurTeamContainer>
    </motion.div>
		)
};

export default OurTeam;