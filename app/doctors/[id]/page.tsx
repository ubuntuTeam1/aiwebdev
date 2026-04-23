import DoctorProfile from "@/app/component/molecules/doctorsprofile";
import Footer from "@/app/component/organisms/footer";
import Header from "@/app/component/organisms/header";
import { notFound } from "next/navigation";

type DoctorPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { id } = await params;
  const doctorId = Number(id);

  if (!Number.isInteger(doctorId) || doctorId <= 0) {
    notFound();
  }

  return (
    <div>
      <Header />
      <DoctorProfile doctorId={doctorId} />
      <Footer />
    </div>
  );
}