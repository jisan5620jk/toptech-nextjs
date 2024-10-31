import "./globals.css";

export const metadata = {
  title: 'Toptech - IT Solution Next JS Template',
  description:
    'Toptech - IT Solution React JS Template is a sleek, responsive, and customizable template for tech businesses and startups. Perfect for showcasing services and projects. Get started today!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
