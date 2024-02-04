import Image from "next/image"

import Card from '../../assets/icons/cart.svg'
import Img from '../../assets/images/bg-img.png'
import Cash from '../../assets/icons/cash.svg'
import Time from '../../assets/icons/time.svg'

const Business = () => {
  return (
    <section className="font-montserrat business-inner bg-[#da9e00] pt-12 pb-20 mt-14 overflow-hidden">
                <div className="container  bg-[url('/images/business-bg.png')]">
                    <div className="">
                    <h2 className="font-medium text-[24px] text-[#F6FAFD]">Как WorkTap помогает бизнесу?</h2>
                    <div className="businer-section relative">
                        <ul className="busines-card-list max-w-[533px] mt-10">
                            <li className=" flex gap-x-5 items-center bg-[#F6FAFD] px-9 py-5 rounded-[20px]">
                                <Image src={Card} alt="card" />
                                <p className="text-[14px] font-normal">Оплачивайте с р/с или карты компании</p>
                            </li>
                            <li className=" flex my-5 gap-x-5 items-center bg-[#F6FAFD] px-9 py-5 rounded-[20px]">
                                <Image src={Cash} alt="card" />
                                <p className="text-[14px] font-normal">Экономьте до 87% бюджета на фрилансе</p>
                            </li>
                            <li className=" flex gap-x-5 items-center bg-[#F6FAFD] px-9 py-5 rounded-[20px]">
                                <Image src={Time} alt="card" />
                                <p className="text-[14px] font-normal">ОЭкономьте до 75% времени на решении фриланс задач</p>
                            </li>
                            <li className=" my-5">
                                <p className="text-[#F6FAFD] text-[20px] fonr-medium">WorkTap — быстро, просто и безопасно!</p>
                            </li>
                            <li className=" mt-10">
                                <a href="#" className="p-5 px-14 rounded-[50px] bg-[#5E4EDB] text-[#F6FAFD]">Начать!</a>
                            </li>
                        </ul>
                        {/* <div className="">
                            <Image className="h-[600px] w-[850px] top-[-125px] right-[-210px] absolute" width={700} height={850} src={Img} alt="img" />
                        </div> */}
                    </div>
                    </div>
                </div>
      </section>
  )
}

export default Business