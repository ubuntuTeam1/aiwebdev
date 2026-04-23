import { notFound } from "next/navigation";
import Header from "@/app/component/organisms/header";
import Footer from "@/app/component/organisms/footer";
import AppointmentPaymentForm from "@/app/component/molecules/appointment-payment-form";
import { getDoctorById } from "@/app/data/doctors";

type PaymentPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    date?: string;
    time?: string;
    fullName?: string;
    dateOfBirth?: string;
    email?: string;
    phone?: string;
    appointmentFor?: string;
    visitType?: string;
    notes?: string;
  }>;
};

export default async function PaymentPage({ params, searchParams }: PaymentPageProps) {
  const { id } = await params;
  const {
    date,
    time,
    fullName,
    dateOfBirth,
    email,
    phone,
    appointmentFor,
    visitType,
    notes,
  } =
    await searchParams;
  const doctorId = Number(id);

  if (!Number.isInteger(doctorId) || doctorId <= 0) {
    notFound();
  }

  const doctor = getDoctorById(doctorId);
  if (!doctor) {
    notFound();
  }

  return (
    <div>
      <Header />
      <AppointmentPaymentForm
        doctor={doctor}
        selectedDate={date ?? "April 25, 2026"}
        selectedTime={time ?? doctor.availableSlots[0]}
        patientFullName={fullName ?? "N/A"}
        patientDateOfBirth={dateOfBirth ?? "N/A"}
        patientEmail={email ?? "N/A"}
        patientPhone={phone ?? "N/A"}
        appointmentFor={appointmentFor ?? "myself"}
        visitType={visitType ?? "consultation"}
        notes={notes ?? "No additional notes"}
      />
      <Footer />
    </div>
  );
}
