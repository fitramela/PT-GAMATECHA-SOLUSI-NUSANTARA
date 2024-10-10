import { useQuery } from 'react-query';
import axios from 'axios';

const fetchUserDetails = async () => {
  const token = localStorage.getItem('token');
  const { data } = await axios.get('http://103.175.216.126:8000/api/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const UserProfile = () => {
  const { data: user, error } = useQuery('user', fetchUserDetails);

  if (error) return <div>Error loading user profile</div>;
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-xl">{user.username}</h1>
      <p>Email: {user.email}</p>
      {/* Other user information */}
    </div>
  );
};

export default UserProfile;
