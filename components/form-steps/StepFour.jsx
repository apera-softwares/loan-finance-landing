import { useEffect, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { BACKEND_API } from '@/api'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const StepFour = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    socialSecurityNo: '',
    phone: '',
    email: '',
    jobTitle: '',
    ownership: '',
    address: '',
    stateId: '',
    cityId: '',
    pincode: '',
    ownershipType: '',
    iOwner: false,
    sameAsBusiness: false,
    businessAddress: '123 Business St, Adelaide, ID 12345',
    legalBusinessName: '',
    dbaName: '',
    corporateOwnership: '',
    corporateAddress: '',
    IDontHaveMyFederalTaxIDWithMe: false,
    IDontHaveAFederalTaxID: false,
    corporateStateId: '',
    corporateZipCode: '',
  })
  
  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const [corState, setCorStates] = useState([])
  const [corCities, setCorCities] = useState([])
  const router = useRouter()

  console.log(formData, 'formData step 4')
  const [showSSN, setShowSSN] = useState(false)

  const formatSSN = (value) => {
    const numeric = value.replace(/\D/g, '').slice(0, 9)
    const part1 = numeric.slice(0, 3)
    const part2 = numeric.slice(3, 5)
    const part3 = numeric.slice(5, 9)
    let formatted = part1
    if (part2) formatted += `-${part2}`
    if (part3) formatted += `-${part3}`
    return formatted
  }

  const validateSSNNumber = (value) => {
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/
    if (!ssnPattern.test(value)) {
      alert('SSN must be in the format XXX-XX-XXXX')
    } else {
      console.log('Valid SSN:', value)
    }
  }

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 10)
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/)
    if (!match) return value
    const [, area, prefix, line] = match
    if (line) return `(${area}) ${prefix}-${line}`
    if (prefix) return `(${area}) ${prefix}`
    if (area) return `(${area}`
    return ''
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

  const fetchCorStates = async () => {
    try {
      const res = await fetch(`${BACKEND_API}user/states`, {
        headers: {
          'ngrok-skip-browser-warning': 'true',
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) throw new Error('Failed to fetch states')
      const data = await res.json()
      setCorStates(data.data)
    } catch (error) {
      console.error('State Fetch Error:', error)
    }
  }

  const fetchCorCities = async (stateId) => {
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
      setCorCities(data.data)
    } catch (error) {
      console.error('City Fetch Error:', error)
    }
  }

  useEffect(() => {
    fetchStates()
    fetchCorStates()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const leadId = localStorage.getItem('leadId')

    const stepOneData = {
      isOwner: formData.iOwner,
      ownershipType: formData.ownershipType,
      ownerFirstName: formData.firstName,
      ownerLastName: formData.lastName,
      ownerDateOfBirth: formData.dateOfBirth,
      jobTitle: formData.jobTitle,
      ownershipPercentage: parseInt(formData.ownership),
      ownerInformationEmail: formData.email,
      ownerInformationMobileNumber: formData.phone,
      ownerAddress: formData.address,
      ownerCityId: formData.cityId,
      ownerStateId: formData.stateId,
      OwnerZipCode: formData.pincode,
      socialSecurityNumber: formData.socialSecurityNo,
      sameAsBusinessAddress: formData.sameAsBusiness,

      legalNameOfBusiness: formData.legalBusinessName,
      dBAName: formData.dbaName,
      corporateOwnership: parseInt(formData.corporateOwnership),
      corporateAddress: formData.corporateAddress,
      corporateCityId: formData.corporateCityId,
      corporateStateId: formData.corporateStateId,
      corporateZipCode: formData.corporateZipCode,
      PrimaryBusinessIdentificationNumber: formData.PrimaryBusinessIdentificationNumber,
      IDontHaveMyFederalTaxIDWithMe: formData.IDontHaveMyFederalTaxIDWithMe,
      IDontHaveAFederalTaxID: formData.IDontHaveAFederalTaxID,

      beneficialOwnerFirstName: formData.firstName,
      beneficialOwnerLastName: formData.lastName,
      beneficialOwnerDateOfBirth: formData.dateOfBirth,
      beneficialOwnerSocialSecurity: formData.socialSecurityNo,
      beneficialOwnerJobTitle: formData.jobTitle,
      beneficialOwnership: parseInt(formData.ownership),
      beneficialEmail: formData.email,
      beneficialMobileNumber: formData.phone,
      beneficialAddress: formData.address,
      beneficialCityId: formData.cityId,
      beneficialStateId: formData.stateId,
      beneficialOwnerZip: formData.pincode,
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
        console.log('step 4 created successfully:', data)

        // Store leadId in localStorage

        toast.success('Successfully Saved Owner Information')
        router.push('/success-form-sub')
      } else {
        console.error('step 4  creation failed:', data)
        alert(`Failed to save step 4  application: ${data.msg || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('step 1  Form submission error:', error)
      alert('Something went wrong while submitting the step 4  form. Please try again later.')
    }
  }

  return (
    <section className="...">
      {/* your form fields */}
      <div className="rounded border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5">
        <h3 className="my-4">Owner Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
            <div className="flex items-end max-md:col-span-full md:col-span-4">
              <input
                type="checkbox"
                name="iOwner"
                id="iOwner"
                checked={formData.iOwner}
                onChange={(e) => setFormData({ ...formData, iOwner: e.target.checked })}
                className="h-6 w-6 rounded border border-black bg-white text-primary focus:ring-primary dark:border-borderColor-dark dark:bg-dark-200 dark:ring-offset-gray-800 dark:focus:ring-primary"
              />
              <label
                htmlFor="iOwner"
                className="ml-3 block font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                I am an owner
              </label>
            </div>
            {!formData.iOwner ? (
              <div className="flex items-end max-md:col-span-full md:col-span-12">
                <div>
                  <p className="mb-2 text-sm font-medium text-[#213468] dark:text-white">Select Ownership Type</p>
                  <div className="flex gap-6">
                    <label>
                      <input
                        type="radio"
                        name="ownershipType"
                        value="INDIVIDUAL"
                        checked={formData.ownershipType === 'INDIVIDUAL'}
                        className="mx-2"
                        onChange={(e) => setFormData({ ...formData, ownershipType: e.target.value })}
                      />
                      Individual
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="ownershipType"
                        value="CORPORATE_ENTITY"
                        className="mx-2"
                        checked={formData.ownershipType === 'CORPORATE_ENTITY'}
                        onChange={(e) => setFormData({ ...formData, ownershipType: e.target.value })}
                      />
                      Corporate Entity
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-end max-md:col-span-full md:col-span-12"></div>
            )}

            {formData.ownershipType === 'CORPORATE_ENTITY' && (
              <div className="col-span-full mt-6 grid grid-cols-12 gap-6">
                <div className="col-span-12 text-sm font-medium text-red-600">
                  Please Note: Select {"'"}Corporate Entity{"'"}only if youu is owned or partly owned by another
                  business.
                </div>

                <div className="col-span-12 text-sm font-semibold text-[#213468] dark:text-white">
                  Add at-least ONE Beneficial Owner
                </div>

                <div className="col-span-full md:col-span-6">
                  <label className="mb-2 block text-sm font-medium text-[#213468]">Legal Name of Business</label>
                  <input
                    type="text"
                    className="w-full rounded border border-black px-5 py-2.5 text-sm"
                    value={formData.legalBusinessName}
                    onChange={(e) => setFormData({ ...formData, legalBusinessName: e.target.value })}
                  />
                </div>

                <div className="col-span-full md:col-span-6">
                  <label className="mb-2 block text-sm font-medium text-[#213468]">DBA Name (Optional)</label>
                  <input
                    type="text"
                    className="w-full rounded border border-black px-5 py-2.5 text-sm"
                    value={formData.dbaName}
                    onChange={(e) => setFormData({ ...formData, dbaName: e.target.value })}
                  />
                </div>

                <div className="col-span-full md:col-span-6">
                  <label className="mb-2 block text-sm font-medium text-[#213468]">Ownership %</label>
                  <input
                    type="number"
                    className="w-full rounded border border-black px-5 py-2.5 text-sm"
                    value={formData.corporateOwnership}
                    onChange={(e) => setFormData({ ...formData, corporateOwnership: e.target.value })}
                  />
                </div>

                <div className="col-span-full md:col-span-6">
                  <label className="mb-2 block text-sm font-medium text-[#213468]">Address</label>
                  <input
                    type="text"
                    className="w-full rounded border border-black px-5 py-2.5 text-sm"
                    value={formData.corporateAddress}
                    onChange={(e) => setFormData({ ...formData, corporateAddress: e.target.value })}
                  />
                </div>
                <div className="max-md:col-span-full md:col-span-4">
                  <label
                    htmlFor="corporateStateId"
                    className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                    State
                  </label>
                  <select
                    name="corporateStateId"
                    value={formData.corporateStateId}
                    onChange={(e) => {
                      setFormData({ ...formData, corporateStateId: e.target.value, corporateCityId: '' })
                      fetchCorCities(e.target.value)
                    }}
                    className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                    <option value="">Select State</option>
                    {corState.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="max-md:col-span-full md:col-span-4">
                  <label
                    htmlFor="corporateCityId"
                    className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                    City
                  </label>
                  <select
                    name="corporateCityId"
                    value={formData.corporateCityId}
                    onChange={(e) => setFormData({ ...formData, corporateCityId: e.target.value })}
                    className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:focus:border-primary">
                    <option value="">Select City</option>
                    {corCities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.city}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-full md:col-span-4">
                  <label className="mb-2 block text-sm font-medium text-[#213468]">Zip Code</label>
                  <input
                    type="text"
                    className="w-full rounded border border-black px-5 py-2.5 text-sm"
                    value={formData.corporateZipCode}
                    onChange={(e) => setFormData({ ...formData, corporateZipCode: e.target.value })}
                  />
                </div>

                {/* EIN Input + radio options */}
                <div className="col-span-12">
                  <label className="mb-2 block text-sm font-medium text-[#213468]">
                    Primary Business Identification Number (EIN or TIN)
                  </label>

                  {/* Show input only if both flags are false */}
                  {!formData.IDontHaveMyFederalTaxIDWithMe && !formData.IDontHaveAFederalTaxID && (
                    <input
                      type="tel"
                      className="floating-input ein_number_mask rounded border border-black px-5 py-2.5 text-sm"
                      placeholder="00-0000000"
                      maxLength={10}
                      value={formData.PrimaryBusinessIdentificationNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, PrimaryBusinessIdentificationNumber: e.target.value })
                      }
                    />
                  )}

                  <div className="mt-3 space-y-2 text-sm text-[#213468]">
                    <label className="block">
                      <input
                        type="radio"
                        name="einStatus"
                        checked={!formData.IDontHaveMyFederalTaxIDWithMe && !formData.IDontHaveAFederalTaxID}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            IDontHaveMyFederalTaxIDWithMe: false,
                            IDontHaveAFederalTaxID: false,
                          })
                        }
                      />
                      <span className="ml-2">I have my Federal Tax ID</span>
                    </label>

                    <label className="block">
                      <input
                        type="radio"
                        name="einStatus"
                        checked={formData.IDontHaveMyFederalTaxIDWithMe}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            IDontHaveMyFederalTaxIDWithMe: true,
                            IDontHaveAFederalTaxID: false,
                            PrimaryBusinessIdentificationNumber: '',
                          })
                        }
                      />
                      <span className="ml-2">I don{"'"}t have my Federal Tax ID with me</span>
                    </label>

                    <label className="block">
                      <input
                        type="radio"
                        name="einStatus"
                        checked={formData.IDontHaveAFederalTaxID}
                        onChange={() =>
                          setFormData({
                            ...formData,
                            IDontHaveMyFederalTaxIDWithMe: false,
                            IDontHaveAFederalTaxID: true,
                            PrimaryBusinessIdentificationNumber: '',
                          })
                        }
                      />
                      <span className="ml-2">I don{"'"}t have a Federal Tax ID</span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {formData.ownershipType === 'CORPORATE_ENTITY' && !formData.iOwner && (
              <h5 className="mt-10 font-bold text-green-800 max-md:col-span-full md:col-span-12">
                Beneficial Owner Details
              </h5>
            )}

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
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
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
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
            </div>
            <div className="max-md:col-span-full md:col-span-6">
              <label
                htmlFor="dateOfBirth"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
              />
            </div>
            <div className="relative max-md:col-span-full md:col-span-6">
              <label
                htmlFor="socialSecurityNo"
                className="mb-2 block text-left font-jakarta_sans text-sm font-medium text-[#213468] dark:text-white">
                Social Security #
              </label>
              <input
                type={showSSN ? 'text' : 'password'}
                placeholder="XXX-XX-XXXX"
                className="block w-full rounded border border-black bg-white px-5 py-2.5 pr-12 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                name="socialSecurityNo"
                id="socialSecurityNo"
                value={formData.socialSecurityNo}
                maxLength={11}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    socialSecurityNo: formatSSN(e.target.value),
                  })
                }
                onBlur={() => validateSSNNumber(formData.socialSecurityNo)}
              />
              <div
                type="button"
                onClick={() => setShowSSN((prev) => !prev)}
                className="absolute right-4 top-10 text-gray-500">
                {showSSN ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
            <div className="max-md:col-span-full md:col-span-6">
              <label className="mb-2 block text-sm font-medium text-[#213468] dark:text-white">Job Title</label>
              <input
                type="text"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>

            <div className="max-md:col-span-full md:col-span-6">
              <label className="mb-2 block text-sm font-medium text-[#213468] dark:text-white">Ownership %</label>
              <input
                type="text"
                value={formData.ownership}
                onChange={(e) => setFormData({ ...formData, ownership: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>

            <div className="max-md:col-span-full md:col-span-6">
              <label className="mb-2 block text-sm font-medium text-[#213468] dark:text-white">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>

            <div className="max-md:col-span-full md:col-span-6">
              <label className="mb-2 block text-sm font-medium text-[#213468] dark:text-white">Mobile Number</label>
              <input
                type="tel"
                placeholder="(XXX) XXX-XXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) })}
                maxLength={14}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>

            <div className="max-md:col-span-full md:col-span-12">
              <label className="mb-2 block text-sm font-medium text-[#213468] dark:text-white">
                <input
                  type="checkbox"
                  checked={formData.sameAsBusiness}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      sameAsBusiness: e.target.checked,
                      address: e.target.checked ? formData.businessAddress : '',
                    })
                  }
                  className="mr-2"
                />
                My home address is the same as the business address
              </label>
            </div>

            <div className="max-md:col-span-full md:col-span-6">
              <label className="mb-2 block text-sm font-medium text-[#213468] dark:text-white">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm outline-none focus:border-primary"
                disabled={formData.sameAsBusiness}
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
            <div className="max-md:col-span-full md:col-span-6">
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

            <div className="max-md:col-span-full md:col-span-6">
              <label className="mb-2 block text-sm font-medium text-[#213468] dark:text-white">Zip Code</label>
              <input
                type="text"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                className="block w-full rounded border border-black bg-white px-5 py-2.5 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>
          <p className="my-4 text-sm text-gray-700">
            By continuing, you are agreeing to our{' '}
            <Link href="/terms" className="hover:text-primary-dark text-primary underline">
              Terms and Conditions
            </Link>
            ,{' '}
            <Link href="/privacy-policy" className="hover:text-primary-dark text-primary underline">
              Privacy Policy
            </Link>{' '}
            and the{' '}
            <Link href="/business-finance-terms" className="hover:text-primary-dark text-primary underline">
              Business Finance Terms of Service
            </Link>
            . Specifically, please note that all applications will receive a soft credit pull which will not impact your
            credit score. A hard pull, which may impact your credit score, will be required after all necessary
            documentation has been reviewed in order to finalize your application and receive a final offer.
          </p>

          <div className="mt-8 flex justify-end gap-4 max-md:col-span-full md:col-span-12">
            <button
              type="submit"
              className="inline-flex w-56 items-center justify-center gap-2.5 overflow-hidden rounded-[99px] bg-gradient-to-br from-blue-950 to-emerald-300 px-7 py-3.5 text-center font-['Inter'] text-base font-medium text-white shadow">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* <div className="my-8 flex justify-end gap-4"> */}
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
          Submit
        </button>
      </div> */}
    </section>
  )
}

export default StepFour
