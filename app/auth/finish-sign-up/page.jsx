const FinishSignUp = () => {
    return ( 
        <main className="p-[5%]">
            <p className="text-center font-bold mt-1 mb-3 text-[#1E3A8A] md:mt-0 lg:mt-0 md:text-[30px] lg:text-[30px]">Finish Sign Up</p>
            <form action="">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <div className="md:ml-5 lg:ml-5">
                        <p className="text-center text-sm font-semibold mb-2 md:w-[70%] lg:w-[70%]">Personal details</p>
                        <div class="relative mb-5">
                            <input type="email" class="peer py-3 px-4 ps-11 block w-[100%] md:w-[70%] lg:w-[70%] bg-[#D9D9D9] border-transparent rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter first name" />
                            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                            </div>
                        </div>

                        <div class="relative mb-5">
                            <input type="password" class="peer py-3 px-4 ps-11 block w-[100%] md:w-[70%] lg:w-[70%] bg-[#D9D9D9] border-transparent rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter middle name" />
                            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>
                            </div>
                        </div>

                        <div class="relative mb-5">
                            <input type="password" class="peer py-3 px-4 ps-11 block w-[100%] md:w-[70%] lg:w-[70%] bg-[#D9D9D9] border-transparent rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter last name" />
                            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>
                            </div>
                        </div>

                        <div class="relative md:mb-5 lg:mb-5">
                            <input type="password" class="peer py-3 px-4 ps-11 block w-[100%] md:w-[70%] lg:w-[70%] bg-[#D9D9D9] border-transparent rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter phone number" />
                            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                <svg class="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>
                            </div>
                        </div>
                        <button type="button" class="hidden lg:block md:block py-3 px-4  gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-[#F59E0B] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none w-[100%] md:w-[70%] lg:w-[70%] text-center">
                            Submits
                        </button>
                    </div>
                    <div>
                        {/* use dropzone */}
                        <p className="text-center text-sm font-semibold mb-2">Passport sized photo</p>
                        <div className="w-full md:h-[95%] lg:h=[95%] h-[30vh] bg-slate-200 rounded-lg mb-3"></div>
                        {/* use dropzone end */}
                        <button type="button" class="md:hidden lg:hidden py-3 px-4  gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-[#F59E0B] text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none w-[100%]  text-center">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </main>
    );
}
 
export default FinishSignUp;