import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Comp/Navbar";
import RegisterModal from "./Comp/Modals/RegisterModal";
import LoginModal from "./Comp/Modals/LoginModal";
import { ToasterProvider } from "./providers/ToasterProvider";
import EventCard from "./Comp/EventCard";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yalla",
  description: "Yalla App",
};

const volunteerOpportunities = [
  {
    imageUrl: "",
    title:"Help in School Construction",
    description:"Join us to build an educational future",
    location:"Ashkelon, Israel",
  },
  {
    imageUrl: "",
    title: "Reforestation Campaign",
    description:"Contribute to the environment by planting trees.",
    location:"Afula, Israel",
  },
  {
    imageUrl:"",
    title: "Food and Supplies Distribution",
    description:"Help distribute food and supplies to needy communities.",
    location: "Tel Aviv, Israel",
  },
  {
    imageUrl:"",
    title: "Psychosocial Support for Conflict-Affected Individuals",
    description: "Provide emotional support to people impacted by difficult situations.",
    location: "Haifa, Israel",
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {volunteerOpportunities.map((opportunity, index) => (
            <EventCard key={index} {...opportunity}/>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
