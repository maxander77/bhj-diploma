class User {
  static URL = '/user';

  static setCurrent(user) {
    const userString = JSON.stringify(user);
    localStorage.setItem('currentUser', userString);
  }

  static unsetCurrent() {
    localStorage.removeItem('currentUser');
  }

  static current() {
    const userString = localStorage.getItem('currentUser');
    if (userString) {
      return JSON.parse(userString);
    } else {
    return undefined;
    }
  }

  static fetch(callback) {
    const options = {
      method: 'GET',
      url: this.URL + '/current',
      callback: (err, response) => {
        if (!err) {
          this.setCurrent(response.user);
        } else {
          callback(err, response);
        }
      }
    };

    createRequest(options);
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }


  static register(data, callback) {
    const options = {
      method: 'POST',
      url: this.URL + '/regiestr',
      data: data,
      callback: (err, response) => {
        if (!err && response.succese) {
          this.setCurrent(response.user);
        } else {
          callback(err, response);
        }
      }
    };

    createRequest(options);
  }

  static logout(callback) {
    const options = {
      method: 'POST',
      url: this.URL + '/logout',
      callback: (err, response) => {
        if (!err && response.success) {
          this.unsetCurrent();
        }
        callback(err, response);
      }
    };
  
    createRequest(options);
  }
}
