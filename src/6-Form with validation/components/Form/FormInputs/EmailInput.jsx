const EmailInput = () => {
  return (
    <div className="w-full">
      <label className="text-sm" htmlFor="nameFa">
        ایمیل
      </label>
      <input
        className="w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-none rounded-3xl border-solid border-2 border-slate-200 rounded-2xl px-4 py-5 text-sm mb-4"
        type="text"
        id="nameFa"
      />
    </div>
  );
};

export default EmailInput;
