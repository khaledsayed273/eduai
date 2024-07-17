import React from 'react'

function DisclosureOfYourInformation() {
    return (
        <div className='mt-16' id='disclosure-of-your-information'>
            <h3 className='capitalize mb-4 font-semibold lg:text-2xl'>disclosure of your information</h3>
            <ol className='ps-3' style={{ "listStyle": "thumbs" }}>
                <li className='xl:text-xl font-medium xl:leading-8 my-5'>
                    <span className='font-semibold'>By Law or to Protect Rights: </span>
                    Sharing information if necessary to respond to legal processes, investigate violations of policies, or protect the rights, property, and safety of others.
                </li>
                <li className='xl:text-xl font-medium xl:leading-8 my-5'>
                    <span className='font-semibold'>Third-Party Service Providers: </span>
                    Sharing information with third parties providing services such as payment processing, data analysis, email delivery, hosting, customer service, and marketing.
                </li>
                <li className='xl:text-xl font-medium xl:leading-8 my-5'>
                    <span className='font-semibold'>Business Transfers: </span>
                    Sharing or transferring information in connection with mergers, sales of assets, financing, or acquisitions.
                </li>
            </ol>
        </div>
    )
}

export default DisclosureOfYourInformation
