import { useMutation, queryClient, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';
import { addDPT, getDPTs } from '../../APIs/addDptAPI';

const AddDepertment = () => {
    const queryClient = useQueryClient()

    // const {
    //     isLoading,
    //     isError,
    //     error,
    //     data: depertments
    // } = useQuery('depertments', getDPTs, {
    //     select: data => data.sort()
    // })

    // const addDepertmentMutation = useMutation(addDPT, {
    //     onSuccess: () => {
    //         // Invalidates cache and refetch 
    //         queryClient.invalidateQueries("depertments")
            
    //     }
    // })

    const {data:depertments =[], refetch, isLoading} = useQuery({
        queryKey:['depertments'],
        queryFn: async () => {
            const res = await fetch(`https://origin-hospital-server.vercel.app/depertments`);
            const data = await res.json();
            return data;
        } 
        
    })
console.log(depertments);
    const handleAddDepertment = event => {
        event.preventDefault();
        const depertment = event.target.depertment.value;

        const depertmentData = {
            depertmentName : depertment,
            depertmentURL: depertment.toLowerCase().replace(' ', '-')
        }


        console.log(depertmentData);
        fetch('https://origin-hospital-server.vercel.app/depertments', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(depertmentData)
    }).then(res=> res.json())
    .then(data => {
        console.log(data)
        if(data.acknowledged){
            toast.success('Service added succesfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                event.target.reset()
            refetch()
        }
        else{
            toast.error(data.message)
        }
        
        
    })

   

    
        
    }

    const handleDltDPT = depertment => {
        const agree = window.confirm(`Are you want to delete ${depertment.depertmentName} depertment?`)
        console.log(agree)
        if(agree){
        fetch(`https://origin-hospital-server.vercel.app/delete-depertments/${depertment._id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result=>{
            console.log(result)
            if(result.deletedCount){
                refetch()
                toast.success('Depertment deleted successfully')
            }
            
        })}
    }
    return (
        <>
        <div className="overflow-x-auto max-w-3xl">
                        <table className="table w-full">

                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {depertments?.map(depertment => <tr>
                                    <td>{depertment.depertmentName}</td>
                                    <td><button className='btn btn-xs btn-error'>Edit</button></td>
                                    <td><button onClick={()=> handleDltDPT(depertment)} className='btn btn-xs btn-error'>Delete</button></td>
                                </tr>)}

                            </tbody>
                        </table>
                    </div>


        <div className='max-w-3xl  mt-3
        '>
            <form onSubmit={handleAddDepertment}>
                        <input className="input input-bordered w-full max-w-3xl  
                             min-h-16
                             textarea textarea-error
                            mx-auto p-5"   type={"text"} name={'depertment'} placeholder={"Add depertment"}>
                        </input>
                       
                        <br />
                        <button className='btn  btn-error  btn-sm m-5 mt-1 ml-1' type="submit">Add depertment</button>
                        
                    </form>
        </div>
        </>
    );
};

export default AddDepertment;