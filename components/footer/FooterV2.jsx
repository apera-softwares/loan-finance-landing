import { FooterData } from '@/data/footer'
import Image from 'next/image'
import Link from 'next/link'

const FooterV2 = () => {
  return (
    <footer className="relative overflow-hidden bg-white bg-[url(/images/background/footer-bg.png)] bg-cover bg-center bg-no-repeat pb-10 pt-20 dark:bg-dark-300">
      <div className="container relative z-10 text-center">
        {/* Logo Centered */}
        <div className="mb-10">
          <Image src={FooterData.logo} alt="logo" className="mx-auto" width={400} height={250} />
        </div>

        {/* Navigation Links Row */}
        <div className="mb-4">
          <ul className="flex flex-wrap justify-center gap-4 text-base text-white">
            <li>
              <Link href="/privacy" className="font-Poppins text-white">
                Privacy Policy
              </Link>
            </li>
            <span>|</span>
            <li>
              <Link href="/terms" className="font-Poppins text-white">
                Terms & Conditions
              </Link>
            </li>
            <span>|</span>
            <li>
              <Link href="/legal" className="font-Poppins text-white">
                Legal
              </Link>
            </li>
            <span>|</span>
            <li>
              <Link href="/important-info" className="font-Poppins text-white">
                Important Information
              </Link>
            </li>
          </ul>
        </div>

        {/* Underline */}
        <div className="my-8">
          <div className="mx-auto h-[2.5px] w-3/4 bg-white"></div>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="mb-8 text-2xl font-medium text-white">Social Media Links</h3>
          <ul className="flex items-center justify-center gap-4">
            {FooterData.socialLinks.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="mx-1 transition-all hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Image
                    src={`/images/icons/${item.name.toLowerCase()}.svg`}
                    alt={`${item.name} icon`}
                    width={25}
                    height={25}
                    className="dark:invert"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FooterV2
