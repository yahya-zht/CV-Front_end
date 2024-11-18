import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function UploadedImage(props) {
  const { color, style } = props;
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
            {style && (
              <div
                className="h-20 w-full absolute -bottom-0.5"
                style={{
                  background: `linear-gradient(to right, ${color} 50%, ${color} 50%)`,
                  clipPath: "polygon(0 0, 50% 50%, 100% 100%, 0 100%)",
                }}
              ></div>
            )}
          </div>
        </div>
      ) : (
        <div className="mb-32"></div>
      )}
    </div>
  );
}
