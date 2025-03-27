import Image from 'next/image';
import Link from 'next/link';

export default function About() {

  return (
    <div className='container'>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto p-6 text-center mt-10">
        <h1 className="text-4xl font-bold mt-4">Terms & Condition</h1>
        {/* <div className="relative w-full h-64 mb-6">
          <Image
            src="/assets/privacy.jpg"
            alt="Travel Banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div> */}
          <div className="mt-6 text-left text-lg space-y-4">
          <b>User Agreement</b><br></br>
          Vinayak Construction Company (“Vinayak”, “we”, or “us” as the context requires) allows you to use this website under the following terms and conditions. By accessing this website or viewing, downloading, copying, or using any content on the website, you acknowledge that you are aware of these terms and conditions and agree to be bound by them. If you do not agree to these terms, please do not use this site.<br></br><br></br>

          <b>Liabilities and Indemnity</b><br></br>
          This website may contain forward-looking statements. Vinayak Construction Company disclaims any obligation to update or revise forward-looking statements due to events, new information, or other circumstances. We make no claim, guarantee, or warranty regarding the accuracy, completeness, or suitability of the information, materials, or content found on this website for any specific purpose.<br></br><br></br>

          Your use of this website is at your own risk. Under no circumstances shall Vinayak Construction Company be liable for any loss or damage, including indirect, incidental, or consequential damages, regardless of the cause, including negligence, gross negligence, or willful misconduct by Vinayak Construction Company or its agents.<br></br>

          You agree to indemnify and hold harmless Vinayak Construction Company, its affiliates, subsidiaries, staff, agents, and contractors from any claims, damages, liabilities, costs, and expenses arising from your use of the website, whether directly or indirectly.<br></br><br></br>

          Third-party links on this website may redirect you to external sites that operate independently of Vinayak Construction Company. The presence of these links does not imply affiliation, approval, or endorsement by us. We provide these links as a convenience and make no warranties regarding the content, security, or reliability of any third-party site. Your use of such sites is at your own risk.<br></br><br></br>

          Vinayak Construction Company reserves the right to modify, update, or change the materials, content, and information on this website at any time, including this User Agreement and Privacy Policy. We encourage you to review this agreement periodically to stay informed of any updates.<br></br><br></br>

          <b>Copyright and Intellectual Property</b><br></br>
          All content, information, and data on this website are protected by copyright and other intellectual property rights owned by Vinayak Construction Company or its licensors. Unauthorized downloading, retransmission, reproduction, or modification of website content is strictly prohibited and constitutes a violation of intellectual property laws.<br></br>

          For any inquiries regarding this User Agreement, please contact us at <Link href='/contact'><b>Contact Us</b></Link>

          </div>
      </div>
    </div>
    </div>
  );
}
