module.exports = {
  siteMetadata: {
    title: `The Edge of Fear`,
    description: `Nobody has all the answers, but most people have at least one. The only way to learn what others have to teach us is by talking to one another, listening and connecting. Part of what we're missing in our modern society is a deeper sense of connection and belonging; we aren't seeing the light in others or in ourselves enough to want to open up or welcome others in. This podcast is meant to encourage authenticity, honesty, kindness and love, by sharing the darkness and the light. Sharing the twisted realities of our human experiences will help us feel safe TO feel, and then ultimately connect as a byproduct of those feelings.`,
    author: `LIZ BASILE-LOUISON`,
    twitter: ``,
    instagram: `www.instagram.com/lizwithoutapillow `,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1478323265?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly90aGVlZGdlb2ZmZWFycG9kY2FzdC5saWJzeW4uY29tL3Jzcw==`,
    pocket: `https://pca.st/itunes/1478323265`,
    spotify: `https://open.spotify.com/show/3iLyRLhNpeHCkf2LprxFjf`,
    overcast: `https://overcast.fm/itunes1478323265`,
    castbox: `https://castbox.fm/vic/1478323265`,
    castro: `https://castro.fm/itunes/1478323265`,
    podbean: ``,
    beaker: `https://www.breaker.audio/shows?feed_url=https%3A%2F%2Ftheedgeoffearpodcast.libsyn.com%2Frss`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `http://theedgeoffearpodcast.libsyn.com/rss`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
