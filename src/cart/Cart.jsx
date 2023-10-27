import React from 'react'
import {
    Dialog,
    DialogHeader,
    DialogBody,
   
} from "@material-tailwind/react";

const Cart = ({ openModal, setOpen }) => {
    return (
      <div>
        <>
          <Dialog
            open={openModal}
            handler={() => setOpen(false)}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
          >
            <DialogHeader>Its a simple dialog.</DialogHeader>
            <DialogBody>
              The key to more success is to have a lot of pillows. Put it this
              way, it took me twenty five years to get these plants, twenty five
              years of blood sweat and tears, and I&apos;m never giving up,
              I&apos;m just getting started. I&apos;m up to something. Fan luv.
            </DialogBody>
          </Dialog>
        </>
      </div>
    );
}

export default Cart