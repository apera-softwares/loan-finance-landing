'use client'
import Image from 'next/image'
import FadeUpAnimation from '../animations/FadeUpAnimation'
import { useState } from 'react'

const API_BASE_URL = 'http://209.182.232.11:4049'

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

const HeroContact = () => {
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    amountNeeded: '',
    annualRevenue: '',
    timeInBusiness: '',
    creditScore: '',
  })

  console.log(errors, 'errors')

  function saveForm(formData) {
    const firstName = formData.get('firstName')?.trim()
    const lastName = formData.get('lastName')?.trim()
    const email = formData.get('email')?.trim()
    const phone = formData.get('phone')?.trim()
    const amountNeeded = formData.get('amountNeeded')
    const annualRevenue = formData.get('annualRevenue')
    const timeInBusiness = formData.get('timeInBusiness')
    const creditScore = formData.get('creditScore')

    const newErrors = {}

    if (!firstName) newErrors.firstName = 'First name is required.'
    if (!lastName) newErrors.lastName = 'Last name is required.'
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Valid email is required.'
    if (!phone || !/^[0-9]{10}$/.test(phone)) newErrors.phone = 'Valid 10-digit phone number is required.'
    if (!amountNeeded || isNaN(amountNeeded) || parseInt(amountNeeded) <= 0)
      newErrors.amountNeeded = 'Select a valid amount needed.'
    if (!annualRevenue || isNaN(annualRevenue) || parseInt(annualRevenue) <= 0)
      newErrors.annualRevenue = 'Select valid annual revenue.'
    if (!timeInBusiness || parseInt(timeInBusiness) <= 0) newErrors.timeInBusiness = 'Select time in business.'
    if (!creditScore || isNaN(creditScore) || parseInt(creditScore) < 300 || parseInt(creditScore) > 850)
      newErrors.creditScore = 'Select a valid credit score.'

    if (Object.keys(newErrors).length > 0) {
      setErrors((prev) => ({ ...prev, ...newErrors }))
      return
    }

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      amountNeeded: parseInt(amountNeeded),
      annualRevenue: parseInt(annualRevenue),
      timeInBusiness,
      creditScore: parseInt(creditScore),
    }

    fetch(`${API_BASE_URL}/lead`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        alert('Your application is saved successfully. Our representative will contact you soon.')
        return response.json()
      })
      .catch((err) => {
        console.error('Form submission error:', err)
      })
  }

  return (
    // <section
    //   className="hero crypto-hero relative w-full bg-[url(/images/background/background.png)] bg-cover bg-center bg-no-repeat pt-[230px] max-lg:pb-25 max-lg:pt-[160px] max-md:pb-[70px]"
    //   id="scene">

    <section
      className="hero crypto-hero relative min-h-screen w-full max-lg:pb-25 max-lg:pt-[160px] max-md:pb-[70px]"
      id="scene">
      <Image
        src="/images/background/background.png"
        alt="border"
        fill
        className="absolute inset-0 -z-10 object-cover"
        priority
      />

      <div className="container">
        <div className="relative top-56 z-10 grid grid-cols-12 items-center gap-5 max-lg:gap-y-5">
          <FadeUpAnimation className="lg:mb-50 col-span-12 mb-15 text-center">
            <h1 className=" font-Sansita text-6xl text-white md:text-8xl">APPLY ONLINE IN </h1>
            <h1 className="mb-8 text-6xl text-white max-md:mb-6 md:text-8xl">
              <span className="font-Sansita">MINUTES</span>
            </h1>

            <h3 className="mb-2 text-[20px] text-white">
              You will automatically get an initial estimate of the amount your
            </h3>
            <h3 className="mb-12 text-[20px] text-white max-md:mb-8">business may receive.</h3>

            <div className="relative top-28 z-10 mx-auto max-w-[850px]">
              <div className="absolute left-1/2 top-1/2 -z-10 flex -translate-x-1/2 -translate-y-1/2 max-lg:max-w-full max-md:hidden">
                <div className="h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
                <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/25 blur-[145px]"></div>
                <div className="-ml-[170px] h-[442px] w-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
              </div>
              <div className="rounded-medium border border-black bg-white p-2.5 shadow-nav  dark:bg-dark-200">
                <div className="rounded border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5  ">
                  <form action={saveForm}>
                    <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="firstName"
                          className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Enter your first Name"
                          className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                        />
                        {errors.firstName && <p className="mt-1 text-sm text-red-500 text-start">{errors.firstName}</p>}
                      </div>
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="lastName"
                          className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Enter your last Name"
                          className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                        />
                        {errors.lastName && <p className="mt-1 text-sm text-red-500 text-start">{errors.lastName}</p>}
                      </div>
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="email"
                          className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email address"
                          className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500 text-start">{errors.email}</p>}
                      </div>
                      <div className="max-md:col-span-full md:col-span-6">
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
                          className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-500 text-start">{errors.phone}</p>}
                      </div>
                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="amountNeeded"
                          className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                          How much does your business need?
                        </label>
                        <select
                          name="amountNeeded"
                          id="amountNeeded"
                          className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
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
                            {' '}
                            {USDollar.format(100000)} - {USDollar.format(300000)}
                          </option>
                          <option value={300001}>More than {USDollar.format(300000)}</option>
                        </select>
                        {errors.amountNeeded && <p className="mt-1 text-sm text-red-500 text-start">{errors.amountNeeded}</p>}
                      </div>

                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="annualRevenue"
                          className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                          How much business are you doing?
                        </label>
                        <select
                          name="annualRevenue"
                          id="annualRevenue"
                          className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                          <option value={0}>Select Annual Revenue</option>
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
                        {errors.annualRevenue && <p className="mt-1 text-sm text-red-500 text-start">{errors.annualRevenue}</p>}
                      </div>

                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="timeInBusiness"
                          className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                          How long have you been in business?
                        </label>
                        <select
                          name="timeInBusiness"
                          id="timeInBusiness"
                          className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                          <option value={0}>Time in business</option>
                          <option value={6}>Less than 6 months</option>
                          <option value={12}>6-12 Months</option>
                          <option value={24}>1-2 Years</option>
                          <option value={36}>2-3 Years</option>
                          <option value={60}>3-5 Years</option>
                          <option value={120}>5-10 Years</option>
                          <option value={121}>10+ Years</option>
                        </select>
                        {errors.timeInBusiness && <p className="mt-1 text-sm text-red-500 text-start">{errors.timeInBusiness}</p>}
                      </div>

                      <div className="max-md:col-span-full md:col-span-6">
                        <label
                          htmlFor="creditScore"
                          className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                          What is your credit score?
                        </label>
                        <select
                          name="creditScore"
                          id="creditScore"
                          className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light   outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                          <option value={0}>Select Credit Score</option>
                          <option value={550}>500-550</option>
                          <option value={600}>550-600</option>
                          <option value={650}>600-650</option>
                          <option value={700}>600-700</option>
                          <option value={750}>700-750</option>
                          <option value={751}>Above 750</option>
                        </select>
                        {errors.creditScore && <p className="mt-1 text-sm text-red-500 text-start">{errors.creditScore}</p>}
                      </div>

                      <div className="col-span-full mx-auto inline-flex w-56 items-center justify-center gap-2.5 overflow-hidden rounded-[99px] bg-gradient-to-br from-blue-950 to-emerald-300 px-7 py-3.5 text-center shadow-[0px_0px_0px_3px_rgba(117,191,184,0.15)]">
                        <button type="submit" className="justify-start font-['Inter'] text-base font-medium text-white">
                          Get Qualified Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </FadeUpAnimation>

          {/* <Timer /> */}
        </div>
      </div>
    </section>
  )
}

export default HeroContact
