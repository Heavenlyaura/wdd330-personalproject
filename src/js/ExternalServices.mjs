const apiKey = import.meta.env.VITE_API_KEY;
const apiAuthToken = import.meta.env.VITE_API_AUTH_TOKEN;

export default class ExternalServices {
  constructor() {}
  async init() {}

  async getData(url, requestType) {
    let options = {
      method: "GET",
      headers: {
        accept: `application/${requestType}`,
        Authorization: `Bearer ${apiAuthToken}`,
      },
    };
    try {
      const response = await fetch(
        url,
        (options = requestType ? options : null),
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return data;
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }
}
