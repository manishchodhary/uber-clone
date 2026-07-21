import "remixicon/fonts/remixicon.css";

function LocationSearch(props) {
  return (
    <div
      className="mt-5 flex flex-row bg-gray-200 rounded-lg py-2 px-3"
      onClick={() => {
        props.setVehicle(true);
        props.setIsExpanded(false);
      }}
    >
      <i className="ri-focus-3-line text-xl"></i>
      <h1 className="text-base font-semibold ml-3">Nehu Gate no 2</h1>
    </div>
  );
}

export default LocationSearch;
