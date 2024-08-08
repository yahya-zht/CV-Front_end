import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RemoveIcon from "@mui/icons-material/Remove";
import { Rating } from "@mui/material";

const Resume1 = forwardRef((props, ref) => {
  // DataPersonalDetails
  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );
  // Profile
  const formProfile = useSelector((state) => state.Profile.formProfile);
  const DataProfile = useSelector((state) => state.Profile.DataProfile);
  // Language
  const DataListLanguages = useSelector(
    (state) => state.Languages.DataListLanguages
  );
  const DataLanguage = useSelector((state) => state.Languages.DataLanguage);
  // Skill
  const DataSkill = useSelector((state) => state.Skills.DataSkill);
  const DataListSkills = useSelector((state) => state.Skills.DataListSkills);
  // Hobby
  const DataHobby = useSelector((state) => state.Hobbies.DataHobby);
  const DataListHobbies = useSelector((state) => state.Hobbies.DataListHobbies);
  // Qualities
  const formQualities = useSelector((state) => state.Qualities.formQualities);
  const QualitiesData = useSelector((state) => state.Qualities.QualitiesData);
  const QualitiesList = useSelector((state) => state.Qualities.QualitiesList);
  // courses
  const formCourses = useSelector((state) => state.course.formCourse);
  const CourseData = useSelector((state) => state.course.CourseData);
  const CoursesList = useSelector((state) => state.course.CoursesList);
  //Employment
  const DataEmployment = useSelector(
    (state) => state.Employment.DataEmployment
  );
  const DataListEmployment = useSelector(
    (state) => state.Employment.DataListEmployment
  );
  //Education
  const DataEducation = useSelector((state) => state.Education.DataEducation);
  const DataListEducation = useSelector(
    (state) => state.Education.DataListEducation
  );
  // Footer
  const formFooter = useSelector((state) => state.Footer.formFooter);
  const FooterData = useSelector((state) => state.Footer.FooterData);
  // References
  const formReferences = useSelector(
    (state) => state.References.formReferences
  );
  const DataListReferences = useSelector(
    (state) => state.References.DataListReferences
  );
  const DataReferences = useSelector(
    (state) => state.References.DataReferences
  );
  // Certificates
  const formCertificates = useSelector(
    (state) => state.Certificates.formCertificates
  );
  const CertificateData = useSelector(
    (state) => state.Certificates.CertificateData
  );
  const CertificatesList = useSelector(
    (state) => state.Certificates.CertificatesList
  );
  // Extracurricular Activities
  const formExtracurricularActivities = useSelector(
    (state) => state.ExtracurricularActivities.formExtracurricularActivities
  );
  const ExtracurricularActivitiesData = useSelector(
    (state) => state.ExtracurricularActivities.ExtracurricularActivitiesData
  );
  const ExtracurricularActivitiesList = useSelector(
    (state) => state.ExtracurricularActivities.ExtracurricularActivitiesList
  );
  // Achievements
  const formAchievements = useSelector(
    (state) => state.Achievements.formAchievements
  );
  const AchievementsData = useSelector(
    (state) => state.Achievements.AchievementsData
  );
  //Internships
  const formInternships = useSelector(
    (state) => state.Internships.formInternships
  );
  const InternshipsData = useSelector(
    (state) => state.Internships.InternshipsData
  );
  const InternshipsList = useSelector(
    (state) => state.Internships.InternshipsList
  );

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#1E3A8A",
    },
    "& .MuiRating-iconHover": {
      color: "#1E3A8A",
    },
  });

  return (
    <div className="flex flex-row bg-white h-full relative">
      <div className="absolute bg-blue-900 py-6 px-4 h-40 top-16 start-0 right-0 z-0 flex flex-row ">
        <div className={DataPersonalDetails.uploadedImage ? "ms-72 " : "ms-44"}>
          <p className="text-4xl font-bold text-white mb-1 ">
            {DataPersonalDetails.firstName}
          </p>
          <p className="text-4xl font-bold ps-8 text-white mb-1">
            {DataPersonalDetails.lastName}
          </p>
          <p className="text-lg text-white ps-16 mb-1">
            {DataPersonalDetails.headline}
          </p>
        </div>
        <div></div>
      </div>
      <div className="w-2/5 bg-gray-950 ms-10 p-6">
        <div className="flex flex-row  justify-center static z-20 mt-5">
          {DataPersonalDetails.uploadedImage ? (
            <div className="w-36 h-48 ">
              <div className="w-full h-full relative ">
                <Image
                  src={DataPersonalDetails.uploadedImage}
                  alt="Uploaded image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full border-4 border-blue-900"
                />
              </div>
            </div>
          ) : (
            <div className="mb-32"></div>
          )}
        </div>
        {/* formProfile */}
        {formProfile && (
          <div
            className={
              DataPersonalDetails.uploadedImage ? "mt-0 mb-3" : "mt-14 mb-3"
            }
          >
            <p className="text-lg font-light border-b-4 border-blue-900 text-white text-center font-mono">
              Profile
            </p>
            <p className="text-sm mx-2 font-sans text-white whitespace-pre-wrap text-center ">
              {DataProfile.descriptionProfile}
            </p>
          </div>
        )}
        <div
          className={
            formProfile || DataPersonalDetails.uploadedImage ? "mt-0" : "mt-14"
          }
        >
          {/* DataPersonalDetails */}
          {(DataPersonalDetails.phoneNumber ||
            DataPersonalDetails.email ||
            DataPersonalDetails.address ||
            DataPersonalDetails.postCode ||
            DataPersonalDetails.city ||
            DataPersonalDetails.website ||
            DataPersonalDetails.linkedIn) && (
            <div className="mb-4">
              {DataPersonalDetails.phoneNumber.length > 0 && (
                <p className="text-xs flex flex-row items-center mb-1">
                  <span className="bg-blue-700 p-1 rounded-full">
                    <LocalPhoneIcon fontSize="small" sx={{ color: "white" }} />
                  </span>
                  <span className="ms-2 text-white">
                    {DataPersonalDetails.phoneNumber}
                  </span>
                </p>
              )}
              {DataPersonalDetails.email.length > 0 && (
                <p className="text-xs flex flex-row items-center mb-1">
                  <span className="bg-blue-700 p-1 rounded-full">
                    <MarkunreadIcon fontSize="small" sx={{ color: "white" }} />
                  </span>
                  <span className="ms-2 text-white">
                    {DataPersonalDetails.email}
                  </span>
                </p>
              )}
              {DataPersonalDetails.website.length > 0 && (
                <p className="text-xs flex flex-row items-center mb-1">
                  <span className="bg-blue-700 p-1 rounded-full">
                    <LanguageIcon fontSize="small" sx={{ color: "white" }} />
                  </span>
                  <span className="ms-2 text-white">
                    {DataPersonalDetails.website}
                  </span>
                </p>
              )}
              {(DataPersonalDetails.address.length > 0 ||
                DataPersonalDetails.postCode.length > 0 ||
                DataPersonalDetails.city.length > 0) && (
                <p className="text-xs flex flex-row items-center mb-1">
                  <span className="bg-blue-700 p-1 rounded-full">
                    <LocationOnIcon fontSize="small" sx={{ color: "white" }} />
                  </span>
                  <span className="ms-2 text-white">
                    {DataPersonalDetails.address} {DataPersonalDetails.postCode}
                    , {DataPersonalDetails.city}
                  </span>
                </p>
              )}
              {DataPersonalDetails.linkedIn.length > 0 &&
                !DataPersonalDetails.checkedLinkedIn && (
                  <p className="text-xs flex flex-row items-center ">
                    <span className="bg-blue-700 p-1 rounded-full">
                      <LinkedInIcon fontSize="small" sx={{ color: "white" }} />
                    </span>
                    <span className="ms-2 text-white">
                      {DataPersonalDetails.linkedIn}
                    </span>
                  </p>
                )}
            </div>
          )}
          {/* DataListLanguages */}
          {(DataListLanguages.length > 0 || DataLanguage.language) && (
            <div className="mb-2">
              <p className="text-lg font-light border-4 border-blue-900 text-white text-center font-mono rounded-full">
                Language
              </p>
              <div className="mt-1 ms-2">
                {DataListLanguages.length > 0 &&
                  DataListLanguages.map((language, i) => (
                    <div className="mb-1 text-white">
                      <div className="flex flex-row justify-between items-center">
                        <p className="text-sm text-start">
                          <CircleIcon sx={{ color: "white", fontSize: 10 }} />{" "}
                          {language.language}
                        </p>
                        <StyledRating
                          readOnly
                          name="customized-color"
                          value={language.value}
                          precision={1}
                          icon={<CircleIcon fontSize="small" />}
                          emptyIcon={
                            <CircleOutlinedIcon
                              sx={{
                                color: language.value >= 1 ? "#1E3A8A" : "",
                              }}
                              fontSize="small"
                            />
                          }
                        />
                      </div>
                    </div>
                  ))}

                {DataLanguage.language.length > 0 && (
                  <div className="list-disc text-white">
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-sm  text-start">
                        <CircleIcon sx={{ color: "white", fontSize: 10 }} />{" "}
                        {DataLanguage.language}
                      </p>
                      <StyledRating
                        readOnly
                        name="customized-color"
                        value={DataLanguage.value}
                        precision={1}
                        icon={<CircleIcon fontSize="small" />}
                        emptyIcon={
                          <CircleOutlinedIcon
                            sx={{
                              color: DataLanguage.value >= 1 ? "#1E3A8A" : "",
                            }}
                            fontSize="small"
                          />
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* DataListSkills */}
          {(DataListSkills.length > 0 || DataSkill.skill) && (
            <div className="mb-2">
              <p className="text-lg font-light border-4 border-blue-900 text-white text-center font-mono rounded-full">
                Skills
              </p>
              <div className="mt-1 ms-2">
                {DataListSkills.length > 0 &&
                  DataListSkills.map((skill, i) => (
                    <div className="mb-1 text-white">
                      <div className="flex flex-row justify-between items-center">
                        <p className="text-sm text-start">
                          <CircleIcon sx={{ color: "white", fontSize: 10 }} />{" "}
                          {skill.skill}
                        </p>
                        <StyledRating
                          readOnly
                          name="customized-color"
                          value={skill.value}
                          precision={1}
                          icon={<CircleIcon fontSize="small" />}
                          emptyIcon={
                            <CircleOutlinedIcon
                              sx={{
                                color: skill.value >= 1 ? "#1E3A8A" : "",
                              }}
                              fontSize="small"
                            />
                          }
                        />
                      </div>
                    </div>
                  ))}
                {DataSkill.skill.length > 0 && (
                  <div className="list-disc text-white">
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-sm  text-start">
                        <CircleIcon sx={{ color: "white", fontSize: 10 }} />{" "}
                        {DataSkill.skill}
                      </p>
                      <StyledRating
                        readOnly
                        name="customized-color"
                        value={DataSkill.value}
                        precision={1}
                        icon={<CircleIcon fontSize="small" />}
                        emptyIcon={
                          <CircleOutlinedIcon
                            sx={{
                              color: DataSkill.value >= 1 ? "#1E3A8A" : "",
                            }}
                            fontSize="small"
                          />
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* formCourses */}
          {formCourses && (
            <div className="mb-2">
              <p className="text-lg font-light border-4 border-blue-900 text-white text-center font-mono rounded-full">
                Courses
              </p>
              <div className="mt-1 ms-2 text-white">
                {CoursesList.length > 0 &&
                  CoursesList.map((course, i) => (
                    <div key={i} className="mb-1">
                      <div className="">
                        <p className="text-md font-bold">
                          <CircleIcon sx={{ color: "#1E3A8A", fontSize: 10 }} />{" "}
                          {course.course}
                        </p>
                        <p className="text-end">
                          {course.monthCourse} - {course.yearCourse}
                        </p>
                      </div>
                      <p className="text-xs ms-1">{course.descriptionCourse}</p>
                    </div>
                  ))}
                {CourseData.course && (
                  <div className="mb-1">
                    <div className="">
                      <p className="text-md font-bold">
                        <CircleIcon sx={{ color: "#1E3A8A", fontSize: 10 }} />{" "}
                        {CourseData.course}
                      </p>
                      {(CourseData.monthCourse || CourseData.yearCourse) && (
                        <p className="text-end">
                          {CourseData.monthCourse} - {CourseData.yearCourse}
                        </p>
                      )}
                    </div>
                    <p className="text-xs ms-1  whitespace-pre-wrap">
                      {CourseData.descriptionCourse}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* DataListHobbies */}
          {(DataListHobbies.length > 0 || DataHobby.hobby) && (
            <div className="mb-2">
              <p className="text-lg font-light border-4 border-blue-900 text-white text-center font-mono rounded-full">
                Hobbies
              </p>
              <div className="mt-1 ms-2">
                {DataListHobbies.length > 0 &&
                  DataListHobbies.map((hobby, i) => (
                    <div className="mb-1 text-white">
                      <div className="flex flex-row justify-between items-center">
                        <p className="text-sm text-start">
                          <CircleIcon sx={{ color: "white", fontSize: 10 }} />{" "}
                          {hobby.hobby}
                        </p>
                        <StyledRating
                          readOnly
                          name="customized-color"
                          value={hobby.value}
                          precision={1}
                          icon={<CircleIcon fontSize="small" />}
                          emptyIcon={
                            <CircleOutlinedIcon
                              sx={{
                                color: hobby.value >= 1 ? "#1E3A8A" : "",
                              }}
                              fontSize="small"
                            />
                          }
                        />
                      </div>
                    </div>
                  ))}

                {DataHobby.hobby.length > 0 && (
                  <div className="list-disc text-white mb-1">
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-sm  text-start">
                        <CircleIcon sx={{ color: "white", fontSize: 10 }} />{" "}
                        {DataHobby.hobby}
                      </p>
                      <StyledRating
                        readOnly
                        name="customized-color"
                        value={DataHobby.value}
                        precision={1}
                        icon={<CircleIcon fontSize="small" />}
                        emptyIcon={
                          <CircleOutlinedIcon
                            sx={{
                              color: DataHobby.value >= 1 ? "#1E3A8A" : "",
                            }}
                            fontSize="small"
                          />
                        }
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {/* formQualities */}
          {formQualities && (
            <div className="mb-2">
              <p className="text-lg font-light border-4 border-blue-900 text-white text-center font-mono rounded-full">
                Qualities
              </p>
              <div className="mt-1 ms-2">
                {QualitiesList.length > 0 &&
                  QualitiesList.map((quality, i) => (
                    <div className="mb-1 text-white">
                      <div className="flex flex-row justify-between items-center">
                        <p className="text-sm text-start">
                          <CircleIcon sx={{ color: "white", fontSize: 10 }} />{" "}
                          {quality.quality}
                        </p>
                      </div>
                    </div>
                  ))}
                {QualitiesData.quality && (
                  <div className="list-disc text-white">
                    <div className="flex flex-row justify-between items-center">
                      <p className="text-sm  text-start">
                        <CircleIcon sx={{ color: "white", fontSize: 10 }} />{" "}
                        {QualitiesData.quality}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-3/5 bg-slate-100  p-3 mt-52">
        <div className=" flex flex-col justify-between h-full">
          <div>
            {/* DataListEmployment */}
            {(DataListEmployment.length > 0 ||
              DataEmployment.position ||
              DataEmployment.startMonthEmployment ||
              DataEmployment.startYearEmployment ||
              DataEmployment.employer ||
              DataEmployment.cityEmployment ||
              DataEmployment.endMonthEmployment ||
              DataEmployment.endYearEmployment ||
              DataEmployment.descriptionEmployment) && (
              <div className="mt-2">
                <div className="flex ">
                  <p className=" border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center  ">
                    Employment
                  </p>
                </div>
                <div className="mt-1">
                  {DataListEmployment.length > 0 &&
                    DataListEmployment.map((employ, i) => (
                      <div key={i} className="pl-4 mb-2">
                        <p className="m-0">
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-[16px] font-bold">
                              {employ.position}
                            </p>
                            <p className="text-xs text-gray-600">
                              {employ.startMonthEmployment}{" "}
                              {employ.startYearEmployment} -{" "}
                              {employ.endMonthEmployment}{" "}
                              {employ.endYearEmployment}
                            </p>
                          </div>
                          <p className="text-sm font-semibold">
                            {employ.employer}
                            <span>, {employ.cityEmployment}</span>
                          </p>
                          <p className="text-[12px] text-justify whitespace-pre-wrap">
                            {employ.descriptionEmployment}
                          </p>
                        </p>
                      </div>
                    ))}
                  {(DataEmployment.position ||
                    DataEmployment.startMonthEmployment ||
                    DataEmployment.startYearEmployment ||
                    DataEmployment.endMonthEmployment ||
                    DataEmployment.endYearEmployment ||
                    DataEmployment.descriptionEmployment ||
                    DataEmployment.employer ||
                    DataEmployment.cityEmployment) && (
                    <div className=" pl-4 mb-2">
                      <p className="">
                        <div className="flex flex-row justify-between items-center">
                          <p className="text-[16px] font-bold">
                            {DataEmployment.position}
                          </p>
                          <p className="text-xs text-gray-600">
                            {DataEmployment.startMonthEmployment}{" "}
                            {DataEmployment.startYearEmployment} -{" "}
                            {DataEmployment.endMonthEmployment}{" "}
                            {DataEmployment.endYearEmployment}
                          </p>
                        </div>
                        {(DataEmployment.employer ||
                          DataEmployment.cityEmployment) && (
                          <p className="text-sm font-semibold">
                            {DataEmployment.employer}
                            <span>, {DataEmployment.cityEmployment}</span>
                          </p>
                        )}
                        <p className="text-[12px] text-justify whitespace-pre-wrap">
                          {DataEmployment.descriptionEmployment}
                        </p>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* DataListEducation */}
            {(DataListEducation.length > 0 ||
              DataEducation.education ||
              DataEducation.school ||
              DataEducation.city ||
              DataEducation.startYear ||
              DataEducation.endYear ||
              DataEducation.description) && (
              <div className="mt-2">
                <div className="flex ">
                  <p className=" border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center  ">
                    Education
                  </p>
                </div>
                <div className="mt-1">
                  {DataListEducation.length > 0 &&
                    DataListEducation.map((education, i) => (
                      <div key={i} className="pl-4 mb-2">
                        <p className="m-0">
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-[16px] font-bold">
                              {education.education}
                            </p>
                            <p className="text-xs text-gray-600">
                              {education.startMonth} {education.startYear} -{" "}
                              {education.endMonth} {education.endYear}
                            </p>
                          </div>
                          <p className="text-sm font-semibold">
                            {education.school}
                            <span>, {education.city}</span>
                          </p>
                          <p className="text-[12px] text-justify whitespace-pre-wrap">
                            {education.description}
                          </p>
                        </p>
                      </div>
                    ))}
                  {(DataEducation.education ||
                    DataEducation.school ||
                    DataEducation.city ||
                    DataEducation.startYear ||
                    DataEducation.endYear ||
                    DataEducation.description) && (
                    <div className=" pl-4 mb-2">
                      <p className="">
                        <div className="flex flex-row justify-between items-center">
                          <p className="text-[16px] font-bold">
                            {DataEducation.education}
                          </p>
                          <p className="text-xs text-gray-600">
                            {DataEducation.startMonth} {DataEducation.startYear}{" "}
                            - {DataEducation.endMonth} {DataEducation.endYear}
                          </p>
                        </div>
                        {(DataEducation.school || DataEducation.city) && (
                          <p className="text-sm font-semibold">
                            {DataEducation.school}
                            <span>, {DataEducation.city}</span>
                          </p>
                        )}
                        <p className="text-[12px] text-justify whitespace-pre-wrap">
                          {DataEducation.description}
                        </p>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* formCertificates */}
            {formCertificates && (
              <div className="mt-2">
                <div className="flex ">
                  <p className=" border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center  ">
                    Certificates
                  </p>
                </div>
                <div className="mt-1 ms-2">
                  {CertificatesList.length > 0 &&
                    CertificatesList.map((certificate, i) => (
                      <div key={i} className="mb-2">
                        <div className="grid grid-cols-2">
                          <p className="text-md font-bold">
                            {certificate.Certificate}
                          </p>
                          <p>
                            {certificate.monthCertificate} -{" "}
                            {certificate.yearCertificate}
                          </p>
                        </div>
                        <p className="text-xs ms-1">
                          {certificate.descriptionCertificate}
                        </p>
                      </div>
                    ))}
                  {CertificateData && (
                    <div className="mb-2">
                      <div className="grid grid-cols-2">
                        <p className="text-md font-bold">
                          {CertificateData.Certificate}
                        </p>
                        {(CertificateData.monthCertificate ||
                          CertificateData.yearCertificate) && (
                          <p>
                            {CertificateData.monthCertificate} -{" "}
                            {CertificateData.yearCertificate}
                          </p>
                        )}
                      </div>
                      <p className="text-xs ms-1 whitespace-pre-wrap">
                        {CertificateData.descriptionCertificate}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* formInternships */}
            {formInternships && (
              <div className="mt-2">
                <div className="flex ">
                  <p className=" border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center  ">
                    Internships
                  </p>
                </div>
                <div className="mt-1">
                  {InternshipsList.length > 0 &&
                    InternshipsList.map((internship, i) => (
                      <div
                        key={i}
                        className="border-l-4 border-blue-900 pl-4 mb-2"
                      >
                        <p className="m-0">
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-[16px] font-bold">
                              {internship.position}
                            </p>
                            <p className="text-xs text-gray-600">
                              {internship.startMonthInternship}{" "}
                              {internship.startYearInternship} -{" "}
                              {internship.endMonthInternship}{" "}
                              {internship.endYearInternship}
                            </p>
                          </div>
                          {(internship.Internship ||
                            internship.cityInternship) && (
                            <p className="text-sm font-semibold">
                              {internship.Internship}
                              <span>, {internship.cityInternship}</span>
                            </p>
                          )}
                          <p className="text-[12px] text-justify">
                            {internship.descriptionInternship}
                          </p>
                        </p>
                      </div>
                    ))}
                  {(InternshipsData.position ||
                    InternshipsData.startMonthInternship ||
                    InternshipsData.startYearInternship ||
                    InternshipsData.endMonthInternship ||
                    InternshipsData.endYearInternship ||
                    InternshipsData.Internship ||
                    InternshipsData.cityInternship ||
                    InternshipsData.descriptionInternship) && (
                    <div className="border-l-4 border-blue-900 pl-4 mb-2">
                      <p className="">
                        <div className="flex flex-row justify-between items-center">
                          <p className="text-[16px] font-bold">
                            {InternshipsData.position}
                          </p>
                          <p className="text-xs text-gray-600">
                            {InternshipsData.startMonthInternship}{" "}
                            {InternshipsData.startYearInternship} -{" "}
                            {InternshipsData.endMonthInternship}{" "}
                            {InternshipsData.endYearInternship}
                          </p>
                        </div>
                        {(InternshipsData.Internship ||
                          InternshipsData.cityInternship) && (
                          <p className="text-sm font-semibold">
                            {InternshipsData.Internship}
                            <span>, {InternshipsData.cityInternship}</span>
                          </p>
                        )}
                        <p className="text-[12px] text-justify">
                          {InternshipsData.descriptionInternship}
                        </p>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* formExtracurricularActivities */}
            {formExtracurricularActivities && (
              <div className="mt-2">
                <div className="flex ">
                  <p className=" border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-4/5 bg-blue-900 text-white text-center  ">
                    Extracurricular Activities
                  </p>
                </div>
                <div className="mt-1">
                  {ExtracurricularActivitiesList.length > 0 &&
                    ExtracurricularActivitiesList.map((e, i) => (
                      <div
                        key={i}
                        className="border-l-4 border-blue-900 pl-4 mb-1 "
                      >
                        <p className="m-0">
                          <div className="flex flex-row justify-between items-center">
                            <p className="text-[16px] font-bold">
                              {e.position}
                            </p>
                            <p className="text-xs text-gray-600">
                              {e.startMonthExtracurricularActivities}{" "}
                              {e.startYearExtracurricularActivities} -{" "}
                              {e.endMonthExtracurricularActivities}{" "}
                              {e.endYearExtracurricularActivities}
                            </p>
                          </div>
                          {(e.employer || e.cityExtracurricularActivities) && (
                            <p className="text-sm font-semibold">
                              {e.employer}
                              <span>, {e.cityExtracurricularActivities}</span>
                            </p>
                          )}
                          <p className="text-[12px] text-justify  whitespace-pre-wrap">
                            {e.descriptionExtracurricularActivities}
                          </p>
                        </p>
                      </div>
                    ))}
                  {(ExtracurricularActivitiesData.position ||
                    ExtracurricularActivitiesData.startMonthExtracurricularActivities ||
                    ExtracurricularActivitiesData.startYearExtracurricularActivities ||
                    ExtracurricularActivitiesData.endMonthExtracurricularActivities ||
                    ExtracurricularActivitiesData.endYearExtracurricularActivities ||
                    ExtracurricularActivitiesData.descriptionExtracurricularActivities ||
                    ExtracurricularActivitiesData.employer ||
                    ExtracurricularActivitiesData.cityExtracurricularActivities) && (
                    <div className="border-l-4 border-yellow-500 pl-4  mb-1">
                      <p className="">
                        <div className="flex flex-row justify-between items-center">
                          <p className="text-[16px] font-bold">
                            {ExtracurricularActivitiesData.position}
                          </p>
                          <p className="text-xs text-gray-600">
                            {
                              ExtracurricularActivitiesData.startMonthExtracurricularActivities
                            }{" "}
                            {
                              ExtracurricularActivitiesData.startYearExtracurricularActivities
                            }{" "}
                            -{" "}
                            {
                              ExtracurricularActivitiesData.endMonthExtracurricularActivities
                            }{" "}
                            {
                              ExtracurricularActivitiesData.endYearExtracurricularActivities
                            }
                          </p>
                        </div>
                        {(ExtracurricularActivitiesData.employer ||
                          ExtracurricularActivitiesData.cityExtracurricularActivities) && (
                          <p className="text-sm font-semibold">
                            {ExtracurricularActivitiesData.employer}
                            <span>
                              ,{" "}
                              {
                                ExtracurricularActivitiesData.cityExtracurricularActivities
                              }
                            </span>
                          </p>
                        )}
                        <p className="text-[12px] text-justify  whitespace-pre-wrap">
                          {
                            ExtracurricularActivitiesData.descriptionExtracurricularActivities
                          }
                        </p>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* formAchievements */}
            {formAchievements && (
              <div className="mt-2">
                <div className="flex ">
                  <p className=" border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center  ">
                    Achievements
                  </p>
                </div>
                <p className="text-sm ms-4  whitespace-pre-wrap">
                  {AchievementsData.descriptionAchievements}
                </p>
              </div>
            )}
            {/* formReferences */}
            {formReferences && (
              <div className="mt-2">
                <div className="flex ">
                  <p className=" border-4 border-blue-900 rounded-full px-2 text-lg font-mono w-2/4 bg-blue-900 text-white text-center  ">
                    Reference
                  </p>
                </div>
                <div className="mt-1 ms-2">
                  {DataListReferences.length > 0 &&
                    DataListReferences.map((reference, i) => (
                      <div key={i} className="mb-2">
                        <p className="text-md font-bold">{reference.name}</p>
                        {(reference.organization ||
                          reference.cityReferences) && (
                          <p className="text-xs">
                            {reference.organization}, {reference.cityReferences}
                          </p>
                        )}
                        <div className="grid grid-cols-2 gap-2">
                          <p className="text-xs ">
                            <span className="font-semibold">Phone: </span>
                            {reference.phoneNumber}
                          </p>
                          <p className="text-xs">
                            <span className="font-semibold">Email: </span>{" "}
                            {reference.email}
                          </p>
                        </div>
                      </div>
                    ))}

                  {formReferences && (
                    <div className="mb-1">
                      <p className="text-md font-bold">{DataReferences.name}</p>
                      {(DataReferences.organization ||
                        DataReferences.cityReferences) && (
                        <p className="text-xs">
                          {DataReferences.organization},{" "}
                          {DataReferences.cityReferences}
                        </p>
                      )}
                      <div className=" grid grid-cols-2 gap-2">
                        {DataReferences.phoneNumber && (
                          <p className="text-xs col-6">
                            <span className="font-semibold">Phone: </span>
                            {DataReferences.phoneNumber}
                          </p>
                        )}
                        {DataReferences.email && (
                          <p className="text-xs me-5 col-6">
                            <span className="font-semibold">Email: </span>
                            {DataReferences.email}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div>
            {/* formFooter */}
            {formFooter && (
              <div className="mt-2  bottom-0 ">
                <p className="text-sm text-center whitespace-pre-wrap">
                  {FooterData.descriptionFooter}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
export default Resume1;
