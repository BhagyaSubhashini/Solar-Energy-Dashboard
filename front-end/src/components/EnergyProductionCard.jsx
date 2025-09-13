const EnergyProductionCard = (props) => {

  return (
    <div className="border border-gray-300 rounded-lg h-44">
      <div className="flex flex-col items-center gap-2 p-6 pb-2">
        <span className="block test-gray-600 text-sm font-medium">{props.day}</span>
        <span className="block text-xs text-gray-500">{props.date}</span>
      </div>
      <div className="p-6 pt-2 flex flex-col items-center">
        <span className="block mb-1 text-3xl font-bold text-blue-600">{props.production}</span>
        <span className="block text-sm font-medium text-gray-500">kWh</span>
      </div>
    </div>
  );

};

export default EnergyProductionCard;