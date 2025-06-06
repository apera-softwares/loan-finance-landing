// import CounterAnimation from '@/utils/CounterAnimation'
// import Link from 'next/link'

const MembersCounter = () => {
  return (
    <section>
      <div className="container relative">
        <div className="flex h-full w-full flex-col gap-5 bg-[#fff] md:flex-row md:justify-between">
          <div className="rounded-2xl border border-[#DFDFDF] bg-[#F0FFF7] p-10 shadow-box md:w-[46%]">
            <h3 className="mb-2 text-3xl text-center text-[#213468]">Helping Small Businesses</h3>
            <h3 className="mb-6 text-3xl text-center text-[#213468]">Grow Every Day</h3>
            <h1 className="mb-6 text-center text-[#FA8331]">+200,000</h1>
            <p className="mb-6 text-xl text-center">Small Businesses Funded</p>

           
          </div>

          {/* Dashed line only on md+ screens */}
          {/* <div className="mx-5 hidden border-l border-dashed border-black bg-transparent md:flex md:w-px"></div> */}

          <div className="rounded-2xl border border-[#DFDFDF] bg-[#FFF4F4] p-10 shadow-box md:w-[46%]">
            <h3 className="mb-2 text-3xl text-center text-[#213468]">Billions in Funding to</h3>
            <h3 className="mb-6 text-3xl text-center text-[#213468]">Business Owners</h3>
            <h1 className="mb-6 text-center text-[#FA8331]">+$8B</h1>
            <p className="mb-6 text-xl text-center">in Small Business Financings Provided since 2007</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MembersCounter
