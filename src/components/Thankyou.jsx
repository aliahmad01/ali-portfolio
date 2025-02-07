import React from "react";

const ThankYouComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="/sending-mail.gif"
        alt="Thank You"
        className="max-w-md w-full mx-auto mb-4"
      />
      <p className="text-3xl font-semibold text-gray-800 mb-2">
        Thanks for your response!
      </p>
      <p className="text-xl text-gray-600">I will get back to you ASAP.</p>
    </div>
  );
};

export default ThankYouComponent;
