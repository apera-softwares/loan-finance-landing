import '@/scss/theme.scss'
import { cn } from '@/utils/cn'
import { Inter, Poppins, Sansita } from 'next/font/google'
import PropTypes from 'prop-types'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const sansita = Sansita({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sansita',
})

// export const metadata = {
//   title: {
//     default: 'Lending Square | Business Financing',
//     template: '%s - Lending Square | Business Financing',
//   },
//   description:
//     'Aplio is an exceptional Next js template tailored for SaaS landing websites. Embodying the essence of modern SaaS platforms.',
// }

export const metadata = {
  title: 'Lending Square | Business Financing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          'relative overflow-x-hidden bg-white text-base antialiased dark:bg-dark-300',
          inter.variable,
          sansita.variable,
          poppins.variable,
          // jakarta_sans.variable,
          // playfair.variable,
        )}>
        {/* <ThemeModeProvider> */}
        {/* <ThemeSwitcher /> */}
        <Toaster position="top-center" reverseOrder={false} />
        {children}
        {/* </ThemeModeProvider> */}
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node,
}
