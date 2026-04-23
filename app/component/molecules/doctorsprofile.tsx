'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getDoctorById } from "@/app/data/doctors";

type DoctorProfileProps = {
  doctorId: number;
};

export default function DoctorProfile({ doctorId }: DoctorProfileProps) {
  const router = useRouter();
  const [selectedMonth, setSelectedMonth] = useState<number>(3); // April (0-indexed)
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [selectedDay, setSelectedDay] = useState<number>(25);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const doctor = getDoctorById(doctorId);

  if (!doctor) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white border rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold">Doctor profile not found</h2>
          <p className="text-sm text-gray-600 mt-2">
            The selected doctor could not be loaded. Please go back and try again.
          </p>
        </div>
      </div>
    );
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const baseSlots = [
    ...doctor.availableSlots,
    "08:00",
    "09:30",
    "11:30",
    "13:00",
    "17:00",
    "18:30",
  ];

  const availableSlotsForSelectedDay = baseSlots.filter((_, index) => {
    const keepSlot = (selectedDay + index) % 2 === 0;
    return keepSlot;
  });

  const formattedSelectedDate = `${monthNames[selectedMonth]} ${selectedDay}, ${selectedYear}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">

      {/* LEFT SIDE */}
      <div className="md:col-span-2 space-y-6">

        {/* Doctor Info */}
        <div className="bg-white border rounded-lg p-4 flex gap-4">
          <div className="relative w-32 h-32">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="rounded-md object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="font-semibold text-lg">
              {doctor.fullName}
            </h2>
            <p className="text-sm text-gray-500">{doctor.specialty}</p>

            <p className="text-yellow-500 text-sm mt-1">
              ★★★★★ {doctor.rating} ({doctor.reviewsCount} reviews)
            </p>

            <div className="border rounded-md p-2 mt-3 text-sm">
              <strong>Languages:</strong> {doctor.languages.join(", ")}
            </div>

            <div className="border rounded-md p-2 mt-2 text-sm">
              <strong>Specialisation:</strong> {doctor.specialisation.join(", ")}
            </div>
          </div>
        </div>

        {/* About */}
        <div className="bg-white border rounded-lg p-4">
          <h3 className="font-semibold mb-2">About {doctor.name}</h3>
          <p className="text-sm text-gray-600">
            {doctor.about}
          </p>
        </div>

        {/* Reviews */}
        <div className="bg-white border rounded-lg p-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Patient Reviews</h3>
            <p className="text-lg font-semibold">{doctor.reviewSummary} ⭐</p>
          </div>

          <div className="mt-4 space-y-4 text-sm text-gray-600">
            {doctor.reviews.map((review) => (
              <div key={review.author}>
                <p className="text-yellow-500">{review.rating}</p>
                <p>“{review.comment}”</p>
                <p className="text-xs mt-1">- {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white border rounded-lg p-4 h-fit">
        <h3 className="font-semibold mb-4">Schedule Appointment</h3>
        <div className="mb-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              setSelectedTimeSlot("");
              setSelectedDay(1);
              if (selectedMonth === 0) {
                setSelectedMonth(11);
                setSelectedYear((prev) => prev - 1);
              } else {
                setSelectedMonth((prev) => prev - 1);
              }
            }}
            className="px-2 py-1 border rounded text-sm hover:bg-blue-50"
          >
            ←
          </button>
          <p className="text-sm font-semibold">
            {monthNames[selectedMonth]} {selectedYear}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedTimeSlot("");
              setSelectedDay(1);
              if (selectedMonth === 11) {
                setSelectedMonth(0);
                setSelectedYear((prev) => prev + 1);
              } else {
                setSelectedMonth((prev) => prev + 1);
              }
            }}
            className="px-2 py-1 border rounded text-sm hover:bg-blue-50"
          >
            →
          </button>
        </div>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-1 text-xs text-center mb-4">
          {["Su","Mo","Tu","We","Th","Fr","Sa"].map(day => (
            <span key={day} className="font-semibold">{day}</span>
          ))}
          {Array.from({ length: 31 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setSelectedDay(i + 1);
                setSelectedTimeSlot("");
              }}
              className={`p-1 rounded ${
                selectedDay === i + 1
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-50"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Time Slots */}
        <h4 className="text-sm font-semibold mb-2">Available Time Slots</h4>

        <div className="grid grid-cols-2 gap-2 text-sm">
          {availableSlotsForSelectedDay.map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => setSelectedTimeSlot(time)}
              className={`border rounded p-2 transition ${
                selectedTimeSlot === time
                  ? "bg-blue-500 text-white border-blue-500"
                  : "hover:bg-blue-500 hover:text-white"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
        {availableSlotsForSelectedDay.length === 0 && (
          <p className="text-xs text-gray-500 mt-2">
            No available time slots for this date.
          </p>
        )}

        <button
          type="button"
          disabled={!selectedTimeSlot}
          onClick={() =>
            router.push(
              `/doctors/${doctor.id}/book?date=${encodeURIComponent(
                formattedSelectedDate
              )}&time=${encodeURIComponent(selectedTimeSlot)}`
            )
          }
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          Continue to Next Step
        </button>
      </div>
    </div>
  );
}