import Footer from "../Shared/Footer/Footer";
import Navbar3 from "../Shared/Navbar/Navbar3";

export const metadata = {
  title: "Toptech - IT Solution Next JS Template",
  description:
    "Toptech - IT Solution Next JS Template is a sleek, responsive, and customizable template for tech businesses and startups. Perfect for showcasing services and projects. Get started today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar3 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
