import Link from 'next/link'
import React from 'react'

function Sidebar() {
    return (
        <div className="xl:ps-10 2xl:ps-32 mb-10 lg:mb-0 lg:px-4 pb-4 rounded-lg order-1">
            <h3 className="text-lg md:text-xl font-semibold mb-4">Table of Contents</h3>
            <ul className="space-y-3 capitalize">
                <li><Link href={"#introduction"} className="md:text-lg font-medium text-blue hover:underline">introduction</Link></li>
                <li><Link href={"#information-we-collect"} className="md:text-lg font-medium text-blue hover:underline">information we collect</Link></li>
                <li><Link href={"#use-of-your-information"} className="md:text-lg font-medium text-blue hover:underline">use of your information</Link></li>
                <li><Link href={"#disclosure-of-your-information"} className="md:text-lg font-medium text-blue hover:underline">disclosure of your information</Link></li>
                <li><Link href={"#security-of-your-information"} className="md:text-lg font-medium text-blue hover:underline">security of your information</Link></li>
                <li><Link href={"#policy-for-children"} className="md:text-lg font-medium text-blue hover:underline">policy for children</Link></li>
                <li><Link href={"#changes-to-this-privacy-policy"} className="md:text-lg font-medium text-blue hover:underline">changes to this privacy policy</Link></li>
                <li><Link href={"#your-consent"} className="md:text-lg font-medium text-blue hover:underline">your consent</Link></li>
                <li><Link href={"#contact-us"} className="md:text-lg font-medium text-blue hover:underline">contact us</Link></li>
                <li><Link href={"#terms-of-service"} className="md:text-lg font-medium text-blue hover:underline">terms of service</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
