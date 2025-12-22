import apiRequest from "./apiRequest";
import { defer } from "react-router-dom";

/* SINGLE POST */
export const singlePageLoader = async ({ params }) => {
  try {
    const res = await apiRequest.get("/posts/" + params.id);
    return res.data;
  } catch (error) {
    // 🔥 THIS PREVENTS REACT ROUTER 404 SCREEN
    if (error.response?.status === 404) {
      return null;
    }

    console.error("Loader error:", error);
    return null;
  }
};


/* LIST PAGE */
export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1] || "";
  const postPromise = apiRequest.get(`/posts?${query}`);

  return defer({
    postResponse: postPromise,
  });
};

/* PROFILE PAGE */
export const profilePageLoader = async ({params}) => {
  const postPromise = apiRequest.get(`users/profileposts/${params.id}`);

  return defer({
    postResponse: postPromise,
  });
};
export const favoritePageLoader = async () => {
  const favoritePromise = apiRequest.get(`/favorites`);
  return defer({
    favoriteResponse: favoritePromise,
  });
}