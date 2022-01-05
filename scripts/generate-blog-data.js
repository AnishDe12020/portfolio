/* eslint-disable no-tabs */
import fetch from "node-fetch";
import fs from "fs";

const DATA_FILE_PATH = "./src/blog-data.json";

const writeBlogData = async () => {
  const blogDataQuery = `
query {
	user(username: "AnishDe12020") {
		publication {
			posts(page: 0) {
				slug
				title
				cuid
				brief
				coverImage
				dateAdded
			}
		}
	}
}
	`;

  const blogDataRes = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: blogDataQuery,
    }),
  });

  const blogData = await blogDataRes.json();
  const posts = blogData.data.user.publication.posts.slice(0, 3);

  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify({ posts }));
};

writeBlogData();
