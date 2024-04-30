import TimelineItem from "../components/TimelineItem";
import { timelineData } from "../data.js";
import { ClockIcon } from "../icons.js";
import "../timeline.css";

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="px-5 py-5 mx-auto text-center lg:px-40 ">
      <div className="flex flex-col w-full mb-10">
        <ClockIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
         My Road To Glory 
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Below you can see a timeline of my professional accomplishments. I
          hope that this will motivate you to follow your dreams and to write
          down your own accomplishments along the way!
        </p>
      </div>
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    </div>
  );
export default Timeline;
