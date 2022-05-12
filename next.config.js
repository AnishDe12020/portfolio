const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  images: {
    domains: [
      "media.graphassets.com",
      "c5eq9h7e.directus.app",
      "res.cloudinary.com",
      "cdn.hashnode.com",
    ],
  },
});
