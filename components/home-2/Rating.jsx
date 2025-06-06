import { FaStar } from 'react-icons/fa'
import Award from '../../public/images/award-section/awards.png'
import Image from 'next/image'

const Rating = () => {
  const PaymentRatingData = [
    {
      id: 1,
      rating: 4.7,
      name: 'Capterra',
      desc: 'Top Customer Fulfilment',
    },
    {
      id: 2,
      rating: 4.6,
      name: 'Capterra',
      desc: 'Best Payment Software',
    },
    {
      id: 3,
      rating: 4.9,
      name: 'Trustpilot',
      desc: 'Top Payment Company',
    },
  ]
  return (
    <section className="my-[140px] bg-[#F0FFFF] py-[140px]">
      <div className="container">
        <div className="">
          <div className="text-center">
            <h2 className="text-[#75BFB8]">Awards & Recognition</h2>
            <h2 className="text-[#213468]  mb-8">For Biz2Credit Funding</h2>
            <Image
              src={Award}
              alt="integartion image/award.png"
              className="inline-block h-auto w-full"
              width={450}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rating
