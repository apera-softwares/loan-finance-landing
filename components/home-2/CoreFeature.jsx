import Image from 'next/image'
import Link from 'next/link'

const CoreFeature = () => {
  /* const CoreFeatures = [
    {
      id: 1,
      title: 'Apply Online in Minutes',
      iconLight: '/images/payment/invoice.svg',
      iconDark: '/images/payment/invoice-dark.svg',
      desc: 'Apply for funding using our award-winning platform.',
    },
    {
      id: 2,
      title: 'Fast Prequalification',
      iconLight: '/images/payment/insight.svg',
      iconDark: '/images/payment/insight-dark.svg',
      desc: 'Instantly see an initial estimate of how much Revenue-Based Financing you could qualify for.',
    },
    {
      id: 3,
      title: 'Works for Most Business Needs',
      iconLight: '/images/payment/inventory.svg',
      iconDark: '/images/payment/inventory-dark.svg',
      desc: "Helping business owners like you fund what's next.",
    },
    {
      id: 4,
      title: 'Organized Expense',
      iconLight: '/images/payment/expens.svg',
      iconDark: '/images/payment/expens-dark.svg',
      desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
    },
    {
      id: 5,
      title: 'Organize Receipts',
      iconLight: '/images/payment/receipts.svg',
      iconDark: '/images/payment/receipts-dark.svg',
      desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
    },
    {
      id: 6,
      title: 'Mobile App',
      iconLight: '/images/payment/app.svg',
      iconDark: '/images/payment/app-dark.svg',
      desc: 'The prevailing view asumed lorem ipsum was born as nonsense text.',
    },
  ] */
  return (
    <section className="relative pt-[280px] lg:pt-[400px]">
      {/* <section className="relative mt-[1100px] md:mt-[20%]"> */}

      <div className="absolute left-0 right-0 top-150 h-full w-full md:hidden"></div>
      <div className="container">
        <div className="mx-auto mb-12 max-w-[810px] text-center">
          <p className=" text-[#FA8331]">About Our Most Popular Product</p>
          <h2 className="text-[#213468]">Revenue-Based Financing</h2>
          <h2 className="text-[#213468]">
            <span className="bg-gradient-to-r from-[#213468] to-[#75bfb8] bg-clip-text text-transparent">
              Fast And Flexible{' '}
            </span>{' '}
            Financing For Your Business
          </h2>
        </div>

        <div className="relative z-10">
          {/* <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-md:hidden max-md:flex-col">
            <div className="rounded-full bg-primary-200/20  blur-[145px] max-1xl:h-[335px]  max-1xl:w-[335px] 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/25 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
            <div className="-ml-[170px] rounded-full  bg-primary-200/20 blur-[145px]  max-1xl:h-[335px] max-1xl:w-[335px] max-md:ml-0 1xl:h-[442px] 1xl:w-[442px]"></div>
          </div> */}

          {/* <div className="relative flex  flex-col [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-0.5 [&>*:not(:last-child)]:after:w-full [&>*:not(:last-child)]:after:overflow-hidden [&>*:not(:last-child)]:after:content-[url('/images/payment/seperator.png')] dark:[&>*:not(:last-child)]:after:content-[url('/images/payment/seperator-dark.png')] max-md:[&>*:not(:last-child)]:after:hidden">
            <div className="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] dark:[&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right-dark.svg')] max-lg:[&>*:nth-child(3n+1)]:before:hidden ">
              {CoreFeatures.slice(0, 3).map((items) => (
                <div
                  className=" group  relative px-0 py-12 after:absolute after:overflow-hidden max-lg:top-auto max-lg:after:bottom-0 max-lg:after:h-[1px] max-lg:after:w-full max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile-dark.svg')] lg:px-12 lg:after:right-0 lg:after:top-1/2  lg:after:h-full lg:after:w-[1px] lg:after:-translate-y-1/2 lg:after:content-[url('/images/payment/coreborder-right.svg')] lg:dark:after:content-[url('/images/payment/coreborder-right-dark.svg')]"
                  key={items.id}>
                  <Image
                    src={items.iconLight}
                    alt="payment logo"
                    className="mb-6 inline-block h-auto w-auto dark:hidden"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={items.iconDark}
                    alt="payment logo"
                    className="mb-6 hidden h-auto w-auto dark:inline-block"
                    width={40}
                    height={40}
                  />
                  <h3 className="relative mb-2.5 after:absolute after:-left-[49px] after:h-full after:w-0.5 after:bg-primary after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100">
                    {items.title}
                  </h3>
                  <p>{items.desc}</p>
                </div>
              ))}
            </div>
            <div className="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right.svg')] dark:[&>*:nth-child(3n+1)]:before:content-[url('/images/payment/coreborder-right-dark.svg')] max-lg:[&>*:nth-child(3n+1)]:before:hidden ">
              {CoreFeatures.slice(3, 6).map((items) => (
                <div
                  className=" group  relative px-0 py-12 after:absolute after:overflow-hidden max-lg:top-auto max-lg:after:bottom-0 max-lg:after:h-[1px] max-lg:after:w-full max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile.svg')] dark:max-lg:after:content-[url('/images/payment/coreborder-bottom-mobile-dark.svg')] lg:px-12 lg:after:right-0 lg:after:top-1/2  lg:after:h-full lg:after:w-[1px] lg:after:-translate-y-1/2 lg:after:content-[url('/images/payment/coreborder-right.svg')] lg:dark:after:content-[url('/images/payment/coreborder-right-dark.svg')]"
                  key={items.id}>
                  <Image
                    src={items.iconLight}
                    alt="payment logo"
                    className="mb-6 inline-block h-auto w-auto dark:hidden"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={items.iconDark}
                    alt="payment logo"
                    className="mb-6 hidden h-auto w-auto dark:inline-block"
                    width={40}
                    height={40}
                  />
                  <h3 className="relative mb-2.5 after:absolute after:-left-[49px] after:h-full after:w-0.5 after:bg-primary after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100">
                    {items.title}
                  </h3>
                  <p>{items.desc}</p>
                </div>
              ))}
            </div>
          </div> */}
          <div className="flex h-full w-full grid-cols-2 flex-col gap-5 bg-[#fff] md:flex-row md:justify-between">
            <div className="rounded border border-[#DFDFDF] p-10 shadow-box md:w-[40%]">
              <div className="mb-8 w-fit rounded bg-[#eaf5f4] p-3 px-4 text-center">
                <Image src="/images/icons/time.svg" alt="Background" width={60} height={65} className="" />
              </div>
              <h3 className="mb-6 text-4xl">Apply Online in Minutes</h3>
              <p className="mb-6 text-xl">Apply for funding using our award-winning platform.</p>
              <Link href="./" className="font-semibold text-[#213468]">
                Learn how it works?
              </Link>
            </div>
            <div className="flex h-full flex-col gap-5 md:w-[60%]">
              <div className="w-full items-start gap-6 rounded border border-[#DFDFDF] bg-[#75BFB8] p-10 text-white shadow-box md:flex">
                <div className="mb-8 w-fit rounded bg-[#eaf5f4] p-3 px-4 text-center">
                  <Image src="/images/icons/time.svg" alt="Background" width={60} height={65} className="" />
                </div>
                <div className="w-[88%]">
                  <h3 className="mb-3 text-white">Fast Prequalification</h3>
                  <p className="mb-3 text-wrap text-xl text-white">
                    Create your Biz2Credit account and see an initial estimate of how much Revenue-Based Financing you
                    could qualify for.
                  </p>
                  <Link href="./" className="font-semibold text-white">
                    Subject to additional review?
                  </Link>
                </div>
              </div>

              <div className="items-start gap-6 rounded border border-[#DFDFDF] p-10 shadow-box md:flex">
                <div className="mb-8 w-fit rounded bg-[#eaf5f4] p-3 px-4 text-center">
                  <Image src="/images/icons/hand-bag.svg" alt="Background" width={60} height={65} className="" />
                </div>
                <div className="w-[88%]">
                  <h3 className="mb-3">Works for Most Business Needs</h3>
                  <p className="mb-3 text-wrap text-xl">Helping business owners like you fund what&lsquo;s next.</p>
                  <Link href="./" className="font-semibold text-[#213468]">
                    Learn about Revenue-Based Financing?
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="grid grid-flow-col grid-rows-3 gap-4">
  <div class="row-span-3 p-6 border"> <span className='my-4'>Icon</span>
              <h4 className='mb-4'>Apply Online in Minutes</h4>
              <p className='mb-4'>Apply for funding using our award-winning platform.</p>
              <Link href="./">Learn how it works?</Link></div>
  <div class="col-span-2  border">02</div>
  <div class="col-span-2 row-span-2 border">03</div>
</div> */}
        </div>
      </div>
    </section>
  )
}

export default CoreFeature
