const baseURL: string = "https://gateway.marvel.com/v1/public/";
const apiKey: string = "2a4248f1bd8ff18b6cf2d58d8cc0e58c";
const hash: string = "1372064c8739bbbca27295113b6f4d422b357d98";

// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setDefaultHttpFields({cache: true});
  RestangularProvider.setBaseUrl(baseURL);
  RestangularProvider.setDefaultRequestParams({apikey: apiKey});
  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
     var extractedData;
    //  .. to look for getList operations
     if (operation === "getList") {
      //  .. and handle the data and meta data
       extractedData = data.data.results;
     } else if(operation ==="get"){
       extractedData = data.data.results[0];
     }
     return extractedData;
   });
}
