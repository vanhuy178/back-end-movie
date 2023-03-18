import axios from "axios";

const get = async (url) => {
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
      "Accept-Encoding": "identity",
      "Access-Control-Allow-Origin": '*'
    }
  });
  return response.data;
};

export default { get };