const NameInputInEn = () => {
  return (
    <div className="flex items-center rounded-lg border-2 border-gray-200 shadow-md w-full">
      <label
        className="text-gray-700 text-sm px-4 py-2 flex-1"
        htmlFor="nameFa"
      >
        Enter your full name in English
      </label>
      <input
        className="rounded-r-lg text-gray-700 text-sm px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        id="nameFa"
      />
    </div>
  );
};

export default NameInputInEn;
