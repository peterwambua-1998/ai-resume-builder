import Link from 'next/link';
import loginImg from '../../images/login.svg'
import Image from 'next/image';


const Login = () => {
    return (  
        <main>
            <div className="">
                {/* hero section */}
                <div className="sm:container mx-auto p-[5%]">
                    <div className="md:grid md:grid-cols-2 md:gap-4 sm:grid-cols-1 my-bg">
                        <div>
                            <p className='mb-3 text-center w-[70%] font-bold'>Login In</p>
                            <form action="">
                                <div class="relative mb-5">
                                    <input type="email" class="peer py-3 px-4 ps-11 block w-[70%] bg-[#D9D9D9] border-transparent rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter name" />
                                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                    </div>
                                </div>

                                <div class="relative mb-5">
                                    <input type="password" class="peer py-3 px-4 ps-11 block w-[70%] bg-[#D9D9D9] border-transparent rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter password" />
                                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>
                                    </div>
                                </div>
                                <button type="button" class="py-3 px-4  gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-[#F59E0B] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none w-[70%] text-center">
                                    Button
                                </button>
                                <div className='w-[70%] mt-2'>
                                    <p className='text-xs text-center'>or sign in with</p>
                                </div>
                                
                            </form>
                            <div className='w-[70%] mt-2'>
                                <button type="button" className="mt-5 py-3 px-4 w-full text-center gap-x-2 text-sm font-semibold rounded-full border border-[#0077B5] text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ">
                                    Linked In
                                </button>
                                <button type="button" className="mt-5 py-3 px-4 w-full text-center gap-x-2 text-sm font-semibold rounded-full border border-[#1DA1F2] text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none ">
                                    Twitter
                                </button>
                            </div>
                        </div>
                        <div className='text-right md:pl-[10%]'>
                        <Image src={loginImg} height={380} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Login;