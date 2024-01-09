import type { Metadata } from 'next';
import './globals.css';
import NavBar from './_components/NavBar';

export const metadata: Metadata = {
  title: 'Vue.js - The Progressive JavaScript Framework | Vue.js',
  description: 'Vue.js - The Progressive JavaScript Framework',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
