import Link from "next/link";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Linkiden from "../../assets/icons/linkedin.svg";
import Image from "next/image";


function Footer() {
  return (
    <footer>
      <div className="font-montserrat py-5 bg-[#F2F0FE]">
        <div className="container">
          <div className=" flex items-start gap-x-36">
            <ul>
              <li className="font-bold text-[20px] leading-[30px]">
                Топ категории
              </li>
              <li className="text-[14px] font-normal mt-5">
                Тексты и переводы
              </li>
              <li className="text-[14px] font-normal mt-2">
                Разработка
              </li>
              <li className="text-[14px] font-normal mt-2">
                Дизайн
              </li>
              <li className="text-[14px] font-normal mt-2">
                Аудио, видео монтаж
              </li>
              <li className="text-[14px] font-normal mt-2">
                Соцсети и реклама
              </li>
              <li className="text-[14px] font-normal mt-2">
                Бизнес и жизнь
              </li>
              <li className="text-[14px] font-normal mt-2">
                SEO и оптимизация
              </li>
            </ul>
            <ul>
              <li className="font-bold text-[20px] leading-[30px]">О Проекте</li>
              <li className="text-[14px] font-normal mt-5">
                О Нас
              </li>
              <li className="text-[14px] font-normal mt-2">
                Как Это Работает
              </li>
              <li className="text-[14px] font-normal mt-2">
                Политика Приватности
              </li>
              <li className="text-[14px] font-normal mt-2">
                Правила Пользования
              </li>
              <li className="text-[14px] font-normal mt-2">
                Пресса о нас
              </li>
            </ul>
            <ul>
              <li className="font-bold text-[20px] leading-[30px]">Поддержка</li>
              <li className="text-[14px] font-normal mt-5">
                Контакты
              </li>
              <li className="text-[14px] font-normal mt-2">
                Политика Безопасности
              </li>
              <li className="text-[14px] font-normal mt-2">FAQ</li>
            </ul>
            <ul>
              <li className="font-bold text-[20px] leading-[30px]">Follow</li>
              <li className="flex gap-x-9 mt-5">
                <Link href="#">
                  <Image  src={Facebook} alt="facebook" />
                </Link>
                <Link href="#">
                  <Image src={Twitter} alt="facebook" />
                </Link>
                <Link href="#">
                  <Image
                    className="bg-[#222222] p-3 rounded-full"
                    src={Instagram}
                    alt="facebook"
                  />
                </Link>
                <Link href="#">
                  <Image src={Linkiden} alt="facebook" />
                </Link>
              </li>
            </ul>
          </div>
          <p className="text-center mt-7 font-medium leading-[20px]">
            Copyright @ 2021 | WorkTap – Worktap.KZ. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
