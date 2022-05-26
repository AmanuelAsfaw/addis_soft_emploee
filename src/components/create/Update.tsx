import { useEffect } from "react"

const UpdateEmployee = ({id}:{id: string}) => {
    useEffect(() => {
        if(id !== '' || id !== null){
            
        }
    }, [id])
    return <div>Update Emp {id}</div>
}

export default UpdateEmployee