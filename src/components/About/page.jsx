import React from "react";
import { COLORS } from "@/constants/theme";

const AboutPage = () => {
  const nameProject = "CV Smart Dot Online";
  const emailProject = "contact@cvsmart.online";

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundColor: COLORS.bg }}
    >
      <div className="max-w-4xl w-full px-4 sm:px-6 py-8 sm:py-12">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8">
          About Us
        </h1>

        {/* Introduction */}
        <p className="text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
          Welcome to <strong>{nameProject}</strong> – the ultimate solution for
          creating professional CVs with ease. Our mission is to empower job
          seekers and professionals with a simple platform to craft standout
          CVs that showcase their unique skills and experiences.
        </p>

        {/* Why Choose Us */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Why Choose Us?
          </h2>

          <ul className="space-y-4 text-sm sm:text-base">
            <li className="flex items-start">
              <span className="mr-3 mt-1 font-bold text-green-600">
                ✓
              </span>

              <span>
                <strong>User-Friendly Interface</strong>: Our platform is
                intuitive and easy to use, making it suitable for everyone.
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-3 mt-1 font-bold text-green-600">
                ✓
              </span>

              <span>
                <strong>Customizable Templates</strong>: We offer a variety of
                templates designed for different industries and career levels.
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-3 mt-1 font-bold text-green-600">
                ✓
              </span>

              <span>
                <strong>Instant PDF Export</strong>: Generate high-quality PDF
                files with one click, ensuring you’re always ready for new
                opportunities.
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-3 mt-1 font-bold text-green-600">
                ✓
              </span>

              <span>
                <strong>Privacy & Security</strong>: Your data is secure with
                us. We place a high priority on protecting user privacy.
                <span className="block mt-2 text-xs sm:text-sm italic text-gray-600 border-l-2 border-green-600 pl-3">
                  Currently, no personal data is stored anywhere. Personal data
                  is collected and stored in the local browser you used to
                  visit the site.
                </span>
              </span>
            </li>
          </ul>
        </section>

        {/* Our Vision */}
        <section className="mb-8 sm:mb-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Our Vision
          </h2>

          <p className="text-base sm:text-lg leading-relaxed">
            At <strong>{nameProject}</strong>, we believe that a well-crafted
            CV can open doors to new opportunities. Our goal is to make the CV
            creation process seamless, fast, and effective for everyone, from
            fresh graduates to seasoned professionals.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Get in Touch
          </h2>

          <p className="text-base sm:text-lg leading-relaxed">
            We’d love to hear from you! If you have any questions or feedback,
            feel free to reach out to us at{" "}
            <a
              href={`mailto:${emailProject}`}
              className="font-semibold hover:underline inline-block"
            >
              {emailProject}
            </a>
            .
          </p>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;