import React from 'react'

function Considerations() {
    return (
        <div className='mt-10 md:mt-16' id='StepsToDeleteYourAccount'>
            <h3 className='capitalize mb-4 font-medium md:font-semibold lg:text-2xl'>Steps to Delete Your Account:</h3>
            <ol className='ps-3' style={{ "listStyle": "unset" }}>
                <li className='text-sm lg:text-xl md:font-medium xl:leading-8 my-5'>
                    <span className='font-medium md:font-semibold'>Submit a Deletion Request: </span>
                </li>
                <li className='text-sm lg:text-xl md:font-medium xl:leading-8 my-5'>
                    {`Please email us at contact@expotech.online with the subject line "Account Deletion Request."`}
                </li>
                <li className='text-sm lg:text-xl md:font-medium xl:leading-8 my-5'>
                    In the body of the email, include your full name, registered email address, and a brief explanation of your request
                </li>
                <li className='text-sm lg:text-xl md:font-medium xl:leading-8 my-5'>
                    <span className='font-medium md:font-semibold'>Verification:</span>
                </li>
                <li className='text-sm lg:text-xl md:font-medium xl:leading-8 my-5'>
                    To ensure the security of your data, we may need to verify your identity before processing your request. You might be asked to confirm some details or provide additional information
                </li>
                <li className='text-sm lg:text-xl md:font-medium xl:leading-8 my-5'>
                    <span className='font-medium md:font-semibold'>Processing Your Request:</span>
                </li>
                <li className='text-sm lg:text-xl md:font-medium xl:leading-8 my-5'>
                    Once your request is verified, we will begin the deletion process. This process typically takes up to 10 business days
                </li>
                <li className='text-sm lg:text-xl md:font-medium xl:leading-8 my-5'>
                    Upon completion, you will receive a confirmation email informing you that your account and data have been permanently deleted
                </li>
            </ol>
        </div>
    )
}

export default Considerations
