import { Other3DotsHorizontal } from '@heathmont/moon-icons-tw';
const note=({props})=>{
    return <>
        <div className="container p-4 border-2 py-2 rounded-md mb-2" style={{height:"66px",width:"330px"}}>
            <div className='flex justify-between items-center overflow-hidden'>
                <div>
                    <div className='overflow-hidden' style={{height:"24px", width:"214x"}}>
                        <p className="font-medium">{props.title}</p>
                    </div>
                    <p className='font-light'>{`${props.isPublished ? "Published" : "Last edited"} 3m ago`}</p>
                </div>
                <div className='flex items-center'>
                    <span className={`${props.isPublished ? "text-purple-500 ": "text-yellow-500" } ${props.isPublished ? "bg-purple-100 ": "bg-yellow-100" } px-2 py-1 rounded-md font-medium`}>{props.isPublished ? "PUBLISHED" : "DRAFT"}</span>
                    <Other3DotsHorizontal className='h-6 w-6 ml-2'/>
                </div>
            </div>
        </div>
    </>
}

export default note;