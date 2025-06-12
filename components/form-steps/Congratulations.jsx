import Head from 'next/head'

export default function SuccessPage() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-white px-4 py-12">
        <div className="w-full max-w-3xl rounded-lg border border-green-500 p-6 text-center shadow-lg">
          {/* Icons */}
<button className="rounded-full bg-green-600 my-4 px-8 py-4 font-semibold text-white transition hover:bg-[#3b3bb5]">
            Back to Home Page
          </button>
          {/* Main Title */}
          <h2 className="mb-2 text-2xl font-semibold text-green-600">Business Bank Statements</h2>

          {/* Subtitle */}
          <p className="mb-6 text-gray-700">
            We partner with <strong>Mastercard</strong> to verify your business activity and assess your eligibility for
            financing. When connecting your account, you maintain control at all times.
          </p>

          {/* CTA Button */}
          <button className="rounded-full bg-[#4c4cd6] px-6 py-2 font-semibold text-white transition hover:bg-[#3b3bb5]">
            Connect Now
          </button>

          {/* Secure/Private/Trusted section */}
          <div className="mt-10 grid grid-cols-1 gap-4 border-t pt-6 text-left text-sm md:grid-cols-3">
            <div className="flex items-start gap-2">
              <span className="text-xl text-green-500">🛡️</span>
              <div>
                <p className="font-bold text-[#213468]">SAFE & SECURE</p>
                <p className="text-gray-600">Your information is secured with our 128-bit encryption across systems</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-xl text-green-500">🔒</span>
              <div>
                <p className="font-bold text-[#213468]">PRIVATE</p>
                <p className="text-gray-600">Your account login credentials are never shared with Lending Sqaure</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <span className="text-xl text-green-500">✅</span>
              <div>
                <p className="font-bold text-[#213468]">TRUSTED</p>
                <p className="text-gray-600">+250,000 businesses across America choose Lending Sqaure for financing</p>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="mt-8 text-sm text-gray-600">
            Connecting your bank online is the fastest way to verify your business activity and get funding. If you’re
            facing a problem,{' '}
            <a href="#" className="font-medium text-green-600 underline">
              Upload PDF Bank Statements
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}
