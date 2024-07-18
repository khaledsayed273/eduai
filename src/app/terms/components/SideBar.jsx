import Link from 'next/link'
import React from 'react'

function Sidebar() {
    return (
        <div className="xl:ps-10 2xl:ps-32 mb-10 lg:mb-0 lg:px-4 pb-4 rounded-lg order-1">
            <h3 className="text-lg md:text-xl font-medium mb-4">Table of Contents</h3>
            <ul className="space-y-3 capitalize">
                <li><Link href={"#introduction"} className="md:text-lg font-medium text-blue hover:underline">introduction</Link></li>
                <li><Link href={"#acceptance-of-terms"} className="md:text-lg font-medium text-blue hover:underline">acceptance of terms</Link></li>
                <li><Link href={"#accounts"} className="md:text-lg font-medium text-blue hover:underline">accounts</Link></li>
                <li><Link href={"#intellectual-property"} className="md:text-lg font-medium text-blue hover:underline">intellectual property</Link></li>
                <li><Link href={"#user-content"} className="md:text-lg font-medium text-blue hover:underline">user content</Link></li>
                <li><Link href={"#prohibited-uses"} className="md:text-lg font-medium text-blue hover:underline">prohibited uses</Link></li>
                <li><Link href={"#termination"} className="md:text-lg font-medium text-blue hover:underline">termination</Link></li>
                <li><Link href={"#governing-law"} className="md:text-lg font-medium text-blue hover:underline">governing law</Link></li>
                <li><Link href={"#changes-to-terms"} className="md:text-lg font-medium text-blue hover:underline">changes to terms</Link></li>
                <li><Link href={"#contact-us"} className="md:text-lg font-medium text-blue hover:underline">contact us</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar
