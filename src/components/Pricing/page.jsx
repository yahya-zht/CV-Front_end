"use client";

import React from "react";

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
    <div className="bg-[#eeeeee] min-h-screen flex flex-col items-center">
      <div className="max-w-5xl w-full px-6 py-12">
        <h1 className="text-primary text-4xl font-extrabold text-center mb-8">
          Our Pricing Plans
        </h1>
        <p className="text-secondary text-lg text-center mb-12">
          Choose the plan that fits your needs. Whether you're just getting
          started or need advanced features, we've got you covered!
        </p>
        <div className="grid md:grid-cols-1 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center"
            >
              <h2 className="text-teal text-3xl font-bold mb-4">{plan.name}</h2>
              <p className="text-black text-4xl font-extrabold mb-4">
                {plan.price}
              </p>
              <ul className="text-secondary list-disc list-inside mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-md text-lg font-semibold ${plan.buttonStyle}`}
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
