import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vue.js - The Progressive JavaScript Framework | Vue.js',
  description: 'Vue.js - The Progressive JavaScript Framework',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
