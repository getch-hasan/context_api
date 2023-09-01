
import { useState } from 'react';
import { useUsersContext } from '../Hooks/useUsersContext';

const Createuser = () => {
    const [user, setUser] = useState('')
    const {setUsers}=useUsersContext()
    const handelUsername = (e) => {
        setUser(e.target.value)

    }
    const handelSubmit = (e) => {
        e.preventDefault()
        const newUser = { id: new Date().getTime().toString(), name: user }
        setUsers(preUser=>[...preUser,newUser])
        setUser('')
    }
    return (
        
        <div>
            <h1>Create User</h1>
            <form onSubmit={handelSubmit} className='grid justify-center gap-4'>
                <input onChange={handelUsername} type="text" required name="name" id="" placeholder='Enter Your Name' value={user} />
                <button className='btn p-2 bg-blue-800 text-white rounded-2xl'>Submit</button>
            </form>

        </div>
    );
};

export default Createuser;