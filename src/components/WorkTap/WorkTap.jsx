import service from "../../assets/icons/service.svg";
import pay from "../../assets/icons/pay.svg";
import result from "../../assets/icons/result.svg";
import Image from "next/image";

const WorkTap = () => {
  return (
      <section className="font-montserrat py-20">
        <div className="container">
          <div className="flex flex-col  mt-5">
            <h2 className="text-2xl font-semibold mb-4">Как решать задачи на WorkTap?</h2>
            <p className="text-base mb-10">Идеально подходит для бизнеса и частных лиц</p>
            <ul className="flex justify-between space-x-4 ">
              <li className="max-w-[390px] w-full">
                <Image src={service} width={83} height={83} alt="Выберите услугу" className="mb-4"/>
                <h3 className="text-lg font-semibold mb-2">Выберите услугу</h3>
                <p className="text-[14px] font-normal leading-[18px]" >В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
              </li>
              <li className="max-w-[390px] w-full">
                <Image src={pay} width={83} height={83} alt="Оплатите" className="mb-4"/>
                <h3 className="text-lg font-semibold mb-2 mt-7">Оплатите</h3>
                <p className="text-[14px] font-normal leading-[18px]">Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите.</p>
              </li>
              <li className="max-w-[390px] w-full">
                <Image src={result} width={75} height={80} alt="Получите результат" className="mb-4"/>
                <h3 className="text-lg font-semibold mb-2">Получите результат</h3>
                <p className="text-[14px] font-normal leading-[18px]">Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
  );
};

export default WorkTap;
