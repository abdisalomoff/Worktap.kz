import credit from "../../../../public/icon/credit-card.svg";
import money from "../../../../public/icon/money.svg";
import clock from "../../../../public/icon/clock.svg";
import business from "../../../../public/icon/business-img.png";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <section className="bg-yellow-500">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="p-8">
              <h2 className="text-white text-3xl font-semibold mb-8">
                Как WorkTap помогает бизнесу?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Image src={credit} alt="" width={24} height={24} />
                  <p className="ml-4 text-white">
                    Оплачивайте с р/с или карты компании
                  </p>
                </li>
                <li className="flex items-center">
                  <Image src={money} alt="" width={24} height={24} />
                  <p className="ml-4 text-white">
                    Экономьте до 87% бюджета на фрилансе
                  </p>
                </li>
                <li className="flex items-center">
                  <Image src={clock} alt="" width={24} height={24} />
                  <p className="ml-4 text-white">
                    Экономьте до 75% времени на решении фриланс задач
                  </p>
                </li>
              </ul>
              <strong className="text-white block text-xl mt-8">
                WorkTap — быстро, просто и безопасно!
              </strong>
              <button className="bg-purple-700 text-white py-4 px-8 mt-8 font-bold rounded-full">
                Начать!
              </button>
            </div>
            <Image className="w-96" src={business} alt="business img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
