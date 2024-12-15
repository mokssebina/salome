import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { messages } from "./arrayList";
import MessageItem from "./Components/MessageItem";
import confetti from "canvas-confetti";
import light from './Assets/Birthday-01.png';
import dark from './Assets/Birthday-02.png';
import coverImage from './Assets/Salome-01.png';
import coverImageDark from './Assets/Salome-02.png';
import boImage from './Assets/tst,small,507x507-pad,600x600,f8f8f8-Photoroom.png'
import sound from './Assets/Airhorn.mp3'
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { use } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";




function App() {

  const [day, setDay] = useState(true);
  const [disable, setDisable] = useState(false);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(null);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('')

  const [playSound] = useSound(sound);

  var count = 200;
  var defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  const shootConfetti = () => {
    setDisable(true)
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
    playSound()
    setTimeout(() => {
      setDisable(false)
    }, 3000)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setSize(null)
    setMessage('')
    setName('')
    setOpen(false)
  }

  const openModal = (modalSize, selectedMessage, selectedName) => {
    setSize(modalSize)
    setMessage(selectedMessage)
    setName(selectedName)
    setOpen(true)
  }


  return (
    <div className={`relative w-screen h-screen ${day ? 'bg-[#cee5f0]' : 'bg-[#283038]'}`}>

      <Dialog className={`${day ? 'bg-[#cee5f0]' : 'bg-[#283038]'}`} open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="w-full h-10">
            <button onClick={handleClose} className={`absolute w-10 h-10 text-lg p-1 right-1 ${day ? 'text-gray-900' : 'text-gray-50'}`}>
              <XMarkIcon />
            </button>
          </div>
        </DialogHeader>
        <DialogBody>
          <div className="w-full h-72 md:h-80 flex flex-row">
            <div className={`relative w-full h-72 md:h-80 flex flex-col pt-4 px-4 text-left space-y-4 cursor-pointer ${day ? 'text-gray-900' : 'text-gray-50'}`}>
              <div className="w-full h-[90%] overflow-scroll">
                <p className='text-sm md:text-base mt-1'>{message}</p>
              </div>
              <div className="w-full h-[10%]">
                <p className='text-xs md:text-sm message mt-2'>{`From ${name}`}</p>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>

      <div style={{ transition: 'background-image 1s' }} className={`relative w-screen h-screen bg-center bg-cover`}>

        <img className="w-full h-full object-cover" src={`${day ? light : dark}`} />

        <div className="absolute z-10 top-0 pt-5 w-full h-full flex flex-col">

          <div className="relative w-full h-[30%]">

            <Header day={day} setDay={() => setDay(!day)} />

            <button onClick={shootConfetti} disabled={disable} className="relative w-48 h-24 mx-auto mt-28 md:mt-24 flex flex-row bg-green-500 rounded-lg border-2 border-gray-50 cursor-pointer hover:shadow-md">

              <div className="relative h-full aspect-square">

                <img className="w-full h-full object-cover" src={boImage} />

              </div>

              <p className="relative confetti-button-text text-2xl mt-7">Click me!</p>

            </button>

          </div>

          <div className="relative w-full h-[70%]">

            <div style={{ transition: 'background-image 1.5s' }} className={`absolute w-full h-full left-0 aspect-portrait md:aspect-square md:w-3/4 md:left-[12.5%] lg:w-[50%] lg:left-[25%] xl:w-[40%] xl:left-[30%] bottom-0 bg-center`}>

              <img className="w-full h-full object-contain" src={`${day ? coverImage : coverImageDark}`} />

            </div>

          </div>

          <audio id="audio_tag" src={sound} />

        </div>

      </div>

      <div className={`relative w-screen h-auto ${day ? 'bg-[#cee5f0]' : 'bg-[#283038]'} border-none`}>

        <div className={`w-full md:w-4/5 lg:w-3/5 h-full mx-auto py-2 ${day ? 'text-gray-900' : 'text-gray-50'}`}>

          <div className="w-full p-4">

            <p className="mt-20 text-lg justify-start">
              Happy Birthday my love. Grace is defined as undeserved favour. It is not earned and is freely given. Having you in my life and to be loved by you is the perfect example of grace. You are my heartbeat and I love you, forever and whatever comes after. You're important to so many people and few signed your card to show you how much they care. Keep scrolling to see...
            </p>

          </div>

          <div className="w-full h-auto mt-20 relative grid grid-flow-row-dense grid-cols-2 md:grid-cols-3">

            {messages.map((item) => (
              <MessageItem openModal={() => openModal('xs', item.message, item.first_name)} key={item.id} message={item.message} name={item.first_name} />
            ))}

          </div>

        </div>

      </div>

      <Footer day={day} />

    </div>
  );
}

export default App;
