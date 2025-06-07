import Image from 'next/image'

const PitchSection = () => {
  return (
    <section className="my-[140px]">
      <div className="container">
        <div className="relative w-full overflow-hidden rounded-3xl bg-[#5BA49E] p-14 py-40 text-center md:py-14">
          {/* Top-right image */}
          <div className="absolute -right-10 -top-10 z-0">
            <Image src="/images/icons/lending-logo.svg" alt="Top Right Logo" width={180} height={180} className="" />
          </div>

          {/* Bottom-left image */}
          <div className="absolute -bottom-10 -left-10 z-0">
            <Image src="/images/icons/lending-logo.svg" alt="Bottom Left Logo" width={180} height={180} className="" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="mb-4 text-white">Ready To Grow Your Business?</h2>
            <h4 className="mb-1 font-semibold text-white">We connect businesses to funding.</h4>
            <p className="text-white">So you can spend less time worrying about working capital and more time taking</p>
            <p className="mb-6 text-white">on the world.</p>
            <div className="mx-auto inline-flex cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-[99px] bg-white px-7 py-3.5 text-center shadow-[0px_0px_0px_3px_rgba(117,191,184,0.15)] md:w-56">
              <button className="flex items-center justify-start gap-2 font-['Inter'] text-base font-medium text-[#75BFB8]">
                Start Application <Image src="/images/icons/send-cyan.svg" alt="Send Icon" width={13} height={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PitchSection
