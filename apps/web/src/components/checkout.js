import Image from 'next/image';
import Link from 'next/link';

const Checkout = () => {
  return (
  
    <div class="min-w-screen min-h-screen bg-gray-50 ">
     <Link href="/"><div className='flex px-10 py-10 gap-2'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20z"/></svg>
   <p> Checkout</p> 
</div>
</Link>

      <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div class="w-full">
          <div class="-mx-3 md:flex items-start">
            <div class="px-3 md:w-7/12 lg:pr-10">
              <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                <div class="w-full flex items-center">
                  <div class="overflow-hidden rounded-lg  bg-gray-50 border border-gray-200">
                    <Image
                      src="/taylor.jpeg"
                      alt="Logo"
                      width={100}
                      height={100}
                      className="w-200 h-100"
                    />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-semibold uppercase text-gray-600">
                      Taylor Swift Eras Tour
                    </h6>
                    <p> Platinum A</p>
                    <p class="text-gray-400">x 2</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-600 text-xl">
                      Rp.4.500.000
                    </span>
                  </div>
                </div>
              </div>

              <div class=" mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                <div class=" flex items-center">
                  <div class="overflow-hidden rounded-lg  bg-gray-50 border border-gray-200">
                    <Image
                      src="/taylor.jpeg"
                      alt="Logo"
                      width={100}
                      height={100}
                      className=""
                    />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-semibold uppercase text-gray-600">
                      Taylor Swift Eras Tour
                    </h6>
                    <p> Platinum B</p>
                    <p class="text-gray-400">x 2</p>
                  </div>
                  <div>
                    <span class="font-semibold text-gray-600 text-xl">
                      Rp.4.500.000
                    </span>
                  </div>
                </div>
              </div>

              <div class="mb-6 pb-6 border-b border-gray-200">
                <div class="-mx-2 flex items-end justify-end">
                  <div class="flex-grow px-2 lg:max-w-xs">
                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Discount code
                    </label>
                    <div>
                      <input
                        class="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="XXXXXX"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="px-2">
                    <button class="block w-full max-w-xs mx-auto border border-transparent  hover:bg-blue-500 bg-[#555486] focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
              <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                <div class="w-full flex mb-3 items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Subtotal</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold">Rp 9.000.000,</span>
                  </div>
                </div>
                <div class="w-full flex items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Pajak(11%)</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold">Rp.990.000</span>
                  </div>
                </div>
              </div>
              <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                <div class="w-full flex items-center">
                  <div class="flex-grow">
                    <span class="text-gray-600">Total</span>
                  </div>
                  <div class="pl-3">
                    <span class="font-semibold text-gray-400 text-sm">Rp.</span>{' '}
                    <span class="font-semibold">9.990.000</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-3 md:w-5/12">
              <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                <div class="w-full flex mb-3 items-center">
                  <div class="w-32">
                    <span class="text-gray-600 font-semibold">Contact</span>
                  </div>
                  <div class="flex-grow pl-3">
                    <span>Sanishara</span>
                  </div>
                </div>
                <div class="w-full flex items-center">
                  <div class="w-32">
                    <span class="text-gray-600 font-semibold">
                      Billing Address
                    </span>
                  </div>
                  <div class="flex-grow pl-3">
                    <span>Klaten, Jawa Tengah </span>
                  </div>
                </div>
              </div>
              <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                <div class="w-full p-3 border-b border-gray-200">
                  <div class="mb-5">
                    <label for="type1" class="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        class="form-radio h-5 w-5 text-indigo-500"
                        name="type"
                        id="type1"
                      />
                      <Image
                        src="/mastercard.png"
                        alt="Logo"
                        width={80}
                        height={21}
                      />
                    </label>
                  </div>
                  <div>
                    <div class="mb-3">
                      <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Name on card
                      </label>
                      <div>
                        <input
                          class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="John Smith"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Card number
                      </label>
                      <div>
                        <input
                          class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="0000 0000 0000 0000"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="mb-3 -mx-2 flex items-end">
                      <div class="px-2 w-1/4">
                        <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Expiration date
                        </label>
                        <div>
                          <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                            <option value="01">01 - January</option>
                            <option value="02">02 - February</option>
                            <option value="03">03 - March</option>
                            <option value="04">04 - April</option>
                            <option value="05">05 - May</option>
                            <option value="06">06 - June</option>
                            <option value="07">07 - July</option>
                            <option value="08">08 - August</option>
                            <option value="09">09 - September</option>
                            <option value="10">10 - October</option>
                            <option value="11">11 - November</option>
                            <option value="12">12 - December</option>
                          </select>
                        </div>
                      </div>
                      <div class="px-2 w-1/4">
                        <select class="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="2029">2029</option>
                        </select>
                      </div>
                      <div class="px-2 w-1/4">
                        <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Security code
                        </label>
                        <div>
                          <input
                            class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="000"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full p-3">
                  <label for="type2" class="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-indigo-500"
                      name="type"
                      id="type2"
                    />
                    <Image src="/bca.png" alt="Logo" width={80} height={21} />
                    <p className="pl-2 font-bold text-blue-800 "> Virtual Account</p>
                  </label>
                  <div className='text-center pt-10 pb-10 font-medium text-gray-600 '>
                    <p>Tranfer ke Virtual Account Bca</p>
                    <p>12345000001235</p>
                    <p className='hover:text-red-500'>Salin</p>
                  </div>
                </div>
              </div>
              <div>
                <button class="block w-full max-w-xs mx-auto hover:bg-blue-500 bg-[#555486] text-white rounded-lg px-3 py-2 font-semibold">
                  PAY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
