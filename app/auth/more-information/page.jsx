const MoreInformation = () => {
    return (  
        <main>
            <div className="pl-[5%] pr-[5%] pt-2 w-full text-center">
                <p className="font-bold text-[#1E3A8A] md:text-2xl lg:text-2xl">Lets Know more about you</p>
            </div>
            <div className="pl-[5%] pr-[5%] pt-[5%]  pb-[5%] md:pl-[15%] md:pr-[15%] md:pt-[2%] md:pb-[2%] lg:pl-[15%] lg:pr-[15%]">
                <div className="p-2 md:p-5 lg:p-5 bg-amber-200 w-full rounded-md">
                    <div className="flex justify-between">
                        <p className="text-sm md:text-lg font-bold">Experience</p>
                        <p className="text-sm md:text-lg font-bold" data-hs-overlay="#hs-large-modal">+</p>
                    </div>
                    <div className="mt-3 text-xs md:text-base lg:text-base">
                        <p>Add experience to level up your resume</p>
                    </div>
                </div>
            </div>

            <div className="pl-[5%] pr-[5%] pt-[5%]  pb-[5%] md:pl-[15%] md:pr-[15%] md:pt-[2%] md:pb-[2%] lg:pl-[15%] lg:pr-[15%]">
                <div className="p-2 md:p-5 lg:p-5 bg-amber-200 w-full rounded-md">
                    <div className="flex justify-between">
                        <p className="text-sm md:text-lg font-bold">Education</p>
                        <p className="text-sm md:text-lg font-bold">+</p>
                    </div>
                    <div className="mt-3 text-xs md:text-base lg:text-base">
                        <p>Add Education to boost your resume</p>
                    </div>
                </div>
            </div>

            <div className="pl-[5%] pr-[5%] pt-[5%]  pb-[5%] md:pl-[15%] md:pr-[15%] md:pt-[2%] md:pb-[2%] lg:pl-[15%] lg:pr-[15%]">
                <div className="p-2 md:p-5 lg:p-5 bg-amber-200 w-full rounded-md">
                    <div className="flex justify-between">
                        <p className="text-sm md:text-lg font-bold">Skills</p>
                        <p className="text-sm md:text-lg font-bold">+</p>
                    </div>
                    <div className="mt-3 text-xs md:text-base lg:text-base">
                        <p>Add skills to level up your resume</p>
                    </div>
                </div>
            </div>

            <div id="hs-large-modal" class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
                    <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto ">
                        <div class="flex justify-between items-center py-3 px-4 border-b ">
                            <h3 class="font-bold text-gray-800 ">
                            Modal title
                            </h3>
                            <button type="button" class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-large-modal">
                                <span class="sr-only">Close</span>
                                <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>
                    <div class="p-4 overflow-y-auto">
                        <p class="mt-1 text-gray-800 ">
                        This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>
                    <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t ">
                        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " data-hs-overlay="#hs-large-modal">
                            Close
                        </button>
                        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">
                            Save changes
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default MoreInformation;