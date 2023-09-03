const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        options.callback(null, xhr.response);
      } else {
        options.callback(`Запрос вызвал ошибку: ${xhr.status}`, null);
      }
    }
  };

  xhr.responseType = 'json';

  const {method, url, data} = options;

  if (method === 'GET') {
    const queryString = buildQueryString(options.data);
    const fullUrl = `${options.url}?${queryString}`;
    xhr.open(options.method, fullUrl);
    xhr.send();
  } else {
    xhr.open(options.method, options.url);
    const formData = new FormData;
    for (let key in options.data) {
      formData.append(key, options.data[key]);
    }

    xhr.send(formData);
  }
};

