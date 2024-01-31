'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Card = () => {
  const [event, setEvents] = useState([]);
  useEffect(() => {
    getEvent();
  }, []);
  console.log('hi', event);
  async function getEvent(slug) {
    try {
      const res = await axios.get('http://localhost:8000/event/event-card', {
        params: {
          'fields.slug': slug,
          limit: 1,
          content_type: 'event',
        },
      });
      console.log(res);
      setEvents(res.data.getEvents);
    } catch (error) {
      throw new Error('Failed to fetch event data');
    }
  }

  return (
    <div class="px-6 py-12 text-center  md:px-12 lg:text-left ">
      <div class=" md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 space-y-4 md:space-y-0">
        {event.slice(0, 4).map((data, index) => (
          <div
            key={index}
            class=" max-w-[18rem] bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          >
            <div className="relative">
              <Image
                className="w-full rounded-xl"
                src={data.img}
                alt="Colors"
                width={100}
                height={400}
              />

            </div>
            <h1 class="pb-1 mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
              {data.tittle}
            </h1>
            <div class="my-4">
              <div class="pb-1 items-center">
                <p className="pb-1">{data.date_event}</p>
                <p>{data.time}</p>
              </div>
              <div class="pb-1 space-x-1 items-center">
                <p>{data.place}</p>
              </div>
              <div class=" space-x-1 items-center">
                <p>Rp. {data.price}</p>
              </div>
              <Link href="/event">
                {' '}
                <button class="mt-4 text-xl w-full text-white bg-[#555486] py-2 rounded-xl shadow-lg">
                  Buy Ticket
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
