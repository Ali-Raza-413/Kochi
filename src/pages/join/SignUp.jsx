import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <div>
        <h1 className="text-4xl font-bold text-center mb-3">
          Sign Up to Find Your Coach (It's Free)
        </h1>
        <p className="text-xl text-center mb-5">
          Once you create an account, you can message coaches and book lessons.
        </p>
        <p className="text-xl text-center text-[#004d00] font-bold mb-5">
          Not a Parent or Athlete?
          <Link to="/apply-coach" className="underline">
            Apply to Become a Kochi Coach Instead.
          </Link>
        </p>
        <p className="text-xl text-center">
          Fields with an asterisk (*) are required.
        </p>
      </div>
      <div className="max-w-2xl mx-auto py-10 px-10 md:px-0">
        <form>
          <div className="flex gap-2 flex-col md:flex-row ">
            <div>
              <input
                name="firstName"
                placeholder="Enter First Name"
                className="px-4 py-2 border border-black rounded"
              />
            </div>
            <div>
              <input
                name="lastName"
                placeholder="Enter Last Name"
                className="px-4 py-2 border border-black rounded"
              />
            </div>
          </div>
          <div>
            <input
              name="email"
              placeholder="Enter Email"
              className="px-4 py-2 border border-black rounded mt-5 w-[70%]"
            />
            <p className="text-sm font-bold">
              We'll email you confirmations and receipts for training sessions.
            </p>
          </div>
          <div>
            <input
              name="confirmEmail"
              placeholder="Confirmation Email"
              className="px-4 py-2 border border-black rounded mt-5"
            />
          </div>
          <div>
            <input
              name="phoneNumber"
              placeholder="Enter Phone Number"
              className="px-4 py-2 border border-black rounded mt-5 lg:w-[100%]"
            />
            <p className="text-sm font-bold">
              We'll send you reminders about upcoming training sessions -
              helpful for busy schedules! You can always opt out.
            </p>
          </div>
          <div>
            <input
              name="zipCode"
              placeholder="Enter ZipCode"
              className="px-4 py-2 border border-black rounded mt-5"
            />
          </div>
          <div>
            <select
              name="sport"
              className="px-4 py-2 border border-black rounded mt-5 w-[90%] lg:w-[32%]"
            >
              <option value="">Select Sport</option>
              <option value="basketball">Basketball</option>
              <option value="soccer">Soccer</option>
              <option value="tennis">Tennis</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="px-4 py-2 border border-black rounded mt-5 "
            />
          </div>
          <div>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="px-4 py-2 border border-black rounded mt-5 "
            />
          </div>
          <div className="mt-5">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />I agree to Athletes
              Untapped's
              <Link to="/terms" className="underline ml-1">
                Terms of Service
              </Link>
              .*
            </label>
          </div>
          <div className="mt-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />I agree to Athletes
              Untapped's
              <Link to="/privacy" className="underline ml-1">
                Privacy Policy
              </Link>
              .*
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
