import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "Full Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone Number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const scriptURL = import.meta.env.VITE_GOOGLE_URL;

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      toast.success("Registered Successfully! 🎉");

      setFormData({ fullName: "", email: "", phoneNumber: "" });
      setErrors({});

      setTimeout(() => {
        navigate("/thanks_page");
      }, 2000);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-10 items-center">
        <img className="w-1/4" src="/glovista_logo.svg" alt="logo" />
      </div>

      <div className="max-w-lg mx-auto p-6 my-6 bg-gray-50 shadow-md text-center">
        <h2 className="text-xl font-bold text-black pb-5">
          Register now to unlock exclusive launch offers!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              id="fullName"
              type="text"
              size="lg"
              label="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
              className="w-full border-black focus:ring-black focus:border-black"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>
          <div>
            <Input
              id="email"
              type="email"
              label="Email"
              size="lg"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="w-full border-black focus:ring-black focus:border-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <Input
              id="phoneNumber"
              type="tel"
              size="lg"
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              required
              className="w-full border-black focus:ring-black focus:border-black"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-black text-white hover:bg-gray-800"
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Home;
