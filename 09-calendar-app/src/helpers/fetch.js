const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;
  console.log(url, "url");

  const headers = {
    "Content-type": "application/json",
  };

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      body: JSON.stringify(data),
      headers,
    });
  }
};

export { fetchSinToken };
