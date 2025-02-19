import { GoPaperAirplane } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { LiaCommentDots } from "react-icons/lia";
import { MdMoreHoriz } from "react-icons/md";

const Feeds = () => {
    const posts = [
        {
            id: 1,
            user: "john_doe",
            profileImg: "https://randomuser.me/api/portraits/men/1.jpg",
            postImg: "https://images.pexels.com/photos/30713854/pexels-photo-30713854/free-photo-of-black-and-white-close-up-of-a-white-rose.jpeg",
            likes: 120,
            caption: "Enjoying the beauty of nature! 🌿",
            comments: 15,
        },
        {
            id: 2,
            user: "jane_smith",
            profileImg: "https://randomuser.me/api/portraits/women/2.jpg",
            postImg: "https://images.pexels.com/photos/30713854/pexels-photo-30713854/free-photo-of-black-and-white-close-up-of-a-white-rose.jpeg",
            likes: 98,
            caption: "City lights are mesmerizing ✨",
            comments: 8,
        },
        {
            id: 3,
            user: "alex_90",
            profileImg: "https://randomuser.me/api/portraits/men/3.jpg",
            postImg: "https://images.pexels.com/photos/30713854/pexels-photo-30713854/free-photo-of-black-and-white-close-up-of-a-white-rose.jpeg",
            likes: 143,
            caption: "Traveling is my therapy ✈️",
            comments: 22,
        },
        {
            id: 4,
            user: "emily_rose",
            profileImg: "https://randomuser.me/api/portraits/women/4.jpg",
            postImg: "https://images.pexels.com/photos/30713854/pexels-photo-30713854/free-photo-of-black-and-white-close-up-of-a-white-rose.jpeg",
            likes: 202,
            caption: "Food is the way to my heart ❤️",
            comments: 30,
        },
        {
            id: 5,
            user: "mike_adventure",
            profileImg: "https://randomuser.me/api/portraits/men/5.jpg",
            postImg: "https://images.pexels.com/photos/30713854/pexels-photo-30713854/free-photo-of-black-and-white-close-up-of-a-white-rose.jpeg",
            likes: 175,
            caption: "Climbing new heights! 🏔️",
            comments: 12,
        },
    ];

    return (
        <div className="w-full flex flex-col items-center space-y-6 ">
            {posts.map((post) => (
                <div key={post.id} className="w-full p-5  overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center p-4 ">
                            <img src={post.profileImg} alt={post.user} className="w-10 h-10 rounded-full mr-3" />
                            <span className="font-semibold text-sm">{post.user}</span>
                        </div>
                        <MdMoreHoriz className="mr-3" />
                    </div>
                    {/* Post Image */}
                    <img src={post.postImg} alt="Post" className="w-full h-[32rem]" />

                    {/* Action Buttons */}
                    <div className="flex justify-between p-4 text-xl">
                        <div className="flex space-x-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-6 cursor-pointer"
                            >
                                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-6 cursor-pointer"
                            >
                                <path d="M21 15a2 2 0 0 1-2 2H8l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2z" />
                            </svg>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-6 cursor-pointer"
                            >
                                <path d="M22 2 11 13" />
                                <path d="m22 2-7 20-4-9-9-4z" />
                            </svg>

                        </div>
                        
                    </div>

                    {/* Likes and Caption */}
                    <div className="px-4 pb-4">
                        <p className="font-semibold text-sm">{post.likes} likes</p>
                        <p className="text-sm"><span className="font-semibold">{post.user}</span> {post.caption}</p>
                        <p className="text-gray-500 text-sm">View all {post.comments} comments</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Feeds;
