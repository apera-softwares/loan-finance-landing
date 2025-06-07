// import CounterAnimation from '@/utils/CounterAnimation'
// import Link from 'next/link'

import Image from 'next/image'

const MembersCounter = () => {
  return (
    <section>
      <div className="container relative">
        <div className="relative flex h-full w-full flex-col gap-5 bg-[#fff] md:flex-row md:items-center md:justify-between">
          <div className="rounded-2xl border border-[#DFDFDF] bg-[#F0FFF7] p-10 shadow-box md:w-[46%]">
            <h3 className="mb-2 text-center text-3xl text-[#213468]">Helping Small Businesses</h3>
            <h3 className="mb-6 text-center text-3xl text-[#213468]">Grow Every Day</h3>
            <h1 className="mb-6 text-center text-[#FA8331]">+200,000</h1>
            <p className="mb-6 text-center text-xl">Small Businesses Funded</p>
          </div>

          {/* Dashed vertical line */}
          <div className="hidden items-center justify-center md:flex">
            <div className="h-36 w-px border-l border-dashed border-[#213468]"></div>
          </div>

          <div className="rounded-2xl border border-[#DFDFDF] bg-[#FFF4F4] p-10 shadow-box md:w-[46%]">
            <h3 className="mb-2 text-center text-3xl text-[#213468]">Billions in Funding to</h3>
            <h3 className="mb-6 text-center text-3xl text-[#213468]">Business Owners</h3>
            <h1 className="mb-6 text-center text-[#FA8331]">+$8B</h1>
            <p className="mb-6 text-center text-xl">in Small Business Financings Provided since 2007</p>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="flex w-full max-w-md flex-col items-center gap-4 px-4 md:flex-row md:gap-6 md:px-0">
            {/* Apply Online Button */}
            <div className="inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-[99px] bg-gradient-to-br from-blue-950 to-emerald-300 px-7 py-3.5 text-center shadow-[0px_0px_0px_3px_rgba(117,191,184,0.15)] md:w-56">
              <button className="flex w-full items-center justify-center gap-2 font-['Inter'] text-base font-medium text-white">
                Apply Online
                <Image src="/images/icons/send-white.svg" alt="Send" width={13} height={13} className="text-white" />
              </button>
            </div>

            {/* Call Button */}
            <div className="inline-flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-[99px] border border-blue-950 px-7 py-3.5 md:w-56">
              <button className="flex w-full items-center justify-center gap-2 font-['Inter'] text-base font-medium text-black">
                <Image src="/images/icons/call.svg" alt="Call" width={13} height={13} /> 800-220-3795
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembersCounter
