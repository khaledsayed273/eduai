import React from 'react'

function ImportantConsiderations() {
    return (
        <div className='mt-10 md:mt-16' id='ImportantConsiderations'>
            <h3 className='capitalize mb-4 font-medium md:font-semibold lg:text-2xl'>Important Considerations:</h3>
            <ol className='ps-3' style={{ "listStyle": "unset" }}>
                <li className='text-sm lg:text-xl md:font-medium xl:leading-8 my-5'>
                    <span className='font-medium md:font-semibold'>Irreversibility: </span>
                    Please note that account deletion is permanent and cannot be undone. Once your account is deleted, all associated data, including your profile information, academic records, and any personalized settings, will be permanently removed from our system.
                </li>
                <li className='text-sm lg:text-xl md:font-medium xl:leading-8 my-5'>
                    <span className='font-medium md:font-semibold'>Alternative: </span>
                    If you are experiencing issues with our service, or have concerns, please reach out to our support team. We may be able to resolve your concerns without the need to delete your account.
                </li>
                
            </ol>
        </div>
    )
}

export default ImportantConsiderations
