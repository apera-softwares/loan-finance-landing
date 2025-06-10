const StepFour = ({ onNext, onPrev }) => {
  return (
    <section className="...">
      {/* your form fields */}
      <div className="rounded border-gray-100 bg-white p-12 dark:border-borderColor-dark dark:bg-dark-200 max-md:p-5">
        <h1>Form 4</h1>
      </div>

      <div className="my-8 flex justify-between gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex w-56 justify-center rounded-[99px] border px-7 py-3.5 text-black">
          Previous
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex w-56 justify-center rounded-[99px] bg-gradient-to-br from-blue-950 to-emerald-300 px-7 py-3.5 text-white">
          Next
        </button>
      </div>
    </section>
  )
}

export default StepFour
