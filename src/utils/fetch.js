export const getFetch = (url) =>
  new Promise((resolve, reject) =>
    fetch(url, { method: 'GET' })
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error))
  );
