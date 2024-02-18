const NameInputInEn = () => {

const labelAnimation = (e) => {
    e.target.previousElementSibling.classList.remove('-translate-x-6 translate-y-6')
    e.target.previousElementSibling.classList.add('translate-x-6 -translate-y-6')
}

  return (
    <div className="w-full relative">
      <label className="text-sm -translate-x-6 translate-y-6 absolute bg-white h-8 transition ease-in-out delay-100 duration-300 label" htmlFor="nameFa">
        نام و نام‌خانوادگی به انگلیسی
      </label>
      <input
        className=" w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none rounded-3xl border-solid border-2 border-slate-200 rounded-2xl px-4 py-5 text-sm"
        type="text"
        id="nameFa"
        onFocus={() => labelAnimation(e)}
      />
    </div>
  );
};

export default NameInputInEn;
