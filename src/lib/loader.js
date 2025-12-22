import apiRequest from "./apiRequest";

/* SINGLE POST */
export const singlePageLoader = async ({ params }) => {
  try {
    const res = await apiRequest.get("/posts/" + params.id);
    return res.data;
  } catch (error) {
    if (error.response?.status === 404) {
      return null; // Prevent 404 screen
    }
    console.error("Loader error:", error);
    return null;
  }
};

/* LIST PAGE */
export const listPageLoader = async ({ request }) => {
  const query = request.url.split("?")[1] || "";
  try {
    const res = await apiRequest.get(`/posts?${query}`);
    return { postResponse: res.data };
  } catch (error) {
    console.error(error);
    return { postResponse: [] };
  }
};

/* PROFILE PAGE */
export const profilePageLoader = async ({ params }) => {
  try {
    const res = await apiRequest.get(`users/profileposts/${params.id}`);
    return { postResponse: res.data };
  } catch (error) {
    console.error(error);
    return { postResponse: [] };
  }
};

/* FAVORITE PAGE */
export const favoritePageLoader = async () => {
  try {
    const res = await apiRequest.get(`/favorites`);
    return { favoriteResponse: res.data };
  } catch (error) {
    console.error(error);
    return { favoriteResponse: [] };
  }
};
