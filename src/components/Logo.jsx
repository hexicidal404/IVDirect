import React from "react";
import { Image } from "cloudinary-react";

function ImageComponent({ style }) {
  const cloudName = "dcgh3ljwk"; // put into a key
  const publicId = "IVDirect_oed1qg"; // Example: "folderName/IVLogo"
  return (
    <Image
      cloudName={cloudName}
      publicId={publicId}
      crop="scale"
      style={style}
      alt="IV Direct Image"
    />
  );
}

export default ImageComponent;
