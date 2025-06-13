'use client'

import { BACKEND_API } from '@/api'
import { legalStructure } from '@/data/legalStructurData'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const StepTwo = ({ onNext }) => {
  const [formData, setFormData] = useState({
    industryId: '',
    subIndustryId: '',
    stateId: '',
    taxIdentification: '',
    taxIdentificationNumber: '',
    dateOfBusinessStarted: '',
  })

  const [industries, setIndustries] = useState([])
  const [subIndustries, setSubIndustries] = useState([])
  const [states, setStates] = useState([])

  const [selectedPlan, setSelectedPlan] = useState('')

  console.log(selectedPlan, 'selectedPlan')

  const fetchIndustry = async () => {
    try {
      const res = await fetch(`${BACKEND_API}user/industries`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) throw new Error('Failed to fetch industry')
      const data = await res.json()
      console.log(data, 'industry')
      setIndustries(data.data)
    } catch (error) {
      console.error('Industry Fetch Error:', error)
    }
  }

  const fetchSubIndustry = async (industryId) => {
    try {
      const res = await fetch(`${BACKEND_API}user/subIndustries/${industryId}`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) throw new Error('Failed to fetch sub-industry')
      const data = await res.json()
      console.log(data, 'sub-industry')
      setSubIndustries(data.data)
    } catch (error) {
      console.error('Sub-Industry Fetch Error:', error)
    }
  }

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

  useEffect(() => {
    fetchIndustry()
    fetchStates()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const leadId = localStorage.getItem('leadId')

    const stepOneData = {
      companyLegalStructure: selectedPlan,
      taxIdentification: formData.taxIdentification,
      taxIdentificationNumber: formData.taxIdentificationNumber,
      industryId: formData.industryId,
      subIndustryId: formData.subIndustryId,
      StateOfIncorporationId: formData.stateId,
      dateOfBusinessStarted: formData.dateOfBusinessStarted,
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
        console.log('step 2 created successfully:', data)

        // Store leadId in localStorage
        toast.success('Successfully Saved Company Information')

        onNext()
      } else {
        console.error('step 2  creation failed:', data)
        alert(`Failed to save step 2 application: ${data.msg || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('step 2  Form submission error:', error)
      alert('Something went wrong while submitting the step 2  form. Please try again later.')
    }
  }

  return (
    <section className="bg-white pb-150 dark:bg-dark-300 max-md:pb-20">
      {' '}
      {/* Legal Structure Cards */}
      <div className="rounded border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5">
        <div className="flex flex-wrap justify-start gap-4 max-md:justify-center">
          {legalStructure?.map((plan) => {
            const isSelected = selectedPlan === plan.value

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.value)}
                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border p-4 transition-all duration-200 hover:shadow-md 
                ${isSelected ? 'border-emerald-500 bg-gray-50' : 'border-gray-300'}
                w-full sm:w-[48%] md:w-[30%] lg:w-[23%]`}>
                <Image src={`/images/icons/${plan.icon}.svg`} alt="Plan" width={40} height={40} />
                <span className="text-center text-sm font-medium">{plan.name}</span>
              </div>
            )
          })}
        </div>
      </div>
      {selectedPlan && (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
            {/* Show business name input if selectedPlan is LLC */}

            {/* Tax Identification Radio Buttons */}
            <div className="col-span-full">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">Tax Identification</label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="taxIdentification"
                    value="EIN"
                    checked={formData.taxIdentification === 'EIN'}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        taxIdentification: e.target.value,
                        taxIdentificationNumber: '',
                      })
                    }
                  />
                  EIN
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="taxIdentification"
                    value="ITIN_SSN"
                    checked={formData.taxIdentification === 'ITIN_SSN'}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        taxIdentification: e.target.value,
                        taxIdentificationNumber: '',
                      })
                    }
                  />
                  ITIN / SSN
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="taxIdentification"
                    value="I_DONT_HAVE_MY_TAX__HANDY"
                    checked={formData.taxIdentification === 'I_DONT_HAVE_MY_TAX__HANDY'}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        taxIdentification: e.target.value,
                        taxIdentificationNumber: '',
                      })
                    }
                  />
                  I don{"'"}t have my tax ID handy
                </label>
              </div>
            </div>

            {/* Tax Identification Number Input (Conditional) */}
            {(formData.taxIdentification === 'EIN' || formData.taxIdentification === 'ITIN_SSN') && (
              <div className="max-md:col-span-full md:col-span-12">
                <div className="w-1/3">
                  <label
                    htmlFor="busniess_name"
                    className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                    Tax Identification Number
                  </label>
                  <input
                    type="text"
                    name="taxIdentificationNumber"
                    id="taxIdentificationNumber"
                    value={formData.taxIdentificationNumber}
                    onChange={(e) => setFormData({ ...formData, taxIdentificationNumber: e.target.value })}
                    placeholder="Enter Tax Identification Number"
                    className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                  />
                </div>
              </div>
            )}

            <div className="max-md:col-span-full md:col-span-6">
              <label
                htmlFor="busniess_name"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Industry
              </label>
              <select
                name="industryId"
                value={formData.industryId}
                onChange={(e) => {
                  setFormData({ ...formData, industryId: e.target.value, subIndustryId: '' })
                  fetchSubIndustry(e.target.value)
                }}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                <option value="">Select Industry</option>
                {industries.map((industry) => (
                  <option key={industry.id} value={industry.id}>
                    {industry.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="max-md:col-span-full md:col-span-6">
              <label
                htmlFor="subIndustryId"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Sub-Industry
              </label>
              <select
                name="subIndustryId"
                value={formData.subIndustryId}
                onChange={(e) => setFormData({ ...formData, subIndustryId: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                <option value="">Select Sub-Industry</option>
                {subIndustries.map((subIndustry) => (
                  <option key={subIndustry.id} value={subIndustry.id}>
                    {subIndustry.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="max-md:col-span-full md:col-span-6">
              <label
                htmlFor="dateOfBusinessStarted"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Date Business Started
              </label>
              <input
                type="date"
                name="dateOfBusinessStarted"
                id="dateOfBusinessStarted"
                value={formData.dateOfBusinessStarted}
                onChange={(e) => setFormData({ ...formData, dateOfBusinessStarted: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
            </div>
            <div className="max-md:col-span-full md:col-span-6">
              <label
                htmlFor="busniess_name"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                State
              </label>
              <select
                name="stateId"
                value={formData.stateId}
                onChange={(e) => {
                  setFormData({ ...formData, stateId: e.target.value })
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
            <div className="mt-8 flex justify-end gap-4 max-md:col-span-full md:col-span-12">
              <button
                type="submit"
                className="inline-flex w-56 items-center justify-center gap-2.5 overflow-hidden rounded-[99px] bg-gradient-to-br from-blue-950 to-emerald-300 px-7 py-3.5 text-center font-['Inter'] text-base font-medium text-white shadow">
                Save & Next
              </button>
            </div>
          </div>
        </form>
      )}
      {/* Navigation Buttons */}
      {/* <div className="my-8 flex flex-col items-center justify-end gap-4 md:flex-row"> */}
      {/* <button
          type="button"
          onClick={onPrev}
          className="inline-flex w-56 justify-center rounded-[99px] border px-7 py-3.5 text-black">
          Previous
        </button> */}
      {/* <button
          type="button"
          onClick={onNext}
          className="inline-flex w-56 justify-center rounded-[99px] bg-gradient-to-br from-blue-950 to-emerald-300 px-7 py-3.5 text-white">
          Next
        </button>
      </div> */}
    </section>
  )
}

export default StepTwo
