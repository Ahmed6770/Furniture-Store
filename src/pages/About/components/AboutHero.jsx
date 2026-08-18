import branchImage from "../../../assets/images/about/branch.png";

function AboutHero() {
  return (
    <section className="w-full overflow-hidden bg-stone-100">
      <img className="w-full h-auto max-h-[75vh] object-cover"
        src={branchImage}
        alt="LOOMA Showroom Branch"
      />
    </section>
  );
}

export default AboutHero;
