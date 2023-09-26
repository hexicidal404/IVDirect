import React from "react";
import { Image } from "cloudinary-react";

function IvIcon({ style }) {
  const cloudName = "dcgh3ljwk"; // put into a key
  const publicId = "IVLogo_jw5mks"; // Example: "folderName/IVLogo"

  let width = 150; // default width

  // if (window.innerWidth <= 480) {
  //   width = 200;
  // } else if (window.innerWidth <= 768) {
  //   width = 400;
  // }

  return (
    <Image
      cloudName={cloudName}
      publicId={publicId}
      width={width}
      crop="scale"
      style={style}
      alt="IV Icon Image"
    />
  );
}

export default IvIcon;
