import React, { useContext } from 'react';
import Loading from './Loading';
import FriendsSection from './friendsSection';

const FriendsContainer = () => {
    const { friends, loading } = useContext(FriendContext);
    return (
        <>
        <h2 className='pt-10 pb-4 text-[#1F2937] font-semibold text-[28px]'>Your Friends</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                loading ?  <Loading/> : 
                friends.map(friend => <FriendsSection key={friend.id} friend={friend} />)
            }
        </div>
            
        </>
    );
};

export default FriendsContainer;