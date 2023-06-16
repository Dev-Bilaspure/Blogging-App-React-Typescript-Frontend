import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import axios from "axios";
import Cookies from "js-cookie";
import { INTERNAL_SERVER_ERROR } from "@/utils/errorTypes";

const ORIGIN = "http://localhost:8000";
export const useStore = create<State, [["zustand/immer", never]]>(
  immer((set, get) => ({
    data: {
      authenticatedUser: null,
    },
    actions: {
      auth: {
        initializeUser: async () => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const response = await axios.get(`${ORIGIN}/api/auth/me`);

            if (response.data.success) {
              set((state) => {
                state.data.authenticatedUser = response.data.user;
              });
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        loginUser: async ({ email, password }) => {
          const response = await axios.post(`${ORIGIN}/api/auth/login`, {
            email,
            password,
          });
          if (response.data.success) {
            Cookies.set("token", response.data.token);
            await get().actions.auth.initializeUser();
          }
          return response.data;
        },
        logoutUser: () => {
          Cookies.remove("token");
          set((state) => {
            state.data.authenticatedUser = null;
          });
        },
        signupUser: async ({ firstName, lastName, email, password }) => {
          const response = await axios.post(`${ORIGIN}/api/auth/signup`, {
            firstName,
            lastName,
            email,
            password,
          });
          if (response.data.success) {
            Cookies.set("token", response.data.token);
            await get().actions.auth.initializeUser();
          }
          return response.data;
        },
      },
      user: {
        updateUser: async (userInfo) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const userId = get().data.authenticatedUser._id;
            const response = await axios.put(
              `${ORIGIN}/api/users/${userId}`,
              userInfo
            );
            if (response.data.success) {
              set((state) => {
                state.data.authenticatedUser = response.data.user;
              });
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        followAUser: async (userIdToFollow) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const response = await axios.put(
              `${ORIGIN}/api/users/follow/${get().data.authenticatedUser._id}`,
              { userIdToFollow }
            );
            if (response.data.success) {
              set((state) => {
                state.data.authenticatedUser = response.data.user;
              });
              const { success, user, message } = response.data;
              return { success, user, message };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        unfollowAUser: async (userIdToUnfollow) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const response = await axios.put(
              `${ORIGIN}/api/users/unfollow/${
                get().data.authenticatedUser._id
              }`,
              { userIdToUnfollow }
            );
            if (response.data.success) {
              set((state) => {
                state.data.authenticatedUser = response.data.user;
              });
              const { success, user, message } = response.data;
              return { success, user, message };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        getUserById: async (userId) => {
          const response = await axios.get(`${ORIGIN}/api/users/${userId}`);
          if (response.data.success) {
            const { success, user, message } = response.data;
            return { success, user, message };
          }
          return response.data;
        },
        getUsersFollowers: async (userId) => {
          const response = await axios.get(
            `${ORIGIN}/api/users/followers/${userId}`
          );
          if (response.data.success) {
            const { success, users, message } = response.data;
            return { success, users, message };
          }
          return response.data;
        },
        getUsersFollowing: async (userId) => {
          const response = await axios.get(
            `${ORIGIN}/api/users/followings/${userId}`
          );
          if (response.data.success) {
            const { success, message, users } = response.data;
            return { success, message, users };
          }
          return response.data;
        },
        getSuggestedUsers: async () => {
          const response = await axios.get(
            `${ORIGIN}/api/users/users/suggestions`
          );
          if (response.data.success) {
            const { success, message, users } = response.data;
            return { success, message, users };
          }
          return response.data;
        },
        bookmarkAPost: async (postId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const response = await axios.put(
              `${ORIGIN}/api/users/bookmark/${
                get().data.authenticatedUser._id
              }`,
              { postId }
            );
            if (response.data.success) {
              set((state) => {
                state.data.authenticatedUser = response.data.user;
              });
              const { success, message, post } = response.data;
              return { success, message, post };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        unbookmarkAPost: async (postId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;

            const response = await axios.put(
              `${ORIGIN}/api/users/unbookmark/${
                get().data.authenticatedUser._id
              }`,
              { postId }
            );
            if (response.data.success) {
              set((state) => {
                state.data.authenticatedUser = response.data.user;
              });
              const { success, message, post } = response.data;
              return { success, message, post };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        getUsersBookmarkedPosts: async (userId) => {
          const storedToken = Cookies.get("token");

          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const response = await axios.get(
              `${ORIGIN}/api/users/bookmarked-posts/${userId}`
            );
            if (response.data.success) {
              const { success, message, posts } = response.data;
              return { success, message, posts };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
      },
      post: {
        createUpdatePost: async (postInfo) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const userId = get().data.authenticatedUser._id;
            const response = await axios.post(
              `${ORIGIN}/api/posts/create-update-post`,
              { ...postInfo, userId }
            );
            if (response.data.success) {
              const { success, message, post } = response.data;
              return { success, message, post };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        publishPost: async (postId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const response = await axios.put(
              `${ORIGIN}/api/posts/publish/${postId}`
            );
            if (response.data.success) {
              const { success, message, post } = response.data;
              return { success, message, post };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        unPublishPost: async (postId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const response = await axios.put(
              `${ORIGIN}/api/posts/unpublish/${postId}`
            );
            if (response.data.success) {
              const { success, message, post } = response.data;
              return { success, message, post };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        getPostsByUserId: async (userId) => {
          const response = await axios.get(
            `${ORIGIN}/api/posts/user/${userId}`
          );
          if (response.data.success) {
            const { success, message, posts } = response.data;
            return { success, message, posts };
          }
          return response.data;
        },

        deletePost: async (postId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const userId = get().data.authenticatedUser._id;
            const response = await axios.delete(
              `${ORIGIN}/api/posts/${postId}/${userId}`
            );
            if (response.data.success) {
              const { success, message, post } = response.data;
              return { success, message, post };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        getAllPosts: async () => {
          const response = await axios.get(`${ORIGIN}/api/posts`);
          if (response.data.success) {
            const { success, message, posts } = response.data;
            return { success, message, posts };
          }
          return response.data;
        },
        getPostById: async (postId) => {
          const response = await axios.get(`${ORIGIN}/api/posts/${postId}`);
          if (response.data.success) {
            const { success, message, post } = response.data;
            return { success, message, post };
          }
          return response.data;
        },
        likeAPost: async (postId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const userId = get().data.authenticatedUser._id;
            const response = await axios.put(
              `${ORIGIN}/api/posts/like/${postId}`,
              { userId }
            );
            if (response.data.success) {
              const { success, message, post } = response.data;
              return { success, message, post };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        unlikeAPost: async (postId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const userId = get().data.authenticatedUser._id;
            const response = await axios.put(
              `${ORIGIN}/api/posts/unlike/${postId}`,
              { userId }
            );
            if (response.data.success) {
              const { success, message, post } = response.data;
              return { success, message, post };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        getUsersLikedPosts: async (userId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const response = await axios.get(
              `${ORIGIN}/api/posts/liked-posts/${userId}`
            );
            if (response.data.success) {
              const { success, message, posts } = response.data;
              return { success, message, posts };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },

        // dump ==============================

        /*
        createPost: async (postInfo) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const authorId = get().data.authenticatedUser._id;
            const response = await axios.post(`${ORIGIN}/api/posts`, {
              authorId,
              ...postInfo,
            });
            if (response.data.success) {
              const { success, message, post } = response.data;
              return { success, message, post };
            }
            const { success, message } = response.data;
            return { success, message };
          }
          return { success: false, message: "Token not found" };
        },
        updatePost: async (postInfo) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const { postId, ...otherInfo } = postInfo;
            const response = await axios.put(
              `${ORIGIN}/api/posts/${postId}`,
              otherInfo
            );
            if (response.data.success) {
              const { success, message, post } = response.data;
              return { success, message, post };
            }
            const { success, message } = response.data;
            return { success, message };
          }
          return { success: false, message: "Token not found" };
        },
        */
      },
      comment: {
        createComment: async (commentInfo) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const authorId = get().data.authenticatedUser._id;
            const response = await axios.post(`${ORIGIN}/api/comments`, {
              authorId,
              ...commentInfo,
            });
            if (response.data.success) {
              const { success, message, comment } = response.data;
              return { success, message, comment };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        deleteComment: async (commentId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const userId = get().data.authenticatedUser._id;
            const response = await axios.delete(
              `${ORIGIN}/api/comments/${commentId}/${userId}`
            );
            if (response.data.success) {
              const { success, message, comment } = response.data;
              return { success, message, comment };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        updateComment: async (commentInfo) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const userId = get().data.authenticatedUser._id;
            const { commentId, content } = commentInfo;
            const response = await axios.put(
              `${ORIGIN}/api/comments/${commentId}`,
              { userId, content }
            );
            if (response.data.success) {
              const { success, message, comment } = response.data;
              return { success, message, comment };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        likeAComment: async (commentId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const userId = get().data.authenticatedUser._id;
            const response = await axios.put(
              `${ORIGIN}/api/comments/like/${commentId}`,
              { userId }
            );
            if (response.data.success) {
              const { success, message, comment } = response.data;
              return { success, message, comment };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        unlikeAComment: async (commentId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const userId = get().data.authenticatedUser._id;
            const response = await axios.put(
              `${ORIGIN}/api/comments/unlike/${commentId}`,
              { userId }
            );
            if (response.data.success) {
              const { success, message, comment } = response.data;
              return { success, message, comment };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
        getPostComments: async (postId) => {
          const storedToken = Cookies.get("token");
          if (storedToken) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${storedToken}`;
            const response = await axios.get(
              `${ORIGIN}/api/comments/post/${postId}`
            );
            if (response.data.success) {
              const { success, message, comments } = response.data;
              return { success, message, comments };
            }
            return response.data;
          }
          return {
            success: false,
            message: "Token not found",
            errorType: INTERNAL_SERVER_ERROR,
          };
        },
      },
    },
  }))
);
