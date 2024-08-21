import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { useSelector } from "react-redux";
export default function Courses(props) {
  const formCourses = useSelector((state) => state.course.formCourse);
  const CourseData = useSelector((state) => state.course.CourseData);
  const CoursesList = useSelector((state) => state.course.CoursesList);
  const Titlecourse = useSelector((state) => state.course.Title);

  return (
    <div className={props.styleContainer}>
      {formCourses && (
        <div className="my-1">
          <div className={props.StyleTitleContainer}>
            <p className={props.StyleTitle}>
              {props.IconTitle && (
                <CircleIcon sx={{ color: props.IconColor }} />
              )}
              {Titlecourse.length > 0 ? Titlecourse : `Courses`}
            </p>
          </div>
          <div className="mt-1 mx-2">
            {CoursesList.length > 0 &&
              CoursesList.map((course, i) => (
                <div key={i} className={props.styleContainerList}>
                  <div className={props.styleList}>
                    <p className={props.StyleTitleList}>
                      <p className="text-md font-bold">
                        {props.Icon && (
                          <CircleIcon
                            sx={{ color: props.IconColor, fontSize: 10 }}
                          />
                        )}{" "}
                        {course.course}
                      </p>
                    </p>
                    {(course.monthCourse || course.yearCourse) && (
                      <p className={props.styleDate}>
                        {course.monthCourse} - {course.yearCourse}
                      </p>
                    )}
                  </div>
                  <p className={props.StyleDescription}>
                    {course.descriptionCourse}
                  </p>
                </div>
              ))}
            {CourseData.course && (
              <div className={props.styleContainerList}>
                <div className={props.styleList}>
                  <p className={props.StyleTitleList}>
                    {props.Icon && (
                      <CircleIcon
                        sx={{ color: props.IconColor, fontSize: 10 }}
                      />
                    )}{" "}
                    {CourseData.course}
                  </p>
                  {(CourseData.monthCourse || CourseData.yearCourse) && (
                    <p className={props.styleDate}>
                      {CourseData.monthCourse} - {CourseData.yearCourse}
                    </p>
                  )}
                </div>
                <p className={props.StyleDescription}>
                  {CourseData.descriptionCourse}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
