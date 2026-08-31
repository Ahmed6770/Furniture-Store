import clientsImage from "../../../assets/images/about/clients.png";

function OurClients() {
  return (
    <section className="bg-[#faf8f5] py-14 sm:py-16 border-y border-stone-200/50">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-stone-900">
          Companies we’re proud to work with.
        </h2>

        <div className="mt-10 flex justify-center">
          <img
            className="w-full max-w-5xl object-contain transition-opacity duration-300 hover:opacity-95"
            src={clientsImage}
            alt="Companies we're proud to work with"
          />
        </div>
      </div>
    </section>
  );
}

export default OurClients;
