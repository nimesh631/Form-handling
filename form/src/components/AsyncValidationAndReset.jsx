import React from "react";
import { useForm } from "react-hook-form";

export default function AsyncValidation() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

 // Async username check

 // checkUsernameAvailable simulates a real API call. You need to replace /api/check-username with your actual endpoint.
  const checkUsernameAvailable = async (username) => {
    try {
      const res = await fetch(`/api/check-username?username=${username}`);
      const data = await res.json();
      return data.available || "Username is already taken";
    } catch (error) {
      return "Failed to validate username";
    }
  };

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    // simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset(); // ✅ reset form after successful submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Username Field */}
      <div>
        <label>Username</label>
        <input
          {...register("username", {
            required: "Username is required",
            validate: checkUsernameAvailable,
          })}
        />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Sign Up"}
      </button>
    </form>
  );
}
