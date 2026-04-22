import "./globals.css";

export const metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce at Scale",
  description:
    "India's most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams with curated programs, live mentorship, and real-time analytics.",
  keywords: [
    "enterprise learning",
    "corporate training",
    "upskilling",
    "IIT",
    "IIM",
    "data science",
    "AI",
    "Accredian",
  ],
  openGraph: {
    title: "Accredian Enterprise",
    description: "Upskill your workforce at scale with Accredian Enterprise.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
