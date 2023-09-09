import React from "react";
import { Image } from "cloudinary-react";

// import classes from "./Logo.module.css";

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

// function IvIcon({ style }) {
//   return (
//     <img
//       src={IvImg}
//       alt="IV Icon Image"
//       style={{
//         ...style, // Apply custom styles passed via props
//       }}
//     />
//   );
// }

// export default IvIcon;
