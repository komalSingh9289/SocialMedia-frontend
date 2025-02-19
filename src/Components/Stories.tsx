import { IoIosAdd } from "react-icons/io";

const Stories = () => {
    const stories = [
        { id: 1, img: "https://images.pexels.com/photos/30713854/pexels-photo-30713854/free-photo-of-black-and-white-close-up-of-a-white-rose.jpeg" },
        { id: 2, img: "https://images.pexels.com/photos/30713854/pexels-photo-30713854/free-photo-of-black-and-white-close-up-of-a-white-rose.jpeg" },
        { id: 3, img: "https://images.pexels.com/photos/30713854/pexels-photo-30713854/free-photo-of-black-and-white-close-up-of-a-white-rose.jpeg" },
        { id: 4, img: "https://images.pexels.com/photos/30713854/pexels-photo-30713854/free-photo-of-black-and-white-close-up-of-a-white-rose.jpeg" },
        { id: 5, img: "https://images.pexels.com/photos/30713854/pexels-photo-30713854/free-photo-of-black-and-white-close-up-of-a-white-rose.jpeg" },
    ];

    return (
        <div className="w-full flex space-x-4 p-4 overflow-x-auto">

            <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 relative">
                    <img
                        src="https://images.pexels.com/photos/30327284/pexels-photo-30327284/free-photo-of-black-and-white-portrait-of-a-tabby-cat.jpeg" // Replace with user's profile pic
                        alt="Your Story"
                        className="w-full h-full rounded-full border-2 border-white cursor-pointer"
                    />
                    <div className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 border-2 border-white">
                        <IoIosAdd />
                    </div>
                </div>
            </div>


            {stories.map((story) => (
                <div key={story.id} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
                        <img
                            src={story.img}
                            alt="Story"
                            className="w-full h-full rounded-full border-2 border-white cursor-pointer"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Stories;
