import "@/app/_styles/globals.css";
import {Josefin_Sans} from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});


export const metadata = {
  // title:"The book-ease",
  title:{
    template: "%s The Book Ease",
    default:"Welcome / The Book Ease"
  },
  description: "Luxurious cabin hotel located in heart of Italian Dolomites surrounded by dark forests"
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className="font-josefin antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative">
        
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
          <ReservationProvider>{children}</ReservationProvider>

          </main>
        </div>
      </body>
    </html>
  );
}
