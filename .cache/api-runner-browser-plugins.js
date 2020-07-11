module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"CodeRando Brasil","short_name":"CodeRando BR","description":"O melhor blog de programação do Rando tem nome, é CodeRando.","start_url":"/","background_color":"#F2F3F4","theme_color":"#000000","display":"standalone","icon":"static/favicon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"46c8efa3d3a8ea9817a619365ebe672d"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"**-********-*"},
    }]
