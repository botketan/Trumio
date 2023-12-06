import React from 'react'

const ChatComponent = ({props}) => {
  return (
    <>
    {/* style={props.role==='user' ? {maxWidth:420} : {maxWidth:600}} */}
    {/* ${props.role==='user' ? 'bg-blue-600 : bg-sky-200 } */}
        {props.role==="system" ? ""
        :<div className={props.role==='user' ? `container float-right text-white` : `container float-left text-black`} style={props.role==='user' ? {maxWidth:420,} : {maxWidth:600,}}>
            {props.role==='user' ? <div className='float-right rounded-l-2xl rounded-tr-2xl px-4 py-2 mb-4 mr-4' style={{backgroundColor:"#0578FB"}}>{props.content}</div>:<pre className='float-left rounded-r-2xl rounded-tl-2xl px-4 py-2 mb-4 ml-4' style={{backgroundColor:"#c3dfff"}}>{props.content}</pre>}                             
        </div>}
    </>
  )
}

export default ChatComponent