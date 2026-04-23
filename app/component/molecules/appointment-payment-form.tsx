'use client';

import Link from "next/link";
import { useState } from "react";
import type { Doctor } from "@/app/data/doctors";

type AppointmentPaymentFormProps = {
  doctor: Doctor;
  selectedDate: string;
  selectedTime: string;
  patientFullName: string;
  patientDateOfBirth: string;
  patientEmail: string;
  patientPhone: string;
  appointmentFor: string;
  visitType: string;
  notes: string;
};

export default function AppointmentPaymentForm({
  doctor,
  selectedDate,
  selectedTime,
  patientFullName,
  patientDateOfBirth,
  patientEmail,
  patientPhone,
  appointmentFor,
  visitType,
  notes,
}: AppointmentPaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState<"counter" | "paypal">("paypal");
  const [agreed, setAgreed] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="border rounded-md bg-white">
        <div className="px-6 py-4 border-b">
          <Link
            href={`/doctors/${doctor.id}/book?date=${encodeURIComponent(
              selectedDate
            )}&time=${encodeURIComponent(selectedTime)}`}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            &larr; Back to Doctor Profile
          </Link>
        </div>

        <div className="px-6 py-5">
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-7 w-7 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
              ✓
            </div>
            <div className="h-1 w-16 bg-blue-500 rounded" />
            <div className="h-7 w-7 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
              ✓
            </div>
            <div className="h-1 w-16 bg-blue-500 rounded" />
            <div className="h-7 w-7 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center">
              ✓
            </div>
            <div className="h-1 w-16 bg-slate-200 rounded" />
            <div className="h-7 w-7 rounded-full bg-slate-200 text-slate-500 text-xs flex items-center justify-center">
              4
            </div>
          </div>

          <div className="space-y-4">
            <section className="rounded-md bg-slate-100 p-4">
              <h3 className="font-semibold mb-2">Appointment Details</h3>
              <div className="grid grid-cols-2 gap-x-4 text-sm">
                <p className="text-slate-600">Date &amp; Time:</p>
                <p className="text-right">{selectedDate} at {selectedTime}</p>
                <p className="text-slate-600">Doctor:</p>
                <p className="text-right">{doctor.name}</p>
                <p className="text-slate-600">Specialty:</p>
                <p className="text-right">{doctor.specialty}</p>
                <p className="text-slate-600">Visit Type:</p>
                <p className="text-right capitalize">{visitType.replace("-", " ")}</p>
                <p className="text-slate-600">Appointment For:</p>
                <p className="text-right capitalize">{appointmentFor.replace("-", " ")}</p>
              </div>
            </section>

            <section className="rounded-md bg-slate-100 p-4">
              <h3 className="font-semibold mb-2">Patient Information</h3>
              <div className="grid grid-cols-2 gap-x-4 text-sm">
                <p className="text-slate-600">Name:</p>
                <p className="text-right">{patientFullName}</p>
                <p className="text-slate-600">Date of Birth:</p>
                <p className="text-right">{patientDateOfBirth}</p>
                <p className="text-slate-600">Email:</p>
                <p className="text-right">{patientEmail}</p>
                <p className="text-slate-600">Phone:</p>
                <p className="text-right">{patientPhone}</p>
              </div>
            </section>

            <section className="rounded-md bg-slate-100 p-4">
              <h3 className="font-semibold mb-1">Additional Notes</h3>
              <p className="text-sm">{notes}</p>
            </section>

            <section className="rounded-md bg-slate-100 p-4">
              <h3 className="font-semibold mb-2">Payment Details</h3>
              <div className="grid grid-cols-2 gap-x-4 text-sm">
                <p className="text-slate-600">Consultation Fee</p>
                <p className="text-right">$150.00</p>
                <p className="font-semibold">Total Amount Due</p>
                <p className="text-right font-semibold">$150.00</p>
              </div>
            </section>

            <section>
              <h3 className="font-semibold mb-2">Select Payment Method</h3>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("counter")}
                  className={`w-full border rounded-md px-4 py-3 text-left text-sm ${
                    paymentMethod === "counter" ? "border-blue-500 bg-blue-50" : ""
                  }`}
                >
                  $ Pay Cash at Counter
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("paypal")}
                  className={`w-full border rounded-md px-4 py-3 text-left text-sm ${
                    paymentMethod === "paypal" ? "border-blue-500 bg-blue-50" : ""
                  }`}
                >
                  PayPal
                </button>
              </div>
            </section>

            <label className="inline-flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(event) => setAgreed(event.target.checked)}
                className="mt-1"
              />
              I agree to the payment terms and cancellation policy. I understand that
              I can cancel or reschedule up to 24 hours before the appointment.
            </label>

            <div className="flex items-end justify-between">
              <Link
                href={`/doctors/${doctor.id}/book?date=${encodeURIComponent(
                  selectedDate
                )}&time=${encodeURIComponent(selectedTime)}`}
                className="border border-slate-800 rounded-md px-4 py-2 text-sm"
              >
                Edit Details
              </Link>
              <div className="text-right text-sm">
                <p className="text-slate-600">Total Amount</p>
                <p className="font-semibold">$150.00</p>
              </div>
            </div>

            <button
              type="button"
              disabled={!agreed}
              onClick={() => setBookingSuccess(true)}
              className="w-full rounded-md bg-amber-100 py-3 text-center text-lg font-semibold text-slate-500 disabled:opacity-70"
            >
              Pay with PayPal
            </button>

            {bookingSuccess && (
              <p className="rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                Patient is successfully booked.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
