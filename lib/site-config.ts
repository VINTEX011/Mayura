export const company = {
  name: "Mayura Corp",
  founded: "2023",
  email: process.env.CONTACT_EMAIL ?? "info@example.com",
  phone: process.env.CONTACT_PHONE ?? "+254700000000",
  addressLines: [
    "Nine Planets Apartments, Suite P4",
    "Kabarnet Gardens, Off Ngong Road",
    "Opposite the Sudan Embassy",
    "P.O. Box 199 - 00515",
    "Nairobi"
  ],
  mission:
    "To inspire excellence by providing comprehensive and innovative training solutions that foster personal and professional growth.",
  overview:
    "Mayura Corp is a dynamic and forward-thinking training company dedicated to empowering individuals and organizations with the knowledge and skills needed to thrive in today’s competitive business landscape.",
  profileIntro:
    "Established in 2023, the company has consistently delivered high-quality professional training programs tailored to meet the evolving needs of its clients.",
  socialLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "X", href: "#" },
    { label: "YouTube", href: "#" }
  ]
} as const;

export const siteUrl = process.env.SITE_URL ?? "https://www.example.com";

export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clientele", label: "Clientele" },
  { href: "/social-responsibility", label: "Social Responsibility" },
  { href: "/contact", label: "Contact" }
] as const;

export const offerings = [
  {
    title: "Customized Training Programs",
    description:
      "Tailored to the unique needs of individuals and organizations, these programs cover a wide range of industries and skill sets."
  },
  {
    title: "Cutting-edge Curriculum",
    description:
      "Curriculum is regularly updated to reflect the latest industry trends, technologies, and best practices."
  },
  {
    title: "Flexible Delivery Formats",
    description:
      "Whether in-person, virtual, or hybrid, delivery is designed to suit diverse learning preferences and logistical realities."
  },
  {
    title: "Industry Experts",
    description:
      "Experienced trainers and industry experts bring practical knowledge and real-world insight to every engagement."
  },
  {
    title: "Certification Programs",
    description:
      "Industry-recognized certification programs validate the skills and competencies gained through training."
  }
] as const;

export const coreValues = [
  "Excellence",
  "Innovation",
  "Integrity",
  "Client-Centric",
  "Collaboration"
] as const;

export const clientSegments = [
  {
    name: "Individuals",
    description:
      "Professionals building practical capabilities, leadership confidence, and career mobility through focused training."
  },
  {
    name: "SMEs",
    description:
      "Growing businesses that need agile upskilling, stronger team performance, and cost-conscious development plans."
  },
  {
    name: "Large corporations",
    description:
      "Enterprises seeking scalable, consistent training programs aligned with governance, performance, and transformation initiatives."
  },
  {
    name: "Parastatals",
    description:
      "Public-sector institutions strengthening service delivery, operational rigor, and leadership capability."
  },
  {
    name: "Top management",
    description:
      "Senior decision-makers who require strategic, high-trust engagements tailored to leadership outcomes and organizational direction."
  }
] as const;

export const deliveryFormats = [
  {
    title: "In-person",
    description:
      "Facilitated workshops and onsite sessions that encourage direct collaboration, immediate feedback, and immersive learning."
  },
  {
    title: "Virtual",
    description:
      "Live remote sessions designed for geographically distributed teams that need flexibility without sacrificing engagement."
  },
  {
    title: "Hybrid",
    description:
      "Blended delivery that combines in-person depth with digital reach for resilient, organization-wide participation."
  }
] as const;
