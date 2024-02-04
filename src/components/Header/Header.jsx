'use client'
import Link from 'next/link'
import Logo from "../../assets/icons/logo.svg"
import Image from 'next/image'


function Header() {
  return (
    <header>
        <div className="container font-montserrat  mx-auto pt-3">
            <div className=" flex justify-between p-2 pt-4  items-center w-[100%] leading-5">
                <Link href="/">
                    <Image src={Logo} alt='Logo'/>
                </Link>
                <nav className='w-[45%]'>
                  <ul className="flex gapx-x-8 items-center justify-between w-[100%]">
                    <li> <Link href="/stock" className='font-medium text-[16px]'>Биржа</Link> </li>
                    <li> <Link href="/info" className='font-medium text-[16px]'>Пользователь</Link> </li>
                    <li> <Link href="/product" className='font-medium text-[16px]'>Мои заказы</Link> </li>
                    <li> <Link href="/crate-work" className='font-medium text-[16px]'>Создать ворк</Link> </li>
                    <li> <Link href="/create-order" className='font-medium text-[16px]'>Создать заказ</Link> </li>
                  </ul>
                </nav>
                <div className="flex gap-x-3 items-center">
                  <Link href='/sign-up' className='p-2 px-6 bg-light_gray font-semibold cursor-pointer text-green rounded-[50px]'>Регистрация</Link>
                  <Link href='/sign-in' className='p-2 px-6 bg-green font-semibold cursor-pointer text-[#fff] rounded-[50px]'>Войти</Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header