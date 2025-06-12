'use client'
import { BACKEND_API } from '@/api'
import { useState } from 'react'

const StepThree = ({ onNext }) => {
  const leadId = localStorage.getItem('leadId')

  const [formData, setFormData] = useState({
    revenueLast12Months: '',
    expensesLast12Months: '',
    acceptsCreditCards: false,
    hasOutstandingDebt: false,
    debt: [
      {
        nameOfLender: '',
        remainingBalance: 0,
        leadId: leadId,
      },
    ],
  })

  const handleDebtChange = (index, field, value) => {
    const updatedDebt = [...formData.debt]
    updatedDebt[index][field] = value
    setFormData({ ...formData, debt: updatedDebt })
  }

  const addDebt = () => {
    setFormData({
      ...formData,
      debt: [...formData.debt, { nameOfLender: '', remainingBalance: '', leadId: leadId }],
    })
  }

  const removeDebt = (index) => {
    const updatedDebt = [...formData.debt]
    updatedDebt.splice(index, 1)
    setFormData({ ...formData, debt: updatedDebt })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const stepFourData = {
      revenueLast12Months: parseInt(formData.revenueLast12Months),
      expensesLast12Months: parseInt(formData.expensesLast12Months),
      acceptsCreditCards: formData.acceptsCreditCards,
      hasOutstandingDebt: formData.hasOutstandingDebt,
      leadOutstandingDebt: formData.debt,
    }

    console.log(stepFourData, 'step four Data')

    try {
      const response = await fetch(`${BACKEND_API}lead/${leadId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stepFourData),
      })

      const data = await response.json()

      if (response.ok && data.status === true && data.status_code === 201) {
        console.log('step 3 created successfully:', data)

        // Store leadId in localStorage

        alert('Your step 3  application is saved successfully. Our representative will contact you soon.')
        onNext()
      } else {
        console.error('step 3  creation failed:', data)
        alert(`Failed to save step 3  application: ${data.msg || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('step 3  Form submission error:', error)
      alert('Something went wrong while submitting the step 3  form. Please try again later.')
    }
  }

  return (
    <section>
      <div className="rounded border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-8 md:gap-x-12">
            {/* Revenue */}
            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="revenueLast12Months"
                className="mb-2 block text-left text-sm font-medium text-[#213468] dark:text-white">
                Revenue (Last 12 Months)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  name="revenueLast12Months"
                  id="revenueLast12Months"
                  value={formData.revenueLast12Months}
                  onChange={(e) =>
                    setFormData({ ...formData, revenueLast12Months: e.target.value.replace(/[^0-9.]/g, '') })
                  }
                  className="block w-full rounded border border-black bg-white py-2.5 pl-7 pr-5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                />
              </div>
            </div>

            {/* Expenses */}
            <div className="max-md:col-span-full md:col-span-4">
              <label
                htmlFor="expensesLast12Months"
                className="mb-2 block text-left text-sm font-medium text-[#213468] dark:text-white">
                Business Expense (Last 12 Months)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  name="expensesLast12Months"
                  id="expensesLast12Months"
                  value={formData.expensesLast12Months}
                  onChange={(e) =>
                    setFormData({ ...formData, expensesLast12Months: e.target.value.replace(/[^0-9.]/g, '') })
                  }
                  className="block w-full rounded border border-black bg-white py-2.5 pl-7 pr-5 text-sm text-paragraph-light outline-none transition-all duration-300 placeholder:text-paragraph-light focus:border-primary dark:border-borderColor-dark dark:bg-dark-200 dark:placeholder:text-paragraph-light dark:focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Accept Credit Cards */}
          <div className="mt-8">
            <p className="mb-2 text-sm font-medium text-[#213468] dark:text-white">Do you accept credit cards?</p>
            <div className="flex gap-6">
              <label>
                <input
                  type="radio"
                  name="acceptsCreditCards"
                  checked={formData.acceptsCreditCards === true}
                  onChange={() => setFormData({ ...formData, acceptsCreditCards: true })}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="acceptsCreditCards"
                  checked={formData.acceptsCreditCards === false}
                  onChange={() => setFormData({ ...formData, acceptsCreditCards: false })}
                />{' '}
                No
              </label>
            </div>
          </div>

          {/* Has Outstanding Debt */}
          <div className="mt-8">
            <p className="mb-2 text-sm font-medium text-[#213468] dark:text-white">Do you have any outstanding debt?</p>
            <div className="flex gap-6">
              <label>
                <input
                  type="radio"
                  name="hasOutstandingDebt"
                  checked={formData.hasOutstandingDebt === true}
                  onChange={() => setFormData({ ...formData, hasOutstandingDebt: true })}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="hasOutstandingDebt"
                  checked={formData.hasOutstandingDebt === false}
                  onChange={() => setFormData({ ...formData, hasOutstandingDebt: false })}
                />{' '}
                No
              </label>
            </div>
          </div>

          {/* Debt Section */}
          {formData.hasOutstandingDebt && (
            <div className="mt-8">
              <p className="mb-4 text-sm font-medium text-[#213468] dark:text-white">Outstanding Debts</p>
              {formData.debt.map((d, index) => (
                <div key={index} className="mb-4 grid grid-cols-1 items-end gap-4 md:grid-cols-3">
                  <input
                    type="text"
                    placeholder="Debt Name"
                    value={d.nameOfLender}
                    onChange={(e) => handleDebtChange(index, 'nameOfLender', e.target.value)}
                    className="rounded border border-black bg-white px-4 py-2.5 text-sm dark:border-borderColor-dark dark:bg-dark-200"
                  />
                  <input
                    type="text"
                    placeholder="Remaining Balance ($)"
                    value={d.remainingBalance}
                    onChange={(e) =>
                      handleDebtChange(index, 'remainingBalance', parseInt(e.target.value.replace(/[^0-9.]/g, '')))
                    }
                    className="rounded border border-black bg-white px-4 py-2.5 text-sm dark:border-borderColor-dark dark:bg-dark-200"
                  />
                  <button
                    type="button"
                    onClick={() => removeDebt(index)}
                    className="text-sm text-red-600 hover:underline">
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" onClick={addDebt} className="mt-2 text-sm text-blue-600 hover:underline">
                + Add another debt
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="my-8 flex justify-end gap-4">
            {/* <button
              type="button"
              onClick={onPrev}
              className="inline-flex w-56 justify-center rounded-[99px] border px-7 py-3.5 text-black">
              Previous
            </button> */}
            <button
              type="submit"
              className="inline-flex w-56 justify-center rounded-[99px] bg-gradient-to-br from-blue-950 to-emerald-300 px-7 py-3.5 text-white">
              Next
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default StepThree
