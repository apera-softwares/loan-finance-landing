import FooterV2 from '@/components/footer/FooterV2'
import CoreFeature from '@/components/home-2/CoreFeature'
import Rating from '@/components/home-2/Rating'
import HeroContact from '@/components/home-7/HeroContact'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import MembersCounter from '@/components/shared/MembersCounter'
import Pricing from '@/components/shared/Pricing'
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
