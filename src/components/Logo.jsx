import React from "react";
import { Image } from "cloudinary-react";

// import classes from "./Logo.module.css";

function ImageComponent({ style }) {
  const cloudName = "dcgh3ljwk"; // put into a key
  const publicId = "IVDirect_oed1qg"; // Example: "folderName/IVLogo"
  return (
    <Image
      cloudName={cloudName}
      publicId={publicId}
      crop="scale"
      style={{
        ...style, // Apply custom styles passed via props
      }}
      alt="IV Direct Image"
    />
  );
}

export default ImageComponent;

/* <div className={classes["image-container"]}>
<img
  className={classes.logoimage}
  src={myImage}
  alt="IV Direct Image"
/>
</div> */
