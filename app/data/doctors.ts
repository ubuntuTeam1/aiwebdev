export type DoctorReview = {
  author: string;
  rating: string;
  comment: string;
};

export type Doctor = {
  id: number;
  name: string;
  fullName: string;
  specialty: string;
  rating: string;
  reviewsCount: number;
  image: string;
  languages: string[];
  specialisation: string[];
  about: string;
  reviewSummary: string;
  reviews: DoctorReview[];
  availableSlots: string[];
};

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    fullName: "Dr. Sarah Mitchell, MD, FACC",
    specialty: "Cardiology",
    rating: "4.9",
    reviewsCount: 127,
    image: "/doctors/sarah.jpg",
    languages: ["English", "Spanish"],
    specialisation: [
      "Preventive Cardiology",
      "Heart Failure Management",
      "Cardiac Imaging",
    ],
    about:
      "Dr. Sarah Mitchell is a board-certified cardiologist with over 15 years of experience in treating complex cardiovascular conditions. She is known for her patient-centered approach and advanced cardiac care.",
    reviewSummary: "4.9",
    reviews: [
      {
        author: "John D.",
        rating: "★★★★★",
        comment: "Excellent doctor. Very caring and professional. Highly recommended!",
      },
      {
        author: "Maria R.",
        rating: "★★★★★",
        comment: "Takes time to explain everything clearly. Great experience.",
      },
    ],
    availableSlots: ["09:00", "10:30", "14:00", "15:30", "16:30"],
  },
  {
    id: 2,
    name: "Dr. James Anderson",
    fullName: "Dr. James Anderson, MD, PhD",
    specialty: "Neurology",
    rating: "4.8",
    reviewsCount: 98,
    image: "/doctors/james.jpg",
    languages: ["English"],
    specialisation: ["Stroke Care", "Headache Medicine", "Neurodiagnostics"],
    about:
      "Dr. James Anderson specializes in neurological disorders with a focus on evidence-based diagnosis and long-term patient care planning.",
    reviewSummary: "4.8",
    reviews: [
      {
        author: "Grace W.",
        rating: "★★★★★",
        comment: "Very attentive and explained my treatment plan in simple terms.",
      },
      {
        author: "Paul T.",
        rating: "★★★★☆",
        comment: "Professional consultation and clear follow-up instructions.",
      },
    ],
    availableSlots: ["08:30", "11:00", "13:30", "15:00"],
  },
  {
    id: 3,
    name: "Dr. Emily Carter",
    fullName: "Dr. Emily Carter, MD, FAAP",
    specialty: "Pediatrics",
    rating: "4.7",
    reviewsCount: 110,
    image: "/doctors/emily.jpg",
    languages: ["English", "French"],
    specialisation: ["Child Wellness", "Pediatric Nutrition", "Adolescent Care"],
    about:
      "Dr. Emily Carter provides compassionate pediatric care and supports families through every stage of child development.",
    reviewSummary: "4.7",
    reviews: [
      {
        author: "Nina K.",
        rating: "★★★★★",
        comment: "Amazing with children and very reassuring for parents.",
      },
      {
        author: "Ahmed L.",
        rating: "★★★★☆",
        comment: "Friendly doctor and easy appointment process.",
      },
    ],
    availableSlots: ["09:30", "10:00", "12:30", "16:00"],
  },
];

export function getDoctorById(id: number) {
  return doctors.find((doctor) => doctor.id === id);
}
