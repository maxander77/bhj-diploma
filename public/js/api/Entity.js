class Entity {
  static URL = '';
  static list(data, callback){
    try {
    const options = {
      method: 'GET',
      url: this.URL,
      data: data,
      callback: callback,
    };

    createRequest(options);
   } catch (error) {
    options.callback(error, null);
   }
  }

  static create(data, callback) {
     try {
     const options = {
     method: 'POST',
     url: this.URL,
     data: data,
     callback: callback,
    };
    
    createRequest(options);
    } catch (error) {
      options.callback(error, null);
      }
    }

  static remove(data, callback ) {
    try {
      const options = {
        method: 'DELETE',
        url: this.URL,
        data: data,
        callback: callback,
      };
  
      createRequest(options);
     } catch (error) {
      options.callback(error, null);
     }
    }
  }
