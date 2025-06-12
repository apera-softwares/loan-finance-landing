'use client'
import { useState } from 'react'
import SecondaryNavbar from '@/components/navbar/SecondaryNavbar'
import FooterV2 from '@/components/footer/FooterV2'
import StepOne from '@/components/form-steps/StepOne'
import StepTwo from '@/components/form-steps/StepTwo'
import StepThree from '@/components/form-steps/StepThree'
import StepFour from '@/components/form-steps/StepFour'

const stepsData = [
  { title: 'Funding Information', step: 1 },
  { title: 'Company Information', step: 2 },
  { title: 'Financial Information', step: 3 },
  { title: 'Owner Information', step: 4 },
]

const Page = () => {
  const [step, setStep] = useState(1)

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 4))
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1))

  return (
    <>
      <SecondaryNavbar hideTopBar color="#101832" />
      <main className="pt-150">
        <div className="container relative z-10 ">
          <ol className="w-full items-center justify-center space-y-4 pb-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
            {stepsData.map((item) => (
              <li
                key={item.step}
                className={`flex items-center space-x-2.5 ${
                  step === item.step ? 'text-primary' : 'text-gray-500 dark:text-gray-400'
                } rtl:space-x-reverse`}>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                    step === item.step ? 'border-primary bg-primary text-white' : 'border-gray-500 dark:border-gray-400'
                  }`}>
                  {item.step}
                </span>
                <span>
                  <h3 className="font-medium leading-tight">{item.title}</h3>
                  <p className="text-sm">Step {item.step}</p>
                </span>
              </li>
            ))}
          </ol>

          <div>
            {step === 1 && <StepOne onNext={handleNext} />}
            {step === 2 && <StepTwo onNext={handleNext} onPrev={handlePrev} />}
            {step === 3 && <StepThree onNext={handleNext} onPrev={handlePrev} />}
            {step === 4 && <StepFour onPrev={handlePrev} />}
          </div>
        </div>
      </main>
      <FooterV2 />
    </>
  )
}

export default Page
