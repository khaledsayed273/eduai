import React from 'react'

function ChangesToTerms() {
    return (
        <div className='mt-10 lg:mt-16' id='changes-to-terms'>
            <h3 className='capitalize mb-4 font-semibold lg:text-2xl'>changes to terms</h3>
            <ol>
                <li className='xl:text-xl font-medium xl:leading-8 my-5'>
                    <span className='font-semibold'>Right to Change: </span>
                    {`We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion`}
                </li>
                <li className='xl:text-xl font-medium xl:leading-8 my-5'>
                    <span className='font-semibold'>Continuing to Use: </span>
                    By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service
                </li>
            </ol>
        </div>
    )
}

export default ChangesToTerms
