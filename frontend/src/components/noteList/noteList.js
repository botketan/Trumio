import { GenericPlus } from '@heathmont/moon-icons-tw';
import Note from './note';
const noteList=()=>{
    const props={
        isPublished:true,
        title:"PizzaWizard hello world my name is Manas me hu kon ho aap ",
    }
    return <>
        <div className="container mx-auto shadow-xl rounded-lg p-4 border-2 " style={{width:"360px",height:"616px"}}>
            <div className='flex justify-between items-center'>
                <span className='py-6 ml-2 font-light'>Your Trunotes</span>
                <div>
                    <button className='flex items-center rounded-lg bg-cyan-100 p-1 '>
                        <GenericPlus className='h-6 w-6 mr-1 text-cyan-600'/>
                        <span className='text-cyan-600 pb-1 pr-1'>New Trunote</span>
                    </button>
                </div>
            </div>
            {/* map Notes here */}
            <Note props={props}/>
        </div>
    </>
}

export default noteList;