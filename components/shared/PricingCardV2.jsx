'use client'
import { cn } from '@/utils/cn'
import Link from 'next/link'

const PricingCardV2 = ({ price, isAnnual }) => {
  return (
    <div className="w-full md:w-1/2">
      <div className="rounded-medium bg-white p-2.5 shadow-box dark:bg-dark-200 ">
        <div
          className={cn(
            ' border-gray-100 p-8 dark:border-borderColor-dark max-md:p-5',
            price.featured && 'lg:px-8 lg:pb-15 lg:pt-3',
          )}>
          {price.featured && (
            <div className="mb-2.5 flex justify-end">
              <span className="-mr-4 rounded-full bg-primary px-3 py-1.5 font-medium text-paragraph">
                Save {price.save}
              </span>
            </div>
          )}

          {isAnnual ? (
            <div className="price-month mb-7">
              <h2>
                $<span>{price.priceMonthly}</span>
              </h2>
              <p>Per Month</p>
            </div>
          ) : (
            <div className="price-year mb-7">
              <h2>
                $<span>{price.priceYearly}</span>
              </h2>
              <p>Per Year</p>
            </div>
          )}
          <div className={cn('mb-8 rounded-lg p-6', price.featured ? 'bg-primary' : 'bg-primary/10 dark:bg-primary/5')}>
            <h3 className={cn('mb-2', price.featured && ' text-paragraph dark:text-paragraph')}>{price.title}</h3>
            <p className={cn('', price.featured && 'text-paragraph dark:text-paragraph')}>{price.desc}</p>
          </div>
          <ul className="relative">
            {price.priceList.map((items, i) => (
              <li className="mb-6 flex items-center gap-3.5" key={i}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="10" fill="" className="fill-primary" />
                  <path
                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                    fill=""
                    className="fill-paragraph"
                  />
                </svg>
                <span>{items.name}</span>
              </li>
            ))}
          </ul>

          {price.featured ? (
            <Link href="/contact" className="btn w-full py-3 text-center">
              Get Started Now
            </Link>
          ) : (
            <Link href="/contact" className="btn-outline w-full py-3 text-center dark:bg-transparent">
              Start Free Trial
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default PricingCardV2
