import { debug_mode } from "@/debug-controller";
import React, { useEffect, useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { TextareaAutosize } from "@mui/material";
import { twMerge } from "tailwind-merge";
import PostImage from "./PostImage";
import TextEditor from "./TextEditor/TextEditor";
import StatusBar from "./StatusBar";
import io, { Socket } from "socket.io-client";
import { useStore } from "@/store/useStore";
import {
  INTERNAL_SERVER_ERROR,
  RESOURCE_NOT_FOUND,
  UNAUTHORIZED,
} from "@/utils/errorTypes";
import NotFound from "../NotFound";
import UnauthorizedAccess from "../UnauthorizedAccess";
import StatusSnackbar from "@/components/secondary/StatusSnackbar";

// const socket = io("http://localhost:8000");

const Write = (props) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [post, setPost] = useState<any>({});
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [isResourceNotFound, setIsResourceNotFound] = useState<boolean>(false);
  const [isUnauthorized, setIsUnauthorized] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<any>(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const params = useParams();

  const {
    data: { authenticatedUser },
  } = useStore();

  useEffect(() => {
    if (!authenticatedUser) return;
    const socketTemp = io("http://localhost:8000");
    setSocket(socketTemp);
    return () => {
      socket?.close();
    };
  }, []);
  useEffect(() => {
    if (!authenticatedUser) return;
    if (pathname.split("/")[1] === "edit") {
      console.log("get post by id");
      socket?.emit("getPostById", {
        postId: params.postId,
        userId: authenticatedUser._id,
      });
    }
    socket?.on("connect", () => {
      debug_mode && console.log("client connected");
      setIsConnected(true);
    });

    socket?.on("createPostResponse", (data) => {
      if (data.success) {
        setPost(data.post);
        navigate(`/edit/${data.post._id}`);
      } else {
        if (debug_mode) console.log(data);
      }
      setIsSaving(false);
    });

    socket?.on("updatePostResponse", (data) => {
      if (data.success) {
        setPost(data.post);
      } else {
        if (debug_mode) console.log(data);
      }
      setIsSaving(false);
    });

    socket?.on("getPostByIdResponse", (data) => {
      setIsResourceNotFound(false);
      setIsUnauthorized(false);
      if (data.success) {
        if (data.post.isPublished) {
          navigate(`/blog/${data.post._id}`);
          return;
        }
        setPost(data.post);
        setTitle(data.post.title);
        setDescription(data.post.description);
        setImage(data.post.image);
      } else {
        if (debug_mode) console.log(data);
        if (
          data.errorType === RESOURCE_NOT_FOUND ||
          data.errorType === INTERNAL_SERVER_ERROR
        ) {
          setIsResourceNotFound(true);
        }
        if (data.errorType === UNAUTHORIZED) {
          setIsUnauthorized(true);
        }
      }
      setIsSaving(false);
    });
    socket?.on("disconnect", () => {
      debug_mode && console.log("client disconnected");
      setIsConnected(false);
    });
  }, [socket]);

  const onChangeSocketOperation = ({ image, title, description }) => {
    if (!authenticatedUser) return;
    setIsSaving(true);
    if (pathname.split("/")[1] === "write") {
      socket?.emit("createPost", {
        title,
        description,
        image,
        authorId: authenticatedUser._id,
      });
    } else if (pathname.split("/")[1] === "edit") {
      socket?.emit("updatePost", {
        title,
        description,
        image,
        authorId: authenticatedUser._id,
        postId: post._id,
      });
    }
  };

  const handleImageChange = (newImage: string) => {
    onChangeSocketOperation({ image: newImage, title, description });
  };

  const handleTitleChange = (newTitle: string) => {
    onChangeSocketOperation({ image, title: newTitle, description });
  };

  const handleDescriptionChange = (newDescription: string) => {
    onChangeSocketOperation({ image, title, description: newDescription });
  };

  return !authenticatedUser ? (
    <Navigate to="/login" />
  ) : pathname.split("/")[1] === "edit" && isResourceNotFound ? (
    <NotFound />
  ) : pathname.split("/")[1] === "edit" && isUnauthorized ? (
    <UnauthorizedAccess />
  ) : (
    <div>
      <div
        className={twMerge(
          "mb-20 flex justify-center pt-10 sm:px-5 sm:pt-5",
          props.className
        )}
      >
        {/* <button
          onClick={() => {
            socket?.emit("test", "hello from client");
            console.log(socket?.id);
            // socket.close();
          }}
        >
          clickme
        </button> */}
        <div className="w-1/2 lg:w-3/4 md:w-5/6 xs:w-full">
          <StatusBar
            postId={post._id}
            title={title}
            isSaving={isSaving}
            isPublishing={isPublishing}
            setIsPublishing={setIsPublishing}
            description={description}
            isConnected={isConnected}
          />
          <TextareaAutosize
            className="mt-2 w-full resize-none bg-white py-3 font-merriWeather text-[40px] outline-none sm:text-[28px]"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
              handleTitleChange(e.target.value);
            }}
            readOnly={!isConnected}
            value={title}
          />
          <PostImage
            setImage={setImage}
            image={image}
            handleImageChange={handleImageChange}
          />
          <div className="mt-10">
            <TextEditor
              description={description}
              setDescription={setDescription}
              handleDescriptionChange={handleDescriptionChange}
              isConnected={isConnected}
            />
          </div>
        </div>
      </div>
      <StatusSnackbar isConnected={isConnected} />
    </div>
  );
};

export default Write;
