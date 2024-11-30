import React from "react";
import { COLORS } from "@/constants/theme";

const AboutPage = () => {
  const nameProject = "Cv Smart 01";
  const emailProject = "zhtyahya@gmail.com";
  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundColor: COLORS.bg }}
    >
      <div className="max-w-4xl w-full px-6 py-12">
        <h1 className="text-primary text-4xl font-extrabold text-center mb-8">
          About Us
        </h1>
        <p className="text-secondary text-lg leading-relaxed mb-6">
          Welcome to <strong>{nameProject}</strong> – the ultimate solution for
          creating professional CVs with ease. Our mission is to empower job
          seekers and professionals with a simple platform to craft standout CVs
          that showcase their unique skills and experiences.
        </p>

        <h2 className="text-teal text-2xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-black mb-8">
          <li className="mb-2">
            <strong>User-Friendly Interface</strong>: Our platform is intuitive
            and easy to use, making it suitable for everyone.
          </li>
          <li className="mb-2">
            <strong>Customizable Templates</strong>: We offer a variety of
            templates designed for different industries and career levels.
          </li>
          <li className="mb-2">
            <strong>Instant PDF Export</strong>: Generate high-quality PDF files
            with one click, ensuring you’re always ready for new opportunities.
          </li>
          <li>
            <strong>Privacy & Security</strong>: Your data is secure with us. We
            place a high priority on protecting user privacy.
          </li>
        </ul>

        <h2 className="text-teal text-2xl font-bold mb-4">Our Vision</h2>
        <p className="text-black text-lg leading-relaxed mb-8">
          At <strong>{nameProject}</strong>, we believe that a well-crafted CV
          can open doors to new opportunities. Our goal is to make the CV
          creation process seamless, fast, and effective for everyone, from
          fresh graduates to seasoned professionals.
        </p>

        <h2 className="text-teal text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-secondary text-lg">
          We’d love to hear from you! If you have any questions or feedback,
          feel free to reach out to us at <strong>{emailProject}</strong>.
        </p>
      </div>
    </div>
  );
};
export default AboutPage;
