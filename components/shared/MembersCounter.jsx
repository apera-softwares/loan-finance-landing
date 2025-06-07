// import CounterAnimation from '@/utils/CounterAnimation'
// import Link from 'next/link'

import Image from 'next/image'

const MembersCounter = () => {
  return (
    <section>
      <div className="container relative">
        <div className="flex h-full w-full flex-col gap-5 bg-[#fff] md:flex-row md:justify-between">
          <div className="rounded-2xl border border-[#DFDFDF] bg-[#F0FFF7] p-10 shadow-box md:w-[46%]">
            <h3 className="mb-2 text-center text-3xl text-[#213468]">Helping Small Businesses</h3>
            <h3 className="mb-6 text-center text-3xl text-[#213468]">Grow Every Day</h3>
            <h1 className="mb-6 text-center text-[#FA8331]">+200,000</h1>
            <p className="mb-6 text-center text-xl">Small Businesses Funded</p>
          </div>

          {/* Dashed line only on md+ screens */}
          {/* <div className="mx-5 hidden border-l border-dashed border-black bg-transparent md:flex md:w-px"></div> */}

          <div className="rounded-2xl border border-[#DFDFDF] bg-[#FFF4F4] p-10 shadow-box md:w-[46%]">
            <h3 className="mb-2 text-center text-3xl text-[#213468]">Billions in Funding to</h3>
            <h3 className="mb-6 text-center text-3xl text-[#213468]">Business Owners</h3>
            <h1 className="mb-6 text-center text-[#FA8331]">+$8B</h1>
            <p className="mb-6 text-center text-xl">in Small Business Financings Provided since 2007</p>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <div className="flex gap-6">
            <div className=" mx-auto inline-flex md:w-56 cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-[99px] bg-gradient-to-br from-blue-950 to-emerald-300 px-7 py-3.5 text-center shadow-[0px_0px_0px_3px_rgba(117,191,184,0.15)]">
              <button className="flex items-center justify-start gap-2 font-['Inter'] text-base font-medium text-white">
                Apply Online{' '}
                <Image
                  src="/images/icons/send-white.svg"
                  alt="Background"
                  width={13}
                  height={13}
                  className="text-white"
                />
              </button>
            </div>
            <div className=" mx-auto inline-flex md:w-56 cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-[99px] border border-blue-950">
              <button className="flex items-center justify-start gap-2 font-['Inter'] text-base font-medium text-black">
                <Image src="/images/icons/call.svg" alt="Background" width={13} height={13} className="text-white" />{' '}
                800-220-3795
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembersCounter
