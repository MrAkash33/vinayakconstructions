// pages/stay.js
// import { useState } from 'react';
import Image from 'next/image';

export default function Stay() {
  // const [city, setCity] = useState('');
  // const [days, setDays] = useState(1);
  // const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`Booking in ${city} for ${days} days starting from ${date}`);
  };

  return (
    <div className="">
   <div className='container'>
                <div className="relative w-full h-64 mb-6">
                  <Image
                    src="/assets/stay.png"
                    alt="Travel Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg"
                  />
                </div>
       <div className="min-h-screen bg-gray-100 text-gray-900 flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Find Your Stay</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-lg font-medium">Select City</label>
            <select
              // onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="">Select a City</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium">Select Date</label>
            <input
              type="date"
              // onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium">Number of Days</label>
            <input
              type="number"
              min="1"
              // onChange={(e) => setDays(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg text-lg font-medium shadow-md transition duration-300 hover:bg-blue-600"
          >
            Search Stay
          </button>
        </form>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg overflow-hidden shadow-md">
            <Image src="/assets/room1.jpg" width={400} height={300} alt="Room 1" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Luxury Suite</h3>
              <p className="text-gray-600">$200/night</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-md">
            <Image src="/assets/room2.jpg" width={400} height={300} alt="Room 2" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Standard Room</h3>
              <p className="text-gray-600">$100/night</p>
            </div>
          </div>
          <div className="border rounded-lg overflow-hidden shadow-md">
            <Image src="/assets/room3.jpeg" width={400} height={300} alt="Room 3" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Budget Stay</h3>
              <p className="text-gray-600">$50/night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   </div>
  );
}
