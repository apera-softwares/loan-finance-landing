'use client'
import { BACKEND_API } from '@/api'
import { plans } from '@/data/plansData'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

const StepOne = ({ onNext }) => {
  const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  const [selectedPlans, setSelectedPlans] = useState([])
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [formData, setFormData] = useState({
    amountNeeded: '',
    role: '',
    businessName: '',
    alternateBusinessName: '',
    businessAddress: '',
    phone: '',
    stateId: '',
    cityId: '',
    pincode: '',
    franchise: false,
  })

  console.log(selectedPlans, 'selectedPlans')

  const fetchStates = async () => {
    try {
      const res = await fetch(`${BACKEND_API}user/states`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) throw new Error('Failed to fetch states')
      const data = await res.json()
      setStates(data.data)
    } catch (error) {
      console.error('State Fetch Error:', error)
    }
  }

  const fetchCities = async (stateId) => {
    try {
      const res = await fetch(`${BACKEND_API}user/city/${stateId}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) throw new Error('Failed to fetch cities')
      const data = await res.json()
      console.log(data.data, 'cities')
      setCities(data.data)
    } catch (error) {
      console.error('City Fetch Error:', error)
    }
  }

  useEffect(() => {
    fetchStates()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const leadId = localStorage.getItem('leadId')

    const stepOneData = {
      amountNeeded: parseInt(formData.amountNeeded),
      applicantRole: formData.role,
      businessName: formData.businessName,
      dbaName: formData.alternateBusinessName,
      address: formData.businessAddress,
      businessCityId: formData.cityId,
      businessStateId: formData.stateId,
      businessZipCode: formData.pincode,
      phoneNumber: formData.phone,
      isFranchise: formData.franchise,
      planUsageOfFund: selectedPlans,
    }

    console.log(stepOneData, 'stepOneData')

    try {
      const response = await fetch(`${BACKEND_API}lead/${leadId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stepOneData),
      })

      const data = await response.json()

      if (response.ok && data.status === true && data.status_code === 201) {
        console.log('step 1 created successfully:', data)

        // Store leadId in localStorage
        toast.success('Successfully Saved Funding Information')

        onNext()
      } else {
        console.error('step 1  creation failed:', data)
        alert(`Failed to save step 1  application: ${data.msg || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('step 1  Form submission error:', error)
      alert('Something went wrong while submitting the step 1  form. Please try again later.')
    }
  }

  return (
    <section className="bg-white pb-150 dark:bg-dark-300 max-md:pb-20">
      <div className="rounded border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
            <div className="flex flex-wrap justify-between gap-3 max-md:col-span-full md:col-span-12">
              {plans.map((plan) => {
                const isSelected = selectedPlans.includes(plan.value)

                return (
                  <div
                    key={plan.id}
                    onClick={() =>
                      setSelectedPlans((prev) =>
                        prev.includes(plan.value) ? prev.filter((val) => val !== plan.value) : [...prev, plan.value],
                      )
                    }
                    className={`flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border
          p-3 sm:w-[48%] md:w-[31%] lg:w-[23%] xl:w-[18%]
          ${isSelected ? 'border-emerald-500 bg-gray-50' : 'border-gray-300'}`}>
                    <Image
                      src={`/images/icons/${plan.icon}.svg`}
                      alt="Plan"
                      width={40}
                      height={40}
                      className="hidden md:flex"
                    />
                    <span className="text-center text-sm">{plan.name}</span>
                  </div>
                )
              })}
            </div>

            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="amountNeeded"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                How much does your business need?
              </label>
              <select
                name="amountNeeded"
                value={formData.amountNeeded}
                onChange={(e) => setFormData({ ...formData, amountNeeded: e.target.value })}
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
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                <option value="">Select Role</option>
                <option value="OWNER">Owner</option>
                <option value="ADVISOR">Advisor</option>
                <option value="EMPLOYEE">Employee</option>
                <option value="BOARD_MEMBER">Board Member</option>
                <option value="OTHER">Other</option>
              </select>
            </div>

            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="businessName"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
            </div>
            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="alternateBusinessName"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Alternate Name or DBA (Optional)
              </label>
              <input
                type="text"
                name="alternateBusinessName"
                id="alternateBusinessName"
                value={formData.alternateBusinessName}
                onChange={(e) => setFormData({ ...formData, alternateBusinessName: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
            </div>

            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="businessAddress"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Business Address
              </label>
              <input
                type="text"
                name="businessAddress"
                id="businessAddress"
                value={formData.businessAddress}
                onChange={(e) => setFormData({ ...formData, businessAddress: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
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
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary"
              />
            </div>
            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="busniess_name"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                State
              </label>
              <select
                name="stateId"
                value={formData.stateId}
                onChange={(e) => {
                  setFormData({ ...formData, stateId: e.target.value, cityId: '' })
                  fetchCities(e.target.value)
                }}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.id} value={state.id}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="busniess_name"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                City
              </label>
              <select
                name="cityId"
                value={formData.cityId}
                onChange={(e) => setFormData({ ...formData, cityId: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.city}
                  </option>
                ))}
              </select>
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
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
            </div>

            <div className="flex items-end max-md:col-span-full md:col-span-4">
              <input
                type="checkbox"
                name="franchise"
                id="franchise"
                checked={formData.franchise}
                onChange={(e) => setFormData({ ...formData, franchise: e.target.checked })}
                className="h-6 w-6 rounded border border-black bg-white text-primary focus:ring-primary dark:border-borderColor-dark dark:bg-dark-200 dark:ring-offset-gray-800 dark:focus:ring-primary"
              />
              <label
                htmlFor="franchise"
                className="ml-3 block font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
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
