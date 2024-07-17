import React from 'react'

function ProhibitedUses() {
    return (
        <div className='mt-10 lg:mt-16' id='prohibited-uses'>
            <h3 className='capitalize mb-4 font-semibold lg:text-2xl'>prohibited uses</h3>
            <p className='xl:text-xl font-medium xl:leading-8'>
                You may use the Service only for lawful purposes and in accordance with the Terms. You agree not to use the Service:
            </p>
            <ol className='ps-3' style={{ "listStyle": "thumbs" }}>
                <li className='xl:text-xl font-medium xl:leading-8 my-5'>
                    In any way that violates any applicable national or international law or regulation.</li>
                <li className='xl:text-xl font-medium xl:leading-8 my-5'>
                    For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise</li>
                <li className='xl:text-xl font-medium xl:leading-8 my-5'>
                    {`To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter", "spam", or any other similar solicitation`}
                </li>
                <li className='xl:text-xl font-medium xl:leading-8 my-5'>
                    To impersonate or attempt to impersonate EduAI System, an EduAI System employee, another user, or any other person or entity
                </li>
                <li className='xl:text-xl font-medium xl:leading-8 my-5'>
                    {`To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm EduAI System or users of the Service, or expose them to liability`}
                </li>
            </ol>
        </div>
    )
}

export default ProhibitedUses
