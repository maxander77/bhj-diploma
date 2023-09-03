class Entity {
  static URL = '';

  static list(data, callback){
    const options = {
      method: 'GET',
      url: this.URL,
      data: data,
      callback: callback,
    };
    createRequest(this.options);   
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
      this.options.callback(error, null);
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
      this.options.callback(error, null);
     }
    }
  }
