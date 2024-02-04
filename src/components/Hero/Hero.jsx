import Image from "next/image"
import Link from "next/link"
import HeroMainBg from "../../assets/images/hero-main-bg.png"

const Hero = () => {
  return (
    <section className="hero bg-[#F7F6FF] py-5 z-[-3]">
                <div className="container">
                    <div className="font-montserrat flex justify-between items-center my-14">
                        <div className="hero_info w-[590px]">
                            <h2 className="hero_totle text-[36px] w-[95%] font-bold text-4xl leading-10">Покупайте фриланс-услуги в <span className="text-green">два клика</span></h2>

                            <p className="font-medium leading-[24px] text-[20px] w-[80%] mt-7">Ворк — единица работы продавца, которую можно купить как товар в магазине </p>

                            <form className="relative mt-12">
                                <input type="search" name="search" placeholder="Что нужно сделать?"  className="outline-0 p-4 bg-light_gray w-[100%] rounded-[50px]"/>
                                <button type="submit" className="p-4 right-0 px-12 bg-orange rounded-[50px] absolute text-[#fff] test-[16px] font-medium">Найти</button>
                            </form>

                            <h3 className="text-[16px] font-medium leading-[20px] mt-12">Выберите рубрику, чтобы начать</h3>
                            
                            <ul className="hero_category_list mt-7 flex flex-wrap gap-x-6 gap-y-10 font-normal  leading-5 text-[14px]">
                                <li>
                                    <Link className="border border-light_gray p-2 px-4 rounded-[50px] hover:text-orange hover:border-orange" href="#">Дизайн</Link>
                                </li>
                                <li>
                                    <Link className="border border-light_gray p-2 px-4 rounded-[50px] hover:text-orange hover:border-orange" href="#">Дизайн сайтов</Link>
                                </li>
                                <li>
                                    <Link className="border border-light_gray p-2 px-4 rounded-[50px] hover:text-orange hover:border-orange" href="#">Дизайн логотипа</Link>
                                </li>
                                <li>
                                    <Link className="border border-light_gray p-2 px-4 rounded-[50px] hover:text-orange hover:border-orange" href="#">Дизайн визиток </Link>
                                </li>
                                <li>
                                    <Link className="border border-light_gray p-2 px-4 rounded-[50px] hover:text-orange hover:border-orange" href="#">Арт и иллюстрации</Link>
                                </li>
                                <li>
                                    <Link className="border border-light_gray p-2 px-4 rounded-[50px] hover:text-orange hover:border-orange" href="#">Флаера и брошюры</Link>
                                </li>
                                <li>
                                    <Link className="border border-light_gray p-2 px-4 rounded-[50px] hover:text-orange hover:border-orange" href="#">Баннеры и стенды</Link>
                                </li>
                                <li>
                                    <Link className="border border-light_gray p-2 px-4 rounded-[50px] hover:text-orange hover:border-orange" href="#">Дизайн презентации</Link>
                                </li>
                                <li>
                                    <Link className="border border-light_gray p-2 px-4 rounded-[50px] hover:text-orange hover:border-orange" href="#">Все категории</Link>
                                </li>
                            </ul>
                        </div>
                        <Image className="" src={HeroMainBg} alt="Покупайте фриланс-услуги в два клика" />
                    </div>
                </div>
    </section>
  )
}

export default Hero