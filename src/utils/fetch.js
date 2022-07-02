export const getFetch = (url) =>
  new Promise((resolve, reject) =>
    fetch(url, { method: 'GET' })
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error))
  );

export const postFetch = (url, body) =>
  new Promise((resolve, reject) =>
    fetch(url, { method: 'POST', body: JSON.stringify(body) })
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error))
  );
