'use client';

import Image from "next/image";

export default function DoctorProfile() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">

      {/* LEFT SIDE */}
      <div className="md:col-span-2 space-y-6">

        {/* Doctor Info */}
        <div className="bg-white border rounded-lg p-4 flex gap-4">
          <div className="relative w-32 h-32">
            <Image
              src="/doctors/doc1.jpg"
              alt="Doctor"
              fill
              className="rounded-md object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="font-semibold text-lg">
              Dr. Sarah Mitchell, MD, FACC
            </h2>
            <p className="text-sm text-gray-500">Cardiology</p>

            <p className="text-yellow-500 text-sm mt-1">
              ★★★★★ 4.9 (527 reviews)
            </p>

            <div className="border rounded-md p-2 mt-3 text-sm">
              <strong>Languages:</strong> English, Spanish
            </div>

            <div className="border rounded-md p-2 mt-2 text-sm">
              <strong>Specialisation:</strong> Preventive Cardiology, Heart Failure Management, Cardiac Imaging
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold mb-2">About Dr. Mitchell</h3>
          <p className="text-sm text-gray-600">
            Dr. Sarah Mitchell is a board-certified cardiologist with over 15 years
            of experience in treating complex cardiovascular conditions. She is known
            for her patient-centered approach and advanced cardiac care.
          </p>
        </div>

        {/* Reviews */}
        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Patient Reviews</h3>
            <p className="text-lg font-semibold">4.9 ⭐</p>
          </div>

          <div className="mt-4 space-y-4 text-sm text-gray-600">
            <div>
              <p className="text-yellow-500">★★★★★</p>
              <p>
                “Excellent doctor. Very caring and professional. Highly recommended!”
              </p>
              <p className="text-xs mt-1">- John D.</p>
            </div>

            <div>
              <p className="text-yellow-500">★★★★★</p>
              <p>
                “Takes time to explain everything clearly. Great experience.”
              </p>
              <p className="text-xs mt-1">- Maria R.</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white border rounded-lg p-4 h-fit">
        <h3 className="font-semibold mb-4">Schedule Appointment</h3>

        {/* Fake Calendar */}
        <div className="grid grid-cols-7 gap-1 text-xs text-center mb-4">
          {["Su","Mo","Tu","We","Th","Fr","Sa"].map(day => (
            <span key={day} className="font-semibold">{day}</span>
          ))}
          {Array.from({ length: 31 }).map((_, i) => (
            <span
              key={i}
              className={`p-1 rounded ${
                i === 8 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {i + 1}
            </span>
          ))}
        </div>

        {/* Time Slots */}
        <h4 className="text-sm font-semibold mb-2">Available Time Slots</h4>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {["09:00", "10:30", "14:00", "15:30", "16:30"].map((time) => (
            <button
              key={time}
              className="border rounded p-2 hover:bg-blue-500 hover:text-white"
            >
              {time}
            </button>
          ))}
        </div>

        <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Continue to Next Step
        </button>
      </div>
    </div>
  );
}