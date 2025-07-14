import './globals.css';
import { ReactNode } from 'react';
import Footer from '../components/Footer';


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}
        <Footer />
      </body>
    </html>
  );
}
