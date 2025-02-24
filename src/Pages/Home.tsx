import Feeds from "../Components/Feeds"
import RightSideBar from "../Components/RightSideBar"
import Stories from "../Components/Stories"



const Home = () => {
    return (
        <div className=" grid grid-cols-3 gap-2 h-full">
            <div className="col-span-2 p-4">
                <Stories />
                <h1 className="font-semibold text-lg font-sans mt-5">Feeds</h1>
                <div className="w-full h-[45rem] p-3  group overflow-hidden hover:overflow-y-scroll transition-all duration-300 ease-in-out scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                    <Feeds />
                </div>

            </div>
            {/*sidebar right side */}
            <div className=" border-l border-gray-200 p-3">
                <RightSideBar />
            </div>

        </div>


    )
}

export default Home