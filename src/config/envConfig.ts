export const EnvConfig = {
  app: {
    PORT: process.env.PORT,
  },
  mongodb: {
    URI: process.env.MONGODB_URI,
  },
  cdn_images: {
    URL: process.env.CDN_IMAGES_URI
  }
};
