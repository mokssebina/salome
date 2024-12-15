import React from 'react'

const MessageItem = ({message, name, openModal}) => {
  return (
    <div onClick={openModal} className='relative w-full aspect-square flex flex-col pt-4 px-4 text-left space-y-4 cursor-pointer'>
        <p className='text-base line-clamp-4 mt-4'>{message}</p>
        <p className='absolute text-sm message bottom-[8%]'>{`From ${name}`}</p>
    </div>
  )
}

export default MessageItem