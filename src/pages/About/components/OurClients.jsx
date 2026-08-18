import clientsImage from "../../../assets/images/about/clients.png";

function OurClients() {
  return (
    <section className="bg-stone-50/80 py-20 border-y border-stone-200/60">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#b53d5d]">
          Our Clients
        </p>
        <div className="mx-auto mt-2 h-1.5 w-1.5 rounded-full bg-[#b53d5d]" />

        <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-stone-900">
          Companies we’re proud to work with.
        </h2>

        <div className="mt-12 flex justify-center">
          <img className="w-full max-w-5xl object-contain transition-opacity duration-300 hover:opacity-95"
            src={clientsImage}
            alt="Companies we're proud to work with"
          />
        </div>
      </div>
    </section>
  );
}

export default OurClients;
