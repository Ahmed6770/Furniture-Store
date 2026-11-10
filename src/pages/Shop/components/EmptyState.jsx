function EmptyState({ icon, title, description, buttonText, onClick }) {
  return (
    <div className="flex min-h-96 flex-col items-center justify-center rounded-2xl border border-stone-200 bg-stone-50/60 px-6 py-12 text-center">
      <div className="text-stone-400">
        {icon}
      </div>
      <h2 className="mt-5 text-2xl font-bold text-stone-900">{title}</h2>
      <p className="mt-2 max-w-md text-sm text-stone-500">{description}</p>
      {buttonText && (
        <button
          type="button"
          className="cursor-pointer mt-8 rounded-lg bg-stone-900 px-6 py-3 text-white transition hover:bg-stone-800"
          onClick={onClick}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
