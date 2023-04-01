import axios from "axios";

export const FetchMovies = async (API_URL) => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
};
