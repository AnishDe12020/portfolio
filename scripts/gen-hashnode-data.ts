import axios from "axios";
import fs from "fs";
import readingTime from "reading-time";

const HASHNODE_DATA_FILE_PATH = "./data/hashnode.json";
const HASHNODE_API_URL = "https://api.hashnode.com/";
const HASHNODE_USERNAME = "AnishDe12020";

const main = async () => {
  const query = `
query($username: String!, $page: Int!) {
	user(username: $username) {
    publicationDomain
		publication {
			posts(page: $page) {
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

  const posts = [];
  let domain: string;
  let didNotGetData = true;

  for (let page = 0; didNotGetData; page++) {
    const res = await axios.post(
      HASHNODE_API_URL,
      JSON.stringify({
        query,
        variables: {
          username: HASHNODE_USERNAME,
          page,
        },
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const {
      data: { data },
    } = res;

    if (data.user.publication.posts.length === 0) {
      domain = data.user.publicationDomain;
      didNotGetData = false;
      break;
    } else {
      posts.push(...data.user.publication.posts);
    }
  }

  const parsedPosts = posts.map(post => {
    const { contentMarkdown, ...postWithoutContent } = post;
    const rTime = readingTime(contentMarkdown);
    const wordCount = contentMarkdown.split(/\s+/gu).length;
    return {
      ...postWithoutContent,
      readingTime: rTime,
      wordCount,
    };
  });

  fs.writeFileSync(
    HASHNODE_DATA_FILE_PATH,
    JSON.stringify({ posts: parsedPosts, domain })
  );
};

main();
