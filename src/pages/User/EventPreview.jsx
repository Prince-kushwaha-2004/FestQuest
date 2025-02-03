import React from 'react';
import { useParams } from 'react-router';
import data from '../../utils/data.json';
function EventPreview() {
    let params = useParams()
    let id = params.id
    const EventData = data.filter((value) => {
        return value.id == id
    })[0]

    return (
        <div className='w-full flex justify-center'>
            <div className='flex-1 w-full flex flex-col'>
                <img src={EventData.img} alt="image" className='m-8 w-[95%] h-[40%] rounded-3xl' />
                <div className='mx-8'>
                    <div className="flex gap-4">
                        <img
                            src={EventData.logo}
                            alt=""
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h1 className="font-bold text-2xl cursor-pointer">
                                {EventData.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-120 bg-green-200' >das</div>
        </div>
    )
}

export default EventPreview