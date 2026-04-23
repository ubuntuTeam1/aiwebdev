'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { getCurrentUser } from "@/app/(auth)/auth-storage";
import type { Doctor } from "@/app/data/doctors";

type AppointmentDetailsFormProps = {
  doctor: Doctor;
  selectedDate: string;
  selectedTime: string;
};

export default function AppointmentDetailsForm({
  doctor,
  selectedDate,
  selectedTime,
}: AppointmentDetailsFormProps) {
  const router = useRouter();
  const currentUser = useMemo(() => getCurrentUser(), []);
  const [fullName, setFullName] = useState(currentUser?.fullName ?? "");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState(currentUser?.email ?? "");
  const [phone, setPhone] = useState("");
  const [appointmentFor, setAppointmentFor] = useState<"myself" | "someone-else">(
    "myself"
  );
  const [useDifferentPhone, setUseDifferentPhone] = useState(false);
  const [reasonForVisit, setReasonForVisit] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [errors, setErrors] = useState<{
    fullName?: string;
    dateOfBirth?: string;
    email?: string;
    phone?: string;
    reasonForVisit?: string;
  }>({});

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="border rounded-md bg-white">
        <div className="flex items-start justify-between border-b px-6 py-4">
          <Link
            href={`/doctors/${doctor.id}`}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            &larr; Back to Doctor Profile
          </Link>
          <div className="text-right">
            <p className="text-xs text-slate-500">Selected Appointment</p>
            <p className="text-sm font-semibold">
              {selectedDate} at {selectedTime}
            </p>
          </div>
        </div>

        <div className="px-6 py-4 border-b flex items-center gap-4">
          <div className="relative h-12 w-12">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <p className="font-semibold">{doctor.name}</p>
            <p className="text-sm text-slate-500">{doctor.specialty}</p>
          </div>
        </div>

        <div className="px-6 py-4">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-7 w-7 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
              ✓
            </div>
            <div className="h-1 w-16 bg-blue-500 rounded" />
            <div className="h-7 w-7 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
              ✓
            </div>
            <div className="h-1 w-16 bg-slate-200 rounded" />
            <div className="h-7 w-7 rounded-full bg-slate-200 text-slate-500 text-xs flex items-center justify-center">
              3
            </div>
            <div className="h-1 w-16 bg-slate-200 rounded" />
            <div className="h-7 w-7 rounded-full bg-slate-200 text-slate-500 text-xs flex items-center justify-center">
              4
            </div>
          </div>

          <h2 className="font-semibold text-lg mb-3">Who is this appointment for?</h2>

          <div className="grid grid-cols-2 gap-3 mb-5">
            <button
              type="button"
              onClick={() => setAppointmentFor("myself")}
              className={`border rounded-md py-2 text-sm font-medium ${
                appointmentFor === "myself"
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-300"
              }`}
            >
              Myself
            </button>
            <button
              type="button"
              onClick={() => setAppointmentFor("someone-else")}
              className={`border rounded-md py-2 text-sm font-medium ${
                appointmentFor === "someone-else"
                  ? "border-blue-500 bg-blue-50 text-blue-700"
                  : "border-slate-300"
              }`}
            >
              Someone Else
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm bg-white text-slate-700"
              />
              {errors.fullName && (
                <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(event) => setDateOfBirth(event.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm bg-white text-slate-700"
              />
              {errors.dateOfBirth && (
                <p className="text-xs text-red-600 mt-1">{errors.dateOfBirth}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm bg-white text-slate-700"
              />
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Primary Phone Number
              </label>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Enter phone number"
                className="w-full border rounded-md px-3 py-2 text-sm bg-white text-slate-700"
              />
              {errors.phone && (
                <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
              )}
            </div>

            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={useDifferentPhone}
                onChange={(event) => setUseDifferentPhone(event.target.checked)}
              />
              Use a different phone number for this appointment
            </label>

            <div>
              <label className="block text-sm font-medium mb-1">Reason for Visit</label>
              <select
                value={reasonForVisit}
                onChange={(event) => setReasonForVisit(event.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm bg-white"
              >
                <option value="">Select a reason</option>
                <option value="consultation">Consultation</option>
                <option value="follow-up">Follow-up</option>
                <option value="routine-checkup">Routine check-up</option>
                <option value="new-symptoms">New symptoms</option>
              </select>
              {errors.reasonForVisit && (
                <p className="text-xs text-red-600 mt-1">{errors.reasonForVisit}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Additional Notes</label>
              <textarea
                value={additionalNotes}
                onChange={(event) => setAdditionalNotes(event.target.value)}
                placeholder="Add any additional information about your visit"
                className="w-full border rounded-md px-3 py-2 text-sm min-h-24"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-2">
            <Link
              href={`/doctors/${doctor.id}`}
              className="border border-slate-300 rounded-md px-4 py-2 text-sm"
            >
              Cancel
            </Link>
            <button
              type="button"
              onClick={() => {
                const nextErrors: {
                  fullName?: string;
                  dateOfBirth?: string;
                  email?: string;
                  phone?: string;
                  reasonForVisit?: string;
                } = {};

                if (fullName.trim().length < 2) {
                  nextErrors.fullName = "Please enter a valid full name.";
                }

                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
                  nextErrors.email = "Please enter a valid email address.";
                }

                if (!dateOfBirth) {
                  nextErrors.dateOfBirth = "Please select your date of birth.";
                }

                const digitsOnlyPhone = phone.replace(/\D/g, "");
                if (digitsOnlyPhone.length < 10) {
                  nextErrors.phone =
                    "Please enter a valid primary phone number (at least 10 digits).";
                }

                if (!reasonForVisit) {
                  nextErrors.reasonForVisit = "Please select a reason for visit.";
                }

                setErrors(nextErrors);
                if (Object.keys(nextErrors).length > 0) {
                  return;
                }

                const nextUrl = `/doctors/${doctor.id}/book/payment?${new URLSearchParams({
                  date: selectedDate,
                  time: selectedTime,
                  fullName: fullName.trim(),
                  dateOfBirth,
                  email: email.trim(),
                  phone: phone.trim(),
                  appointmentFor,
                  visitType: reasonForVisit,
                  notes: additionalNotes || "No additional notes",
                }).toString()}`;
                router.push(nextUrl);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 text-sm"
            >
              Continue to Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
