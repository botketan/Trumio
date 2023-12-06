const CommentInput = (comment, user) => {
    return (
        <div className="flex items-center gap-3 p-1">
        <div className="flex flex-shrink-0 items-center">
                <img className="w-10 h-10 rounded-full" src={user.icon} alt="Profile pic" />
            </div>
        <div className="flex gap-2 border border-neutral rounded-md items-center justify-center px-4 py-3 w-full">
        <div className="mt-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Icon" opacity="0.7">
  <path id="comment-add" d="M9.75002 10.875H14.25M12 8.62499L12 13.125M5.25 7.875L5.25 17.6536C5.25 18.2663 5.94485 18.6205 6.44064 18.2605L8.88461 16.4861L15.75 16.4861C17.4069 16.4861 18.75 15.143 18.75 13.4861V7.87502C18.75 6.21816 17.4069 4.87502 15.75 4.87502L8.25001 4.875C6.59315 4.875 5.25 6.21814 5.25 7.875Z" stroke="#595D62" stroke-width="1.5" stroke-linecap="round"/>
  </g>
  </svg></div>
  
            
            <div className="flex w-full items-center justify-between">
                <input
                className="w-full h-full form-input text-sm focus:outline-none"
                placeholder="Write a reply..."
                />
                <button className="w-5 h-5 relative ">
                    <img src="sendSVG.svg" alt="Send SVG" className="w-full h-full"/>
                </button>
            </div>
        </div>
        </div>
    );
  }
  
  export default CommentInput;