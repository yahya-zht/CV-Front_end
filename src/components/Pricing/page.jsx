"use client";

import React from "react";
import { COLORS } from "@/constants/theme";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "Free",
      features: [
        "Unlimited CV Templates",
        "Advanced Customization",
        // "Basic Customization",
        "Download in PDF",
        "Email Support",
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-secondary text-white hover:bg-primary",
    },
    // {
    //   name: "Premium Plan",
    //   price: "$9.99/month",
    //   features: [
    //     "Unlimited CV Templates",
    //     "Advanced Customization",
    //     "Priority Support",
    //     "Access to All Features",
    //   ],
    //   buttonText: "Upgrade Now",
    //   buttonStyle: "bg-primary text-white hover:bg-teal",
    // },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* <div className="max-w-5xl w-full px-6 py-12"> */}
      <div className="max-w-5xl w-full px-4 sm:px-6 py-8 sm:py-12">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-5 sm:mb-8">
           Our Pricing Plans
        </h1>
        

        {/* Description */}
        <p className="text-base sm:text-lg text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your needs. Whether you're just getting
          started or need advanced features, we've got you covered!
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 justify-items-center">
          {plans.map((plan, index) => (
            <div
              key={index} className="
                w-full
                max-w-md
                bg-white
                shadow-lg
                rounded-xl
                p-6
                sm:p-8
                flex
                flex-col
                items-center
              "
            >
              {/* Plan Name */}
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{plan.name}</h2>

              {/* Price */}
              <p className="text-3xl sm:text-4xl font-extrabold mb-5 sm:mb-6">
                {plan.price}
              </p>

              {/* Features */}
              <ul className="w-full text-left mb-6 sm:mb-8 space-y-3">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm sm:text-base"
                  >
                    <span className="mr-3 text-green-600 font-bold">
                      ✓
                    </span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Button */}
              <button
                className={`
                  w-full
                  sm:w-auto
                  px-8
                  py-3
                  rounded-md
                  text-base
                  sm:text-lg
                  font-semibold
                  transition-colors
                  ${plan.buttonStyle}
                `}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
