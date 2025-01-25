const API_URL = 'http://localhost:8000';

class HTTPClient {
  static async request(method, route, body = null) {
    const options = {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(`${API_URL}${route}`, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP Error: ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error('HTTPClient Error:', error);
      throw error;
    }
  }

  static get(route) {
    return this.request('GET', route);
  }

  static post(route, body) {
    return this.request('POST', route, body);
  }

  static put(route, body) {
    return this.request('PUT', route, body);
  }

  static patch(route, body) {
    return this.request('PATCH', route, body);
  }

  static delete(route) {
    return this.request('DELETE', route);
  }
}

export default HTTPClient;
