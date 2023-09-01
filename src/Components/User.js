import { useUsersContext } from '../Hooks/useUsersContext';

const User = ({ user}) => {
    const { id, name } = user
    const { users, setUsers } = useUsersContext()
    const handelDelete = (id) => {
        const filterUser = users.filter((user) => user.id !== id)
        setUsers(filterUser)
       


    }
    return (
        <div className='bg-gray-500 py-5'>
            <h1 className='text-center text-black'>{id}</h1>
            <h1 className='text-center text-black'>{name}</h1>
            <button onClick={() => handelDelete(id)} className='btn bg-red-500 p-4 rounded-2xl'>Delete</button>
        </div>
    );
};

export default User;