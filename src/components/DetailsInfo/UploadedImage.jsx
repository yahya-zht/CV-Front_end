import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function UploadedImage(props) {
  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );
  return (
    <div className={props.styleContainer}>
      {DataPersonalDetails.uploadedImage ? (
        <div className={props.sizeImg ? props.sizeImg : "w-36 h-48"}>
          <div className="w-full h-full relative ">
            <Image
              src={DataPersonalDetails.uploadedImage}
              alt="Uploaded image"
              layout="fill"
              objectFit="cover"
              className={props.styleImage}
              style={{ borderColor: props.BgColor }}
            />
          </div>
        </div>
      ) : (
        <div className="mb-32"></div>
      )}
    </div>
  );
}
