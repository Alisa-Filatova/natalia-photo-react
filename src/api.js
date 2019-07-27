const Method = {
  GET: `GET`,
  POST: `POST`,
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
  sendMessage(formData) {
    return this.load({
      method: Method.POST,
      body: JSON.stringify(formData),
      headers: new Headers({'Content-Type': `application/json`})
    }).then(toJSON);
  }

  load({method = Method.POST, body = null, headers = new Headers()}) {
    return fetch('/enroll', {method, body, headers})
      .then(checkStatus)
      .catch((error) => { throw error });
  }
}

export default API;
