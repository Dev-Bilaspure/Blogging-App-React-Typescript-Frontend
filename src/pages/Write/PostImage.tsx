import { bannerImages } from "@/constants";
import bannerimage from "../../assets/images/bannerImg.jpg";
import React, { useState } from "react";
import { Button, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { twMerge } from "tailwind-merge";

const buttonStyle = {
  borderRadius: 100,
  paddingLeft: 0,
  paddingRight: 0,
  height: 35,
  width: 35,
  minWidth: 0,
  paddingTop: 0,
  paddingBottom: 0,
};
const PostImage = (props) => {
  const [imageBlob, setImageBlob] = useState<Blob | null>(null);
  const [previewImage, setPreviewImage] = useState("");
  const postImage = "";
  const handleImageChange = (e) => {
    const seletedImage = e.target.files?.[0];
    if (!seletedImage) return;
    setPreviewImage(URL.createObjectURL(seletedImage));
    setImageBlob(seletedImage);
  };

  return (
    <div className={twMerge("mt-5 flex w-full flex-col space-y-5", props.className)}>
      {previewImage && <img src={previewImage} className="w-full rounded-lg" />}
      <div className="flex space-x-5 rounded-full sm:h-[30px] sm:w-[30px]">
        <Button variant="outlined" color="inherit" style={buttonStyle}>
          <label htmlFor="profilePictureInput" className="cursor-pointer">
            <input
              type="file"
              onChange={handleImageChange}
              className="hidden"
              id="profilePictureInput"
              accept=".png, .jpg, .jpeg"
            />
            {!(postImage || previewImage) ? (
              <Tooltip title="Add Image" placement="bottom">
                <AddIcon color="inherit" />
              </Tooltip>
            ) : (
              <Tooltip title="Change Image">
                <CachedOutlinedIcon color="inherit" />
              </Tooltip>
            )}
          </label>
        </Button>
        {(previewImage || postImage) && (
          <Button
            variant="outlined"
            color="inherit"
            style={buttonStyle}
            onClick={() => {
              setPreviewImage("");
              setImageBlob(null);
            }}
          >
            <Tooltip title="Delete Image" placement="bottom-start">
              <ClearOutlinedIcon color="inherit" style={{ fontSize: 27 }} />
            </Tooltip>
          </Button>
        )}
      </div>
    </div>
  );
};

export default PostImage;
