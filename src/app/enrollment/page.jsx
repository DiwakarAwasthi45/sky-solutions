"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  Mail,
  User,
  MapPin,
  BookOpen,
  Calendar,
  Users,
  MessageSquare,InputField 
} from "lucide-react";


const courses = [
  "Basic Computer",
  "Advanced Computer",
  "MS Office Package",
  "Graphic Design",
  "Web Design",
  "Web Development",
  "Python Programming",
  "Digital Marketing",
  "Computer Hardware & Networking",
  "Video Editing",
  "Accounting Package (Tally)",
];

 function page () {

  return (
<>

<section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 py-14 sm:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

    {/* LEFT CONTENT */}
    <div className="lg:sticky lg:top-24">

      <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-[#1C8BCA] font-semibold text-sm">
        Join Sky Solution
      </span>

      <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-gray-900">
        Course{" "}
        <span className="text-[#1C8BCA]">Enrollment Form</span>
      </h1>

      <p className="mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
        Start your IT journey with practical training, experienced instructors,
        modern computer labs, and industry-focused courses. Fill out the
        enrollment form and our team will contact you shortly.
      </p>

      <div className="mt-10 space-y-5">
        {[
          "Professional IT Training",
          "Practical Hands-on Learning",
          "Experienced Trainers",
          "Certificate After Completion",
          "Flexible Class Schedule",
          "Job & Internship Guidance",
        ].map((item) => (
          <div key={item} className="flex items-center gap-3 text-gray-700">
            <CheckCircle2 className="text-[#1C8BCA] w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">{item}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-white rounded-2xl shadow-md p-5 sm:p-6 border border-gray-100 ">
        <h3 className="font-bold text-lg sm:text-xl mb-5 text-gray-800">
          Why Choose Sky Solution?
        </h3>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-sky-50 rounded-xl p-3 sm:p-4 text-center">
            <h4 className="text-2xl sm:text-3xl font-bold text-[#1C8BCA]">
              1000+
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Students Trained
            </p>
          </div>

          <div className="bg-sky-50 rounded-xl p-3 sm:p-4 text-center">
            <h4 className="text-2xl sm:text-3xl font-bold text-[#1C8BCA]">
              15+
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Professional Courses
            </p>
          </div>

          <div className="bg-sky-50 rounded-xl p-3 sm:p-4 text-center">
            <h4 className="text-2xl sm:text-3xl font-bold text-[#1C8BCA]">
              100%
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Practical Training
            </p>
          </div>

          <div className="bg-sky-50 rounded-xl p-3 sm:p-4 text-center">
            <h4 className="text-2xl sm:text-3xl font-bold text-[#1C8BCA]">
              Job
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Career Support
            </p>
          </div>
        </div>
      </div>

      <Link
        href="/courses"
        className="inline-flex mt-8 text-[#1C8BCA] font-semibold hover:underline text-sm sm:text-base"
      >
        ← Back to Courses
      </Link>
    </div>

    {/* FORM */}
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 sm:p-8 lg:p-10">

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
        Enroll Now
      </h2>

      <p className="text-gray-500 mt-2 mb-6 sm:mb-8 text-sm sm:text-base">
        Fill in your details and we'll contact you shortly.
      </p>

      <form className="space-y-6">

        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Full Name
          </label>

          <div className="flex items-center border border-gray-100  rounded-xl px-3 sm:px-4 py-3 mt-2 focus-within:border-[#1C8BCA]">
            <User className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your full name"
              className="ml-3 w-full outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>

          <div className="flex items-center border border-gray-100  rounded-xl px-3 sm:px-4 py-3 mt-2 focus-within:border-[#1C8BCA]">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="ml-3 w-full outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>

          <div className="flex items-center border border-gray-100  rounded-xl px-3 sm:px-4 py-3 mt-2 focus-within:border-[#1C8BCA]">
            <Phone className="w-5 h-5 text-gray-400" />
            <input
              type="tel"
              placeholder="98XXXXXXXX"
              className="ml-3 w-full outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Gender + DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="text-sm font-medium text-gray-700">
              Gender
            </label>

            <div className="flex items-center border border-gray-100  rounded-xl px-3 sm:px-4 py-3 mt-2">
              <Users className="w-5 h-5 text-gray-400" />

              <select className="ml-3 w-full outline-none bg-transparent text-sm sm:text-base">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Date of Birth
            </label>

            <div className="flex items-center border border-gray-100  rounded-xl px-3 sm:px-4 py-3 mt-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <input
                type="date"
                className="ml-3 w-full outline-none text-sm sm:text-base"
              />
            </div>
          </div>

        </div>

        {/* Address */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Address
          </label>

          <div className="flex border border-gray-100  rounded-xl px-3 sm:px-4 py-3 mt-2">
            <MapPin className="w-5 h-5 text-gray-400 mt-1" />
            <textarea
              rows={3}
              placeholder="Enter your address"
              className="ml-3 w-full outline-none resize-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Course */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Select Course
          </label>

          <div className="flex items-center border border-gray-100  rounded-xl px-3 sm:px-4 py-3 mt-2">
            <BookOpen className="w-5 h-5 text-gray-400" />

            <select className="ml-3 w-full outline-none bg-transparent text-sm sm:text-base">
              <option>Select a Course</option>
              {courses.map((course) => (
                <option key={course}>{course}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Batch */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Preferred Batch
          </label>

          <select className="w-full border border-gray-100 rounded-xl px-3 sm:px-4 py-3 mt-2 outline-none text-sm sm:text-base">
            <option>Select Batch</option>
            <option>Morning (6:00 AM - 9:00 AM)</option>
            <option>Day (10:00 AM - 2:00 PM)</option>
            <option>Evening (3:00 PM - 7:00 PM)</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Message / Previous Experience (Optional)
          </label>

          <div className="flex border border-gray-100  rounded-xl px-3 sm:px-4 py-3 mt-2">
            <MessageSquare className="w-5 h-5 text-gray-400 mt-1" />
            <textarea
              rows={4}
              placeholder="Tell us about yourself..."
              className="ml-3 w-full outline-none resize-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            required
            className="mt-1 accent-[#1C8BCA]"
          />

          <p className="text-xs sm:text-sm text-gray-600 leading-6">
            I confirm that the information provided is correct and I agree
            to the institute's terms and conditions.
          </p>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 sm:py-4 rounded-xl bg-[#1C8BCA] hover:bg-sky-700 text-white font-bold text-base sm:text-lg transition-all duration-300 hover:scale-[1.02]"
        >
          Submit Enrollment
        </button>

      </form>
    </div>

  </div>
</section>
</>
  );
};

export default page;