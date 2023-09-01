import User from './User';
import { useUsersContext } from '../Hooks/useUsersContext';

const Useres = () => {
  const {users}=  useUsersContext()
    return (
        <div className='grid m-4 grid-cols-2 gap-10'>
             {users.map(user=><User user={user} ></User>)}
        </div>
    );
};

export default Useres;