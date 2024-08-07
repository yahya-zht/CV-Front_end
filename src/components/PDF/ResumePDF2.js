import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const ResumePDF2 = forwardRef((props, ref) => {
  //  const DataProfile = useSelector((state) => state.Profile.DataProfile);
  const DataPersonalDetails = useSelector(
    (state) => state.PersonalDetailsStore.DataPersonalDetails
  );
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-4xl w-full">
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0">
              <div className="rounded-full overflow-hidden w-32 h-32 md:w-48 md:h-48">
                <Image
                  src="/path-to-your-image.jpg"
                  alt="Profile Picture"
                  width={192}
                  height={192}
                  layout="responsive"
                />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h1 className="text-2xl font-bold">Rufus Stewart</h1>
                <p className="text-xl text-gray-600">Digital Marketer</p>
              </div>
            </div>
            <div className="mt-6 md:mt-0 md:ml-12 flex-grow">
              <div className="flex flex-col md:flex-row">
                <div className="flex-grow">
                  <h2 className="text-xl font-bold">About Me</h2>
                  <p className="mt-2 text-gray-600">
                    I have been working in the digital marketing industry for
                    more than nine years. I have many experiences working
                    individually and as a team member. My principle in working
                    is exposure because the core of digital marketing is all
                    about how to increase the exposure of the promoted product.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:ml-12">
                  <h2 className="text-xl font-bold">Contact</h2>
                  <p className="mt-2 text-gray-600">
                    <strong>Phone:</strong> +123-456-7890
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong> hello@reallygreatsite.com
                  </p>
                  <p className="text-gray-600">
                    <strong>Address:</strong> 123 Anywhere St., Any City
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold">Experience</h2>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>
                    <strong>Digital Marketer Intern</strong> at Thynk Unlimited
                    (2012 - 2013)
                    <ul className="mt-1 ml-4 list-disc list-inside">
                      <li>
                        Created the testing plan for Studio Shodwe's social
                        media campaign, leading to the improvement of the ROI by
                        23% within two months after the template application.
                      </li>
                      <li>
                        Assisted the marketing team on the SEO project of the
                        Rimberio Co. website, which has successfully increased
                        the traffic by 15% or 90 new customers per month.
                      </li>
                    </ul>
                  </li>
                  <li className="mt-4">
                    <strong>Digital Marketing Manager</strong> at Liceria & Co.
                    (2013 - March 2022)
                    <ul className="mt-1 ml-4 list-disc list-inside">
                      <li>
                        Designed, implemented, and optimized the new promotion
                        campaign for Salford & Co. that increased sales from the
                        social media platform by 300%.
                      </li>
                      <li>
                        Led SEO project of Wardiere Inc.'s official online store
                        that increased the monthly visitor by 170,000 visitors
                        and the conversion rate up to 45%.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold">Education</h2>
                <p className="mt-2 text-gray-600">
                  Bachelor of Science in Marketing
                  <br />
                  University of Muhammad Patel
                  <br />
                  May 2007 - August 2011 | GPA: 3.90
                </p>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold">Skills</h2>
                <div className="mt-2 text-gray-600">
                  <p>Market Analytics</p>
                  <p>SEO</p>
                  <p>Copywriting</p>
                  <p>Web Programming</p>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold">Languages</h2>
                <div className="mt-2 text-gray-600">
                  <p>English: Fluent</p>
                  <p>Spanish: Intermediate</p>
                  <p>Japanese: Basic</p>
                  <p>Russian: Basic</p>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-bold">References</h2>
                <div className="mt-2 text-gray-600">
                  <p>Olivia Wilson, Liceria & Co. / CEO, 123-456-7890</p>
                  <p>Juliana Silva, Liceria & Co. / CEO, 123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ResumePDF2;
