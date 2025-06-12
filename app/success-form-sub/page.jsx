import FooterV2 from '@/components/footer/FooterV2'
import SuccessPage from '@/components/form-steps/Congratulations'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'

const Page = () => {
  return (
    <>
      <SecondaryNavbar hideTopBar color="#101832" />
      <main className="pt-150">
        <SuccessPage />
      </main>
      <FooterV2 />
    </>
  )
}

export default Page
