import Freelancer1 from "../../assets/images/freelancer_1.svg";
import Freelancer2 from "../../assets/images/freelancer_2.svg";
import Freelancer3 from "../../assets/images/freelancer_3.svg";
import Freelancer4 from "../../assets/images/freelancer_4.svg";
import Freelancer5 from "../../assets/images/freelancer_5.svg";
import Stars from "../../assets/icons/stars.svg";
import Image from "next/image";
import Link from "next/link";

const freelancersData = [
  {
    image: Freelancer1,
    name: "Марина Королёва",
    job: "Разработчик PHP",
    completedProjects: "Выполнено проектов: 65",
  },
  {
    image: Freelancer2,
    name: "Семён Сергеев",
    job: "Копирайтер",
    completedProjects: "Выполнено проектов: 104",
  },
  {
    image: Freelancer3,
    name: "Ангелина Сорокина",
    job: "Дизайнер сайтов",
    completedProjects: "Выполнено проектов: 25",
  },
  {
    image: Freelancer4,
    name: "Никита Зайцев",
    job: "Маркетолог",
    completedProjects: "Выполнено проектов: 144",
  },
  {
    image: Freelancer5,
    name: "Наталья Захарова",
    job: "Motion дизайнер",
    completedProjects: "Выполнено проектов: 71",
  },
];

const Freelancers = () => {
  return (
    <section className="font-montserrat mt-24">
      <div className="container">
        <h2 className="font-bold text-[24px] my-12">Топ фрилансеров</h2>
        <ul className=" flex flex-wrap gap-7">
          {freelancersData.map((freelancer, index) => (
            <li key={index} className="max-w-[420px] border shadow-lg border-light_gray rounded-[20px] p-5">
              <div className="flex gap-x-7 items-center relative">
                <Image width={150} src={freelancer.image} alt={freelancer.name} />
                <div>
                  <h3 className=" font-medium text-[16px]">{freelancer.name}</h3>
                  <p className=" font-medium mt-1 text-[18px] text-orange">{freelancer.job}</p>
                  <p className="font-normal text-[14px] mb-4 mt-2">{freelancer.completedProjects}</p>
                  <Image width={150} src={Stars} alt="vote" />
                </div>
              </div>
              <Link href="#" className='cursor-pointer border max-w-[300px] mx-auto mt-12 hover:text-[#fff] hover:bg-green w-[100%] text-green block text-center p-2 rounded-[50px]'>Написать</Link>
            </li>
          ))}
           <li className=" max-w-[420px] border shadow-lg bg-light_gray border-light_gray rounded-[20px] p-5 px-10">
            <p className="text-green font-bold flex justify-center mt-24">Посмотреть всех ТОП фрилансеров</p>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default Freelancers;
