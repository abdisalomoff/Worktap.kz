import Image from "next/image"
import Link from "next/link"
import User1 from "../../assets/images/user_1.svg"
import User2 from "../../assets/images/user_2.svg"
import User3 from "../../assets/images/user_3.svg"
import User4 from "../../assets/images/user_4.svg"
import User5 from "../../assets/images/user_5.svg"

const usersImg = [User1, User2, User3, User4, User5];

const title = [
    "Сделать дизайн интернет-магазина",
    "Верстка landing page",
    "Сделать дизайн сайта-каталога и посадить на какой нибудь ко...",
    "Продвижение instagram",
    "Срочно! Нужен веб дизайнер!"
  ];



const CurrentWorks = () => {
  return (
    <section className="font-montserrat current-works mt-24">
    <div className="container">
      <h2 className="font-bold text-[24px] mb-12">Актуальные ворки</h2>
      <ul className="current-works_inner grid grid-cols-3 gap-7">
        {title.map((task, index) => (
          <li key={index} className="max-w-[420px] border shadow-lg border-light_gray rounded-[20px] p-5">
            <div className="card-header flex gap-x-5 items-center">
              <Image width={44} src={usersImg[index]} alt={`user-${index + 1}-img`} />
              <h4 className="font-semibold text-[18px]">{task}</h4>
            </div>
            <div className="card-body mt-3 h-[90px]">
              <p className='text-[14px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
            </div>
            <Link href={`/user-info`} className='cursor-pointer border max-w-[300px] mx-auto mt-12 hover:text-[#fff] hover:bg-green w-[100%] text-green block text-center p-2 rounded-[50px]'>Посмотреть</Link>
          </li>
        ))}
        <li className=" max-w-[420px] border shadow-lg bg-light_gray border-light_gray rounded-[20px] p-5">
            <p className="text-green font-bold flex justify-center mt-24">Смотреть все ворки</p>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default CurrentWorks