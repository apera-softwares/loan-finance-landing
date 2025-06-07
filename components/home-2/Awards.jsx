import Award from '../../public/images/award-section/awards.svg'
import Image from 'next/image'

const Awards = () => {
  return (
    <section className="mb-[140px] mt-[120px] bg-[#F0FFFF] py-[140px]">
      <div className="container">
        <div className="">
          <div className="text-center">
            <h2 className=" mb-1 text-4xl text-[#75bfb8]">
              <span className="bg-gradient-to-r from-[#213468] to-[#75bfb8] bg-clip-text text-transparent">Awards</span>{' '}
              & Recognition
            </h2>
            <h2 className="mb-12 text-4xl text-[#213468]">For Biz2Credit Funding</h2>
            <Image src={Award} alt="awards" className="inline-block h-auto w-full" width={450} height={250} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards
