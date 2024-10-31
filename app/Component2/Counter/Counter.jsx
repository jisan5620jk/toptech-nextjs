import CounterCard from "./CounterCard";

const counterData = [
  {
    id: 1,
    counterNumber: 960,
    counterDesc: "Active Coustomer",
    counterSuffex: "+",
  },
  {
    id: 2,
    counterNumber: 99,
    counterDesc: "Expert Members",
    counterSuffex: "",
  },
  {
    id: 3,
    counterNumber: 20,
    counterDesc: "Satisfied Customers",
    counterSuffex: "k+",
  },
  {
    id: 4,
    counterNumber: 100,
    counterDesc: "Satisfaction Rate",
    counterSuffex: "%",
  },
];

const Counter = () => {
  return (
    <section className="bg-BodyBg-0">
      <div className="Container">
        <div className="relative z-10 -mt-[100px] pt-11 pb-14 rounded-md bg-[url('/images/counter-bg.png')] bg-no-repeat bg-cover bg-center grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-4 items-center justify-center">
          {counterData.map(
            ({
              id,
              counterIcon,
              counterNumber,
              counterDesc,
              counterSuffex,
            }) => {
              return (
                <div key={id}>
                  <CounterCard
                    counterIcon={counterIcon}
                    counterNumber={counterNumber}
                    counterDesc={counterDesc}
                    counterSuffex={counterSuffex}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Counter;
