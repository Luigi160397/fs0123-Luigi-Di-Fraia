export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILES = "GET_PROFILES";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const GET_POSTS = "GET_POSTS";
export const GET_JOBS = "GET_JOBS";
export const GET_SEARCH_QUERY = "GET_SEARCH_QUERY";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_COMMENTS = "GET_COMMENTS";

export const getProfileAction = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/me";
  const token = process.env.REACT_APP_API_KEY;
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: token
        }
      });
      if (resp.ok) {
        let data = await resp.json();

        dispatch({ type: GET_PROFILE, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProfilesAction = () => {
  const url = "https://striveschool-api.herokuapp.com/api/profile/";
  const token = process.env.REACT_APP_API_KEY;
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: token
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        data.sort(() => Math.random() - 0.5);
        // data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        dispatch({ type: GET_PROFILES, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getExperiencesAction = id => {
  const url = `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`;
  const token = process.env.REACT_APP_API_KEY;
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: token
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_EXPERIENCES, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPostsAction = () => {
  const url = `https://striveschool-api.herokuapp.com/api/posts/`;
  const token = process.env.REACT_APP_API_KEY;
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: token
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        //data.sort(() => Math.random() - 0.5);
        const reversedData = data.toReversed();
        dispatch({ type: GET_POSTS, payload: reversedData });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getJobsAction = () => {
  const url = "https://strive-benchmark.herokuapp.com/api/jobs";
  const token = process.env.REACT_APP_API_KEY;
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: token
        }
      });
      if (resp.ok) {
        let { data } = await resp.json();
        // data.sort(() => Math.random() - 0.5);
        //dispatch({ type: GET_JOBS, payload: data.data });
        dispatch({ type: GET_JOBS, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSearchQueryAction = query => {
  const url = `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`;
  const token = process.env.REACT_APP_API_KEY;
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: token
        }
      });
      if (resp.ok) {
        let { data } = await resp.json();

        dispatch({ type: GET_SEARCH_QUERY, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToFavouriteAction = job => ({
  type: ADD_TO_FAVOURITE,
  payload: job
});

export const removeFromFavouriteAction = job => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: job
});

export const getCommentsAction = url => {
  const token = process.env.REACT_APP_API_CRUD;
  return async dispatch => {
    try {
      let resp = await fetch(url, {
        headers: {
          Authorization: token
        }
      });
      if (resp.ok) {
        let data = await resp.json();

        dispatch({ type: GET_COMMENTS, payload: data });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
