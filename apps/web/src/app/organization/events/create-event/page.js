'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import NavbarOrg from '@/components/NavbarOrg';
import NavbarSide from '@/components/NavbarSide';

const Create = () => {
  const price_type_enum = { FREE: 'FREE', PAID: 'PAID' };
  const category_enum = {
    hobby: 'Hobby',
    concert: 'Concert',
    attraction: 'Attraction',
    beauty: 'Beauty',
  };

  const [tittle, settittle] = useState('');
  const [description, setdescription] = useState('');
  const [img, setimg] = useState('');
  const [date_event, setdate_event] = useState('');
  const [price_type, setprice_type] = useState(price_type_enum.FREE);
  const [category, setcategory] = useState(price_type_enum.concert);
  const [price, setprice] = useState('');
  const [place, setplace] = useState('');
  const [seats, setseats] = useState('');
  const [terms, setterms] = useState('');
  const [time, settime] = useState('');
  const [rating, setrating] = useState('');
  const [available, setavailable] = useState('');

  const router = useRouter();

  const handleSubmit = async () => {
    // console.log(place)

    try {
      const response = await axios.post(
        'http://localhost:8000/event/create-event',
        {
          tittle: tittle,
          description: description,
          img: img,
          date_event: date_event,
          price_type: price_type,
          price: price,
          place: place,
          seats: seats,
          terms: terms,
          time: time,
          category: category,
        },
      );

      if (response.status === 201) {
        console.log('succses');
        router.push('/organization');
      } else {
        console.log(gagal);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log;
  return (
    <div className="bg-[#9c9cc0]">
      <NavbarSide />
      <div className="pt-[50px]">
        <div className="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto rounded-xl my-20 ">
          <h2 className="text-2xl font-bold text-center ">
            Make Your Own Event
          </h2>
          <p className="my-4 opacity-70 text-center">
            Adipisicing elit. Quibusdam magnam sed ipsam deleniti debitis
            laboriosam praesentium dolorum doloremque beata.
          </p>
          <hr className="my-6" />
          <form action={handleSubmit}>
            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-left
                                             font-bold text-gray-600"
              >
                Tittle
              </label>
              <input
                value={tittle}
                onChange={(e) => settittle(e.target.value)}
                type="text"
                id="name"
                placeholder="Tittle"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
              />
            </div>

            <div>
              <div className="flex items-center mb-5">
                <label
                  className=" w-20 mr-6 text-left 
                                             font-bold text-gray-600"
                >
                  Image
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 w-[540px] border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <label
                      value={img}
                      onChange={(e) => setimg(e.target.value)}
                      for="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span class="">Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                      />
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                    <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-left 
                                             font-bold text-gray-600"
              >
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              >
                {Object.values(category_enum).map((enumValue) => (
                  <option key={enumValue} value={enumValue}>
                    {enumValue}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-left 
                                             font-bold text-gray-600"
              >
                Date
              </label>
              <input
                value={date_event}
                onChange={(e) => setdate_event(e.target.value)}
                type="date"
                id="date"
                placeholder="date"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
              />
            </div>
            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-left 
                                             font-bold text-gray-600"
              >
                Location
              </label>
              <input
                value={place}
                onChange={(e) => setplace(e.target.value)}
                type="text"
                id="name"
                placeholder="Name"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-left 
                                             font-bold text-gray-600"
              >
                Description
              </label>
              <input
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                type="text"
                id="name"
                placeholder="Name"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-left 
                                             font-bold text-gray-600"
              >
                Terms
              </label>
              <input
                value={terms}
                onChange={(e) => setterms(e.target.value)}
                type="text"
                id="name"
                placeholder="Name"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-left 
                                             font-bold text-gray-600"
              >
                Seats
              </label>
              <input
                value={seats}
                onChange={(e) => setseats(e.target.value)}
                type="number"
                id="number"
                placeholder="number"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
              />
            </div>

            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-left 
                                             font-bold text-gray-600"
              >
                Time
              </label>
              <input
                value={time}
                onChange={(e) => settime(e.target.value)}
                type="time"
                id="time"
                placeholder="time"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
              />
            </div>
            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-left 
                                     font-bold text-gray-600"
              >
                Ticket Category
              </label>

              <select
                value={price_type}
                onChange={(e) => setprice_type(e.target.value)}
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 text-gray-600 placeholder-gray-400 outline-none"
              >
                {Object.values(price_type_enum).map((enumValue) => (
                  <option key={enumValue} value={enumValue}>
                    {enumValue}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center mb-5">
              <label
                className="inline-block w-20 mr-6 text-left 
                                             font-bold text-gray-600"
              >
                Price
              </label>
              <input
                value={price}
                onChange={(e) => setprice(e.target.value)}
                type="number"
                id="number"
                placeholder="number"
                className="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                                  text-gray-600 placeholder-gray-400
                                  outline-none"
              />
            </div>

            <div className="text-right">
              <button
                type="button"
                onClick={handleSubmit()}
                className="py-3 px-8 bg-[#555486] hover:bg-blue-500 text-white font-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Create;
