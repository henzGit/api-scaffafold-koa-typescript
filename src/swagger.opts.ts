export const swaggerOpts = {

    title: 'BPP Server',
    description: 'API DOC',
    version: '1.0',
  
    // [optional] default is root path.
    // if you are using koa-swagger-decorator within nested router, using this param to let swagger know your current router point
    prefix: '/',
  
    // [optional] default is /swagger-html
    swaggerHtmlEndpoint: '/api',
  
    // [optional] default is /swagger-json
    swaggerJsonEndpoint: '/api-json',
  
    // [optional] additional options for building swagger doc
    // eg. add api_key as shown below
    swaggerOptions: {
      securityDefinitions: {
        api_key: {
          type: 'apiKey',
          in: 'header',
          name: 'api_key',
        },
      },
    },
    // [optional] additional configuration for config how to show swagger view
    swaggerConfiguration: {
      display: {
        defaultModelsExpandDepth: 4, // The default expansion depth for models (set to -1 completely hide the models).
        defaultModelExpandDepth: 3, // The default expansion depth for the model on the model-example section.
        docExpansion: 'list', // Controls the default expansion setting for the operations and tags. 
        defaultModelRendering: 'model' // Controls how the model is shown when the API is first rendered. 
      }
    }
};