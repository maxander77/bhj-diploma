class Account extends Entity {
  static URL = '/account';

  static get(id = '', callback){
    try {
      const options = {
        method: 'GET',
        url: `${this.URL}/${id}`,
        data: [],
        callback: callback,
      };

      createRequest(options);
    } catch (error) {
      callback(error, null);
    }
  }
}
