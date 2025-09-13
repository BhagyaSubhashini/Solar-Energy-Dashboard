import EnergyProductionCard from "./EnergyProductionCard";

const SolarEnergyProduction = () => {

  const energyProductiondata = [
    {day: "Mon", date: "Sep 7", production: 18.2},
    {day: "Tue", date: "Sep 8", production: 44.8},
    {day: "Wed", date: "Sep 9", production: 39.9},
    {day: "Thu", date: "Sep 10", production: 36.7},
    {day: "Fri", date: "Sep 11", production: 26.7},
    {day: "Sat", date: "Sep 12", production: 16},
    {day: "Sun", date: "Sep 13", production: 23.6},
  ];

  return (
    <section className="px-12 font-[Inter] py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Solar Energy Production</h2>
        <p className="text-gray-600">Daily Energy Output for the past 7 days</p>
      </div>
      <div className="grid grid-cols-7 gap-4">

        {energyProductiondata.map((el) => {
          return (
            <EnergyProductionCard
              key={el.date}
              day={el.day}
              date={el.date}
              production={el.production} />
          );
        })}
        
      </div>
    </section>
  )
  
};


export default SolarEnergyProduction;