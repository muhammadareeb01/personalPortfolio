import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Muhammad areeb - Software Developer",
  description:
    "Hi, I'm Muhammad Areeb, a Frontend Developer specializing in React.js and Next.js. As a recent Computer Systems Engineering graduate, I create innovative, high-performance web applications. My expertise spans frontend technologies like HTML, CSS, Tailwind, and modern JavaScript frameworks, with experience from freelance work and internships at tech startups. I'm passionate about transforming ideas into seamless digital experiences that solve real-world problems. I am available for any kind of job opportunity that suits my skills and interests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>

    </html>
  );
}
