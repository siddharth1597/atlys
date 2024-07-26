import { useState } from "react";

interface Props {
    setShowOverlay: (value: boolean) => void;
}
const CreatePost = (props: Props) => {
    const {setShowOverlay} = props;

    return (
        <div className="border px-5 py-5 bg-neutral-900 border-gray-700 rounded-md mt-10">
            <span className='text-gray-400 text-lg'>Create post</span>
            <form className='form flex flex-col mt-4' onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                    <img src="post_icon.png" alt="icon" className="absolute top-3 left-3 w-12 h-12" />
                    <textarea className='w-full p-4 ps-[72px] rounded-md bg-neutral-950 text-white placeholder:text-neutral-600' name='message' placeholder='How are you feeling today?' />
                </div>
                <button className='mt-4 rounded-md bg-blue-500 text-white py-2 px-8 text-center ml-auto' onClick={() => {
                    setShowOverlay(true)
                }}>Post</button>
            </form>
        </div>
    )
}

export default CreatePost;