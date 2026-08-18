function EmptyState({ icon, title, description, buttonText, onClick }) {

  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border
      border-gray-200 bg-gray-50 px-6 text-center">
      {icon}
      <h2 className="mt-5 text-2xl font-semibold"
      >{title}</h2>
      <p className="mt-3 max-w-md text-gray-500"
      >{description}</p>
      {buttonText && (
        <button className="cursor-pointer mt-8 rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
          onClick={onClick} >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
