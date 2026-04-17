import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import TimelineCard from '../../components/pageComponents/timeline/TimelineCard';
import { FaFilter } from "react-icons/fa";
import NoHistory from '../../components/pageComponents/timeline/NoHistory';
import { FaSort } from "react-icons/fa";

const Timeline = () => {
    const { timeline } = useContext(FriendsContext);
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");


    // filter functionality
    let processedTimeline =
        filter === "all"
            ? timeline
            : timeline.filter(t => t.type === filter);


    // search functionality
    processedTimeline = processedTimeline.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.type?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className='Timeline-section container mx-auto space-y-6'>
            <h2 className='text-(--secondary-color) text-5xl font-bold'>Timeline </h2>

            {/* tool bar */}
            <div className='flex gap-5 items-center '>

                {/* search */}
                <div>
                    <label className="input outline-none flex items-center gap-2">
                        <svg className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>

                        <input
                            type="search"
                            placeholder="Search by name or type..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </label>
                </div>


                <div className='flex items-end'>

                    {/* filter */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 capitalize bg-(--primary-color) text-white">
                            <FaFilter /><span className='hidden sm:block'>Filter: </span>{filter}
                        </div>

                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow">
                            <li><a onClick={() => setFilter("all")}>All</a></li>
                            <li><a onClick={() => setFilter("call")}>Call</a></li>
                            <li><a onClick={() => setFilter("text")}>Text</a></li>
                            <li><a onClick={() => setFilter("video")}>Video</a></li>
                        </ul>
                    </div>
                </div>
            </div>



            <div className='Timeline-card-container space-y-4 min-h-[30vh]'>
                {
                    processedTimeline.length === 0 ?
                        <NoHistory />
                        :
                        processedTimeline.map((data, idx) => <TimelineCard key={idx} data={data} />)
                }
            </div>
        </section>
    );
};

export default Timeline;