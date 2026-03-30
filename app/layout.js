import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Senior Care Blog — Expert Guides & Resources',
  description: 'In-depth blog articles on specialized senior care — 24-hour home care, end-of-life care, in-facility care, post-hospital care, and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
