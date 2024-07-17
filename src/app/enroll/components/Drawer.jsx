"use client"
import React from 'react'

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import Image from 'next/image';
import successImg from "./success.svg"
function Drawer({ open, handleOpen }) {

    return (
        <Dialog className='pb-5' open={open} handler={handleOpen}>
            <DialogHeader className='flex justify-center mb-10'>
                <Image width={200} height={200} src={successImg} alt='successImg' />
            </DialogHeader>
            <DialogBody>
                <p className='font-semibold text-black text-lg text-center'>Your information has been successfully submitted, and we will contact you as soon as possible.</p>
            </DialogBody>
            <DialogFooter>
                <Button variant="gradient" className="bg-blue mx-auto text-lg py-3 px-14 hover:opacity-80" onClick={handleOpen}>
                    Okay
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default React.memo(Drawer)
