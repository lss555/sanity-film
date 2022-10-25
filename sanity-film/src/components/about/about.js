import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";
import BlockContent from "@sanity/block-content-to-react";
import { AboutContainer, AboutHeader, AboutTextContainer, AboutImage } from './about-styles.js';
import imageUrlBuilder from "@sanity/image-url";
import { motion } from 'framer-motion';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {

	const [aboutData, setAboutData] = useState(null);

	 useEffect(() => {
	   sanityClient
	     .fetch(
	       `*[_type == "post" && about == true]{
	       title,
	       slug,
	       publishedAt,
	       body,
	       mainImage{
	         asset->{
	         _id,
	         url
	       }
	     }
	   }`
	   	)
	    .then((data) => setAboutData(data[0]))
      	.catch(console.error);
  }, []);

	if (!aboutData) return <div>Loading...</div>;
	return (
		<motion.div 
				initial={{opacity: 0}}
	      animate={{opacity: 1}}
	      exit={{opacity: 0}}
	      style={{ display: 'flex', marginRight: 'auto', marginLeft: 'auto', width: '100%' }}
				>
				<AboutContainer>
					<AboutTextContainer>
						<AboutHeader>About Sovereign Studios</AboutHeader>
						<BlockContent blocks={aboutData.body}></BlockContent>
					</AboutTextContainer>
					<AboutImage src={urlFor(aboutData.mainImage.asset.url).url()}/>
			
			</AboutContainer>
		</motion.div>
		)
};

export default About;