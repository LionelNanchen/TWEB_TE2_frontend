class ResponseError extends Error {
  constructor(res, body) {
    super(`${res.status} error requesting ${res.url}: ${res.statusText}`);
    this.status = res.status;
    this.path = res.url;
    this.body = body;
  }
}

class TMDb {
  constructor({baseUrl = 'https://api.themoviedb.org/3/' } = {}) {
    this.baseUrl = baseUrl;
  }

  request(path, opts = {}) {
    const url = `${this.baseUrl}${path}`;
    const options = {
      ...opts,
    };

    return fetch(url, options)
      .then(res => res.json()
        .then((data) => {
          if (!res.ok) {
            throw new ResponseError(res, data);
          }
          return data;
        }));
  }

  popular() {
    return this.request(`movie/popular?page=1&api_key=f1be4bafe6f7cb0cb84f5948c5b75497`);
  }

  commingSoon() {
    return this.request(`genre/movie/list?api_key=f1be4bafe6f7cb0cb84f5948c5b75497`)
  }
}

export default TMDb;
