import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

const ResumePDF2 = forwardRef((props, ref) => {
  //  const DataProfile = useSelector((state) => state.Profile.DataProfile);
  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );
  return (
    <div>
      <p className="border-2 border-yellow-400 bg-red-700">Hi</p>
      <div className="ms-44 ">
        <p className="text-3xl font-bold">
          {DataPersonalDetails.firstName} {DataPersonalDetails.lastName}
        </p>
        <p className="text-lg">{DataPersonalDetails.headline}</p>
      </div>
    </div>
  );
});

export default ResumePDF2;
