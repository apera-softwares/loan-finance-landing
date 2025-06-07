'use client'
import { cn } from '@/utils/cn'
import PricingCards from './PricingCards'
import Image from 'next/image'

const Pricing = ({ className = 'pt-150', showPricingText = true, largeTitle = false, pricingDescription = false }) => {
  return (
    <section className={cn('relative -z-0 overflow-hidden bg-white pb-150 dark:bg-dark-300 max-md:mb-25', className)}>
      <div className="container">
        <Image
          src="/images/icons/line-break.svg"
          alt="border"
          width={1000}
          height={5}
          className="mb-16 w-full text-white"
        />

        <div className={`${largeTitle ? 'max-w-[900px]' : 'max-w-[475px]'} mx-auto mb-12 text-center`}>
          <div className={cn(showPricingText ? '' : 'hidden')}>
            <h2 className="text-[#213468]">
              We Know{' '}
              <span className="bg-gradient-to-r from-[#213468] to-[#75bfb8] bg-clip-text text-transparent">
                Business
              </span>{' '}
              Funding
            </h2>
            <span className="my-2 text-[#FA8331]">Your business is unique.</span>
            <span className="mb-3">We get small business and have several financing options.</span>
            {largeTitle ? (
              <spam>Your business is unique.</spam>
            ) : (
              <></>
              // <h2>We get small business and have several financing options. </h2>
            )}
            {pricingDescription ? (
              <p className="mb-12 mt-10">
                Until recently, the prevailing view assumed lorem ipsum was born as a nonsense <br /> text. It&lsquo;s
                not Latin, though it looks like it
              </p>
            ) : (
              ''
            )}
          </div>
          {/* <div className="pricing mt-8">
            <label className="relative z-[110] inline-flex cursor-pointer items-center">
              <span className="mr-2.5 text-base font-semibold text-paragraph dark:text-white">Monthly</span>
              <input
                type="checkbox"
                id="priceCheck"
                className="peer sr-only"
                onChange={(e) => setIsAnnual(e.target.checked)}
              />
              <div className="relative h-[34px] w-15 rounded-[20px] bg-paragraph before:absolute  before:left-1/2 before:top-1/2 before:h-[calc(100%-10px)] before:w-[calc(100%-10px)] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-[20px]  before:border before:border-dashed before:border-white/40 before:content-[''] after:absolute after:start-[5px] after:top-1/2 after:h-6 after:w-6 after:-translate-y-1/2 after:rounded-full after:bg-primary after:transition-all after:content-[''] peer-checked:after:start-[7px] peer-checked:after:translate-x-full "></div>
              <span className="ms-2.5 text-base font-semibold text-paragraph dark:text-white">Yearly</span>
            </label>
          </div> */}
        </div>
        {/* Pricing Cards */}
        <PricingCards version={false} />
        <Image
          src="/images/icons/line-break-btm.svg"
          alt="border"
          width={1000}
          height={5}
          className="mt-24 w-full text-white"
        />
      </div>
    </section>
  )
}

export default Pricing
