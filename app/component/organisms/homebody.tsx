'use client';
import Link from "next/link";
import Image from 'next/image';


const patients = [
  {
    id: 1,
    name: "Michael Thompson",
    rating: "⭐⭐",
    image: "/patients/patient1.jpg",
    testimonial:
      "Outstanding service! The booking process was seamless and the medical specialist provided excellent care.",
  },
  {
    id: 2,
    name: "Samantha Lee",
    rating: "⭐",
    image: "/patients/patient2.jpg",
    testimonial:
      "Very professional staff. I felt comfortable and well-informed throughout my visit.",
  },
  {
    id: 3,
    name: "David Wilson",
    rating: "⭐⭐⭐",
    image: "/patients/patient3.jpg",
    testimonial:
      "Quick response and excellent follow-up. Highly recommended for anyone looking for quality care.",
  },
];

const departments = [
  { id: 1, name: "Cardiology", icon: "❤️" },
  { id: 2, name: "Neurology", icon: "🧠" },
  { id: 3, name: "Pediatrics", icon: "👶" },
  { id: 4, name: "Orthopedics", icon: "🦴" },
  { id: 5, name: "Dermatology", icon: "🧴" },
  { id: 6, name: "Ophthalmology", icon: "👁️" },
];

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiology",
    rating: "4.9 (127 reviews)",
    image: "/doctors/sarah.jpg",
  },
  {
    id: 2,
    name: "Dr. James Anderson",
    specialty: "Neurology",
    rating: "4.8 (98 reviews)",
    image: "/doctors/james.jpg",
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    specialty: "Pediatrics",
    rating: "4.7 (110 reviews)",
    image: "/doctors/emily.jpg",
  },
];


export default function HomeBody() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-[400px]">
        <Image
          src="/hospital.jpg" // put image in public folder
          alt="Hospital"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to Highland Medical Center
          </h1>
          <p className="mt-2 text-sm md:text-base">
            Excellence in Healthcare, Committed to Your Well-being
          </p>
        </div>
      </section>

      {/* INTRO TEXT */}
      <section className="max-w-5xl mx-auto text-center py-10 px-4">
        <p className="text-gray-600">
          Welcome to Highland Medical Center, your premier destination for specialized healthcare consultation.
          Our facility brings together exceptional physicians across all major medical departments, offering
          expert diagnosis and personalized treatment planning in one convenient location.
        </p>
      </section>

      {/* DEPARTMENTS */}
      <section className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-center font-semibold text-lg mb-6">
        Our Departments
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {departments.map((dept) => (
          <div
            key={dept.id}
            className="border rounded-md p-4 flex flex-col items-center hover:shadow-md transition"
          >
            <span className="text-blue-500 text-2xl">
              {dept.icon}
            </span>
            <p className="text-sm mt-2 text-center">
              {dept.name}
            </p>
          </div>
        ))}
      </div>
    </section>

      {/* DOCTORS SECTION (TARGET) */}
      <section id="doctors" className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-center font-semibold text-lg mb-6">
        Our Doctors
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="border rounded-md p-4 text-center hover:shadow-md transition"
          >
            {/* Doctor Image */}
            <div className="w-20 h-20 mx-auto relative mb-3">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="rounded-full object-cover"
              />
            </div>

            {/* Doctor Info */}
            <h3 className="font-semibold text-sm">{doctor.name}</h3>
            <p className="text-xs text-gray-500">{doctor.specialty}</p>
            <p className="text-xs text-yellow-500">
              ★ {doctor.rating}
            </p>

            <Link href={`/doctors/${doctor.id}`}>
            <button className="mt-3 w-full bg-blue-500 text-white text-sm py-2 rounded hover:bg-blue-600">
              View Profile
            </button>
            </Link>
            
          </div>
        ))}
      </div>
    </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-center font-semibold text-lg mb-6">
        Patient Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <div key={patient.id} className="border rounded-md p-4 flex flex-col">
            <div className="flex items-center mb-3">
              <img
                src={patient.image}
                alt={patient.name}
                className="w-12 h-12 rounded-full mr-3 object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{patient.name}</p>
                <p className="text-xs text-yellow-500">⭐ {patient.rating}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{patient.testimonial}</p>
          </div>
        ))}
      </div>
    </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white px-6 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold">Highland Medical Center</h3>
            <p className="text-sm text-gray-400 mt-2">
              Excellence in Healthcare, Committed to Your Well-being
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <p className="text-sm text-gray-400 mt-2">+1 (555) 123-4567</p>
            <p className="text-sm text-gray-400">info@highlandmed.com</p>
            <p className="text-sm text-gray-400">
              123 Medical Center Dr, Highland, CA
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          © 2025 Highland Medical Center. All rights reserved.
        </p>
      </footer>
    </div>
  );
}