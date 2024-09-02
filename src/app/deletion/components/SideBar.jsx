import Link from 'next/link'
import React from 'react'

function Sidebar() {
    return (
        <div className="xl:ps-10 2xl:ps-32 mb-10 lg:mb-0 lg:px-4 pb-4 rounded-lg order-1">
            <h3 className="text-lg md:text-xl font-medium md:font-semibold mb-4">Table of Contents</h3>
            <ul className="space-y-3 capitalize">
                <li><Link href={"#HowToRequestAccountDeletion"} className="text-sm md:text-lg font-medium text-blue hover:underline">How to Request Account Deletion</Link></li>
                <li><Link href={"#StepsToDeleteYourAccount"} className="text-sm md:text-lg font-medium text-blue hover:underline">Steps to Delete Your Account</Link></li>
                <li><Link href={"#ImportantConsiderations"} className="text-sm md:text-lg font-medium text-blue hover:underline">Important Considerations</Link></li>
                <li><Link href={"#contact-us"} className="text-sm md:text-lg font-medium text-blue hover:underline">contact us</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
