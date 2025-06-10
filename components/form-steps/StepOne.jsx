import Image from 'next/image'

const StepOne = ({ onNext }) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <section className="bg-white pb-150 dark:bg-dark-300 max-md:pb-20">
      <div className="rounded border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onNext()
          }}>
          <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
            <div className="flex h-36 justify-between gap-3 max-md:col-span-full md:col-span-12">
              <div className=" flex w-1/5 flex-col items-center justify-center gap-2 rounded-xl border p-3">
                <Image src="/images/icons/time.svg" alt="Background" width={40} height={40} className="" />
                <span>Working Capital</span>
              </div>
              <div className=" flex w-1/5 flex-col items-center justify-center gap-2 rounded-xl border p-3">
                <Image src="/images/icons/hand-bag.svg" alt="Background" width={40} height={40} className="" />
                <span>Buy a Business</span>
              </div>
              <div className=" flex w-1/5 flex-col items-center justify-center gap-2 rounded-xl border p-3">
                <Image src="/images/icons/hand-bag.svg" alt="Background" width={40} height={40} className="" />
                <span>Buy Equipment or Inventory</span>
              </div>
              <div className=" flex w-1/5 flex-col items-center justify-center gap-2 rounded-xl border p-3">
                <Image src="/images/icons/hand-bag.svg" alt="Background" width={40} height={40} className="" />
                <span>Cover Payroll</span>
              </div>
              <div className=" flex w-1/5 flex-col items-center justify-center gap-2 rounded-xl border p-3">
                <Image src="/images/icons/hand-bag.svg" alt="Background" width={40} height={40} className="" />
                <span>Other</span>
              </div>
            </div>
            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="amountNeeded"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                How much does your business need?
              </label>
              <select
                name="amountNeeded"
                id="amountNeeded"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                <option value={0}>Select Amount</option>
                <option value={10000}>Under {USDollar.format(10000)}</option>
                <option value={20000}>
                  {USDollar.format(10000)} - {USDollar.format(20000)}
                </option>
                <option value={30000}>
                  {USDollar.format(20000)} - {USDollar.format(30000)}
                </option>
                <option value={50000}>
                  {USDollar.format(30000)} - {USDollar.format(50000)}
                </option>
                <option value={100000}>
                  {USDollar.format(50000)} - {USDollar.format(100000)}
                </option>
                <option value={300000}>
                  {USDollar.format(100000)} - {USDollar.format(300000)}
                </option>
                <option value={300001}>More than {USDollar.format(300000)}</option>
              </select>
              {/* {errors.amountNeeded && <p className="mt-1 text-start text-sm text-red-500">{errors.amountNeeded}</p>} */}
            </div>

            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="annualRevenue"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                What is your role at this business?
              </label>
              <select
                name="role"
                id="role"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                <option value="">Select Role</option>
                <option value="owner">Owner</option>
                <option value="advisor">Advisor</option>
                <option value="employee">Employee</option>
                <option value="board_member">Board Member</option>
                <option value="other">Other</option>
              </select>
              {/* {errors.annualRevenue && <p className="mt-1 text-start text-sm text-red-500">{errors.annualRevenue}</p>} */}
            </div>

            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="busniess_name"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Business Name
              </label>
              <input
                type="text"
                name="busniess_name"
                id="busniess_name"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
              {/* {errors.firstName && <p className="mt-1 text-start text-sm text-red-500">{errors.firstName}</p>} */}
            </div>
            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="alternate_busniess_name"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Alternate Name or DBA (Optional)
              </label>
              <input
                type="text"
                name="alternate_busniess_name"
                id="alternate_busniess_name"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
              {/* {errors.lastName && <p className="mt-1 text-start text-sm text-red-500">{errors.lastName}</p>} */}
            </div>

            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="busniess_address"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Business Address
              </label>
              <input
                type="text"
                name="busniess_address"
                id="busniess_address"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
              {/* {errors.firstName && <p className="mt-1 text-start text-sm text-red-500">{errors.firstName}</p>} */}
            </div>

            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="phone"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
              />
              {/* {errors.phone && <p className="mt-1 text-start text-sm text-red-500">{errors.phone}</p>} */}
            </div>
            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="busniess_name"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                State
              </label>
              <input
                type="text"
                name="busniess_name"
                id="busniess_name"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
              {/* {errors.firstName && <p className="mt-1 text-start text-sm text-red-500">{errors.firstName}</p>} */}
            </div>
            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="busniess_name"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                City
              </label>
              <input
                type="text"
                name="busniess_name"
                id="busniess_name"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
              {/* {errors.firstName && <p className="mt-1 text-start text-sm text-red-500">{errors.firstName}</p>} */}
            </div>
            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="pincode"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Zip Code
              </label>
              <input
                type="text"
                name="pincode"
                id="pincode"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
              {/* {errors.firstName && <p className="mt-1 text-start text-sm text-red-500">{errors.firstName}</p>} */}
            </div>

            <div className="flex items-end max-md:col-span-full md:col-span-4">
              <input
                type="checkbox"
                name="franchise"
                id="franchise"
                className="h-6 w-6 rounded border border-black bg-white text-primary focus:ring-primary dark:border-borderColor-dark dark:bg-dark-200 dark:ring-offset-gray-800 dark:focus:ring-primary"
              />
              <label
                htmlFor="franchise"
                className=" ml-3 block font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                My business is part of a franchise
              </label>
            </div>

            <div className="mt-8 flex justify-end gap-4 max-md:col-span-full md:col-span-12">
              <div className="inline-flex w-56 items-center justify-center gap-2.5 overflow-hidden rounded-[99px] bg-gradient-to-br from-blue-950 to-emerald-300 px-7 py-3.5 text-center shadow">
                <button type="submit" className="font-['Inter'] text-base font-medium text-white">
                  Next
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default StepOne
