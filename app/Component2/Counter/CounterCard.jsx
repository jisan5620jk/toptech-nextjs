/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const CounterCard = ({
  counterNumber,
  counterDesc,
  counterSuffex,
}) => {
  return (
    <div
      className="text-center relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-transparent before:via-white before:to-transparent />"
    >
      <div>
        <CountUp
          start={-11}
          end={counterNumber}
          suffix={counterSuffex}
          className="font-Rajdhani text-[50px] text-white font-bold"
        />
      </div>
      <p className="font-Nunito text-white opacity-80 capitalize">
        {counterDesc}
      </p>
    </div>
  );
};

export default CounterCard;
