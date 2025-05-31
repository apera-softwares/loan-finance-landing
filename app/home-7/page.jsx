import FooterV2 from '@/components/footer/FooterV2'
import CoreFeature from '@/components/home-2/CoreFeature'
import Rating from '@/components/home-2/Rating'
import AboutCrypto from '@/components/home-7/AboutCrypto'
import CryptoMarket from '@/components/home-7/CryptoMarket'
import HeroContact from '@/components/home-7/HeroContact'
import ProcessInstallation from '@/components/home-7/ProcessInstallation'
import Services from '@/components/home-7/Services'
import TimeLine from '@/components/home-7/TimeLine'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import Clients from '@/components/shared/Clients'
import ContactForm from '@/components/shared/ContactForm'
import FinancialBlog from '@/components/shared/FinancialBlog'
import MembersCounter from '@/components/shared/MembersCounter'
import PaymentFeatures from '@/components/shared/PaymentFeatures'
import Pricing from '@/components/shared/Pricing'
import TeamMembers from '@/components/shared/TeamMembers'
import { PaymentFeaturesData } from '@/data/data'
export const metadata = {
  title: 'Crypto Currency',
}
const HomePage7 = () => {
  return (
    <>
      <SecondaryNavbar hideTopBar />
      <main>
        <HeroContact />
        <CoreFeature />
        <Pricing />        
        <MembersCounter />
        <Rating />
        {/* <PaymentFeatures
          features={PaymentFeaturesData}
          sectionTag="MORE FEATURES"
          sectionTitle="ABOUT OUR MOST POPULAR PRODUCT"
          className="relative bg-white pb-150 pt-150 dark:bg-dark-300 max-md:overflow-hidden max-md:py-25"
        /> */}
        {/* <AboutCrypto />
        <ProcessInstallation /> */}
        {/* <Services />
        <TeamMembers className="" />
        <TimeLine />
        <CryptoMarket />
        <FinancialBlog className="pb-150 dark:bg-dark-300" />
        <Clients sectionTitle={false} className={'pb-0 pt-0'} /> */}
      </main>
      <FooterV2 />
    </>
  )
}

export default HomePage7
