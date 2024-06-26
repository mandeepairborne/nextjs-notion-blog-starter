module.exports = {
  images: {
    unoptimized: true
  },
  images: {
    domains: [
      's3.us-west-2.amazonaws.com', // Images coming from Notion
      'via.placeholder.com', // for articles that do not have a cover image
      'images.unsplash.com', // For blog articles that use an external cover ima ge
      'pbs.twimg.com', // Twitter Profile Picture
      'dwgyu36up6iuz.cloudfront.net',
      'cdn.hashnode.com',
      'res.craft.do',
      'res.cloudinary.com',
      'nextjs-notion-blog-starter.vercel.app',
      'prod-files-secure.s3.us-west-2.amazonaws.com'
    ]
  },
  css: {
3    loader: 'css-loader',
4    loaderOptions: {
5      url: false,
6    },
7  },
webpack: (config) => {
config.module.rules.push({
     test: /\.(woff|woff2|eot|ttf|otf)$/i,
type: 'asset/resource',
});
    return config;
  },
styles: ['styles/global.css'],
};
