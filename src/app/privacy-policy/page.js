import Image from 'next/image';
import Link from 'next/link';

export default function About() {

  return (
    <div className='container'>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto p-6 text-center">
        <div className="relative w-full h-64 mt-14">
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
          <b>Cookies</b><br></br><br></br>
          We are committed to protecting your privacy at Vinayak Construction Company. We do not collect any personal information that you do not voluntarily provide, and we are the sole owners of all information collected on this site. We do not sell, share, or rent this information in any way that is not mentioned in this statement.<br></br><br></br>

          <b>Third Parties</b><br></br><br></br>
          Vinayak Construction Company may share aggregated statistical data about our customers, website traffic, and related usage information with third parties. This data reflects site usage patterns but does not include behavioral or identifying details about any individual, unless explicitly permitted by the user.<br></br><br></br>
          Additionally, we may provide log files and other user-related data to third-party services for website traffic analysis to improve our content offerings. Vinayak Construction Company may also work with third-party companies to deliver email newsletters and promotional messages.<br></br><br></br>
          Our website may use third-party advertising services, which could collect information about your visits to our and other websites to provide advertisements based on your interests. Additionally, we may share website usage data with these third-party advertisers to manage and target advertisements effectively. In the event of a business sale or asset transfer, customer information may be included as part of the transaction.<br></br><br></br>

          <b>Security</b><br></br><br></br>
          We take reasonable precautions to protect your personal information during browsing and transactions, ensuring it is only shared with trusted third parties that uphold similar privacy standards. However, we cannot be held responsible for any security breaches or actions of third-party services.<br></br><br></br>

          <b>Obtaining Your Consent</b><br></br><br></br>
          By using our website, you consent to Vinayak Construction Company collecting anonymous data for calculating site statistics. If you register with us, you authorize us to use the information you provide to personalize content and services. We may occasionally update this policy, so we encourage you to review it periodically.<br></br><br></br>

          <b>Questions</b><br></br><br></br>
            If you need to update your information or have any questions regarding our Privacy Policy, please <Link href='/contact'><b>Contact Us</b></Link><br></br><br></br>
          </div>
      </div>
    </div>
    </div>
  );
}
