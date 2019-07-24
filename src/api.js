const Method = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  DELETE: `DELETE`
};

const ResponseStatus = {
  OK: 200,
  MULTIPLY_CHOICE: 300,
};

const checkStatus = (response) => {
  if (response.status >= ResponseStatus.OK && response.status < ResponseStatus.MULTIPLY_CHOICE) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

const toJSON = (response) => {
  return response.json();
};

class API {
  constructor({endPoint, authorization}) {
    this.endPoint = endPoint;
    this.authorization = authorization;
  }

  sendMessage(formData) {
    return this.load({
      url: `enroll`,
      method: Method.POST,
      body: JSON.stringify(formData),
      headers: new Headers({'Content-Type': `application/json`})
    }).then(toJSON);
  }

  load({url, method = Method.POST, body = null, headers = new Headers()}) {
    headers.append(`Authorization`, this.authorization);

    return fetch(`${this.endPoint}/${url}`, {method, body, headers})
      .then(checkStatus)
      .catch((error) => { throw error });
  }
}

export default API;
