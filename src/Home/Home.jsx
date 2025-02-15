import { Button, Input, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

function Home() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = import.meta.env.VITE_GOOGLE_URL;
    const formData = { fullName, email, phoneNumber };

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      await response.json();
      console.log("Success:");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <img className=" w-1/4" src="/glovista_logo.svg" alt="logo" />
      </div>

      <div className="max-w-md mx-auto p-6 bg-white shadow-md">
        <h2 className="text-2xl font-bold  text-black">Launching Offers</h2>
        <p className="p-2 pt-0 text-xs">
          Register now to unlock exclusive launch offers!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              id="fullName"
              type="text"
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="w-full border-black focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <Input
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-black focus:ring-black focus:border-black"
            />
          </div>
          <div>
            <Input
              id="phoneNumber"
              type="tel"
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="w-full border-black focus:ring-black focus:border-black"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            Register
          </Button>
        </form>
      </div>
      {/* <Typography className="text-7xl font-semibold text-center text-black">
        Under Construction
      </Typography> */}
    </div>
  );
}

export default Home;
