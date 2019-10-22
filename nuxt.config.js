
module.exports = {

  srcDir: 'src',

  head() {

    return {

      meta: [

        { name: 'viewport', content: 'width=device-width' }

      ]

    };

  },

  build: {

    extractCSS: true,
    
    extend( config, { isDev, isClient } ) {


      config.module.rules.push( {
        test: /\.(yml|yaml)$/,
        use: [
          {
            loader: require.resolve('json-loader')
          },
          {
            loader: require.resolve('yaml-loader')
          }
        ]
      } );

    }

  }

};
