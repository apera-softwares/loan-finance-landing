'use client'
import { cn } from '@/utils/cn'
import Link from 'next/link'

const PricingCard = ({ price, isAnnual }) => {
  console.log(isAnnual)
  return (
    <div className="w-full md:w-1/2">
      <div className="rounded-medium border border-[#DFDFDF] bg-white p-2.5 py-4 shadow-box dark:bg-dark-200">
        <div
          className={cn(
            'rounded  border-gray-100 p-8 dark:border-borderColor-dark',
            price.featured && 'lg:px-8 lg:pb-15 lg:pt-3',
          )}>
          {/* {price.featured && (
            <div className="mb-2.5 flex justify-end">
              <span className="-mr-4 rounded-full bg-primary px-3 py-1.5 font-medium text-paragraph">
                Save {price.save}
              </span>
            </div>
          )} */}
          <span className="my-6 h-[80px] w-[90px] rounded border text-center">Icon</span>
          <h3 className="mb-8 text-3xl text-[#213468]">{price.title}</h3>
          <p className="text-lg">{price.desc}</p>
          <p className="mb-6 border-b pb-6 text-lg font-bold text-[#213468]">{price.paraDesc}</p>
          {/* {isAnnual ? (
            <div className="price-month mb-16">
              <h2>
                $<span>{price.priceMonthly}</span>
              </h2>
              <p>Per Month</p>
            </div>
          ) : (
            <div className="price-year mb-16">
              <h2>
                $<span>{price.priceYearly}</span>
              </h2>
              <p>Per Year</p>
            </div>
          )} */}

          <ul className=" after:bg-[url(/images/banking/border.svg')] relative after:absolute after:-top-12 after:h-0.5 after:w-full after:bg-full after:bg-center after:bg-no-repeat dark:after:bg-[url('/images/banking/border-dark.svg')]">
            {price.priceList.map((items, i) => (
              <li className="mb-6 flex items-center gap-3.5 border-b pb-6" key={i}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="" className="fill-[#FA8331] " />
                  <path
                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                    fill=""
                    className="fill-white"
                  />
                </svg>
                <span>{items.name}</span><span className='font-bold text-[#213468]'>{items.highlight}</span>
              </li>
            ))}
          </ul>

          {/* {price.featured ? (
            <Link href="/contact" className="btn w-full py-3 text-center">
              Get Started Now
            </Link>
          ) : (
            <Link href="/contact" className="btn-outline w-full py-3 text-center dark:bg-transparent">
              Start Free Trial
            </Link>
          )} */}
          <p className="text-lg">{price.info}</p>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
