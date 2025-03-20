import Image from 'next/image';

export default function About() {

  return (
    <div className='container'>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-lg mb-6">
          Welcome to our travel platform, where adventure meets convenience.
          Discover unforgettable destinations and seamless experiences.
        </p>
        <div className="relative w-full h-64 mb-6">
          <Image
            src="/assets/privacy.jpg"
            alt="Travel Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-medium shadow-md transition duration-300 hover:bg-blue-600"
        >
        </button>
          <div className="mt-6 text-left text-lg space-y-4">
            <p>
              Our mission is to provide travelers with the best travel
              packages, personalized recommendations, and seamless booking
              experiences. From breathtaking landscapes to vibrant cultures,
              we bring the world closer to you.
            </p>
            <p>
              Join us on an exciting journey and create lifelong memories with
              our carefully curated tours and travel services.
            </p>
          </div>
      </div>
    </div>
    </div>
  );
}
