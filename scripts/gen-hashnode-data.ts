import axios from "axios";
import fs from "fs";
import readingTime from "reading-time";

const HASHNODE_DATA_FILE_PATH = "./data/hashnode.json";
const HASHNODE_API_URL = "https://api.hashnode.com/";

const main = async () => {
  const query = `
query {
	user(username: "AnishDe12020") {
    publicationDomain
		publication {
			posts(page: 0) {
        _id
				slug
				title
				brief
				coverImage
        dateAdded
      	contentMarkdown
			}
		}
	}
}
`;

  const res = await axios.post(HASHNODE_API_URL, JSON.stringify({ query }), {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const {
    data: { data },
  } = res;
  console.log(data);
  const posts = data.user.publication.posts;
  const domain = data.user.publicationDomain;

  const parsedPosts = posts.map(post => {
    const { contentMarkdown } = post;
    const rTime = readingTime(contentMarkdown);
    const wordCount = contentMarkdown.split(/\s+/gu).length
    return {
      ...post,
      readingTime: rTime,
wordCount
    };
  });

  fs.writeFileSync(HASHNODE_DATA_FILE_PATH, JSON.stringify({ posts: parsedPosts, domain }));
};

main();
