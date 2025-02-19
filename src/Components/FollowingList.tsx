type FollowingListProps = {
    type: String;
  };
  const FollowingList: React.FC<FollowingListProps> = ({ type }) => {
    const followings = [
        { id: 1, name: "John Doe", img: "https://images.pexels.com/photos/30327284/pexels-photo-30327284/free-photo-of-black-and-white-portrait-of-a-tabby-cat.jpeg" },
        { id: 2, name: "Jane Smith", img: "https://images.pexels.com/photos/30327284/pexels-photo-30327284/free-photo-of-black-and-white-portrait-of-a-tabby-cat.jpeg" },
        { id: 3, name: "Mike Johnson", img: "https://images.pexels.com/photos/30327284/pexels-photo-30327284/free-photo-of-black-and-white-portrait-of-a-tabby-cat.jpeg" },
        { id: 4, name: "Emily Davis", img: "https://images.pexels.com/photos/30327284/pexels-photo-30327284/free-photo-of-black-and-white-portrait-of-a-tabby-cat.jpeg" },
        { id: 5, name: "Chris Brown", img: "https://images.pexels.com/photos/30327284/pexels-photo-30327284/free-photo-of-black-and-white-portrait-of-a-tabby-cat.jpeg" },
    ];

    return (
        <ul className="space-y-3">
            {followings.map((user) => (
                <li
                    key={user.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                    <div className="flex items-center space-x-3">
                        <img
                            src={user.img}
                            alt={user.name}
                            className="w-10 h-10 rounded-full"
                        />
                        <p className="flex-col flex items-start justify-center ">
                            <span className="font-medium text-sm">{user.name}</span>
                            <span className="font-normal text-xs text-gray-500">Follows you</span>
                        </p>
                    </div>
                    {type === "following" ? (<svg
                        className="size-5 text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>) : (
                        <p className="text-xs text-blue-500">Follow</p>
                    )}
                    
                </li>
            ))}
        </ul>
    )
}

export default FollowingList;