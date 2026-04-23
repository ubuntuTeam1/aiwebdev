import { notFound } from "next/navigation";
import Header from "@/app/component/organisms/header";
import Footer from "@/app/component/organisms/footer";
import AppointmentDetailsForm from "@/app/component/molecules/appointment-details-form";
import { getDoctorById } from "@/app/data/doctors";

type BookAppointmentPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ date?: string; time?: string }>;
};

export default async function BookAppointmentPage({
  params,
  searchParams,
}: BookAppointmentPageProps) {
  const { id } = await params;
  const { date, time } = await searchParams;
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
      <AppointmentDetailsForm
        doctor={doctor}
        selectedDate={date ?? "April 25, 2026"}
        selectedTime={time ?? doctor.availableSlots[0]}
      />
      <Footer />
    </div>
  );
}
