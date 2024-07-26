interface Props {
    name: string;
    post_time: string;
    profile_img: string;
    message: string;
    edited: boolean;
    comments_count: number;
    message_type: string;
    setShowOverlay: (value: boolean) => void;
}

const MessageItem = (props: Props): JSX.Element => {
    const {name, post_time, profile_img, message, edited, comments_count, message_type, setShowOverlay} = props;

    return (
        <div className="border px-5 py-5 bg-neutral-900 border-gray-700 rounded-md mt-4 cursor-pointer" onClick={() => {
            setShowOverlay(true)
        }}>
            <div className="flex justify-between items-center">
                <div className="flex gap-4">
                    <img src={profile_img} alt={name} className="rounded-full w-11 h-11" />
                    <div className="flex flex-col">
                        <h4 className='text-gray-400 text-base'>{name}</h4>
                        <p className="text-neutral-600 items-center flex gap-1 text-sm">{post_time} 
                        {
                            edited && 
                            <>
                                <span className="rounded-full w-1 h-1 bg-neutral-600"></span>
                                <span className="text-neutral-600">Edited</span>
                            </>
                        }
                        </p>
                    </div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.83337 10C4.83337 10.8284 4.1618 11.5 3.33337 11.5C2.50495 11.5 1.83337 10.8284 1.83337 10C1.83337 9.17157 2.50495 8.5 3.33337 8.5C4.1618 8.5 4.83337 9.17157 4.83337 10ZM11.5 10C11.5 10.8284 10.8285 11.5 10 11.5C9.17161 11.5 8.50004 10.8284 8.50004 10C8.50004 9.17157 9.17161 8.5 10 8.5C10.8285 8.5 11.5 9.17157 11.5 10ZM16.6667 11.5C17.4951 11.5 18.1667 10.8284 18.1667 10C18.1667 9.17157 17.4951 8.5 16.6667 8.5C15.8383 8.5 15.1667 9.17157 15.1667 10C15.1667 10.8284 15.8383 11.5 16.6667 11.5Z" fill="#C5C7CA"/>
                    </svg>
                </div>
            </div>
            
            <div className="relative mt-5">
                <div className="flex justify-center items-center absolute top-3 left-3 text-lg rounded-full w-12 h-12 bg-neutral-800">{message_type}</div>
                <textarea disabled className='text-base w-full p-4 ps-[72px] rounded-md bg-neutral-950 text-neutral-600 placeholder:text-neutral-600' name='message' value={message} placeholder='How are you feeling today?' rows={3} />
            </div>
            <div className="flex gap-2 items-center mt-2">
                <img src="comments.svg" alt="comments" className="w-5 h-5" />
                <p className="text-neutral-600 text-sm">{comments_count} comments</p>
            </div>
        </div>
    )
}

export default MessageItem;