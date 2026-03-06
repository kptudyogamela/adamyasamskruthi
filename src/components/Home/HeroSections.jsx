import { MdGroups } from "react-icons/md";

const HeroSections = () => {
  const handleCopy = () => {
    const text = "Together, we build a strong Bharatha 🇮🇳";
    navigator.clipboard.writeText(text);
    alert("Quote copied to clipboard!");
  };

  return (
    <section className="relative flex flex-col items-center bg-gradient-to-b from-[#330000] to-[#1A0033] text-white pb-20 text-sm">
      {/* Community Avatar */}
      <div className="flex items-center gap-3 bg-black/30 p-2 px-4 mt-12 rounded-full text-xs border border-red-800">
        <MdGroups className="text-xl text-red-400" />
        <p className="font-medium">
          Empowering youth & building values-driven citizens
        </p>
      </div>

      {/* Hero Heading */}
      <h1 className="text-4xl md:text-6xl text-center font-bold max-w-4xl mt-6 bg-gradient-to-r from-yellow-100 to-red-300 text-transparent bg-clip-text">
        Nurturing Culture. Empowering Society. Building Bharat.
      </h1>

      {/* Subtext */}
      <p className="text-slate-100 md:text-base text-center max-w-2xl mt-4 px-4">
        Adamya Samskruthi is a community movement dedicated to instilling
        values, samskara, and national pride among children and youth — the
        future torchbearers of our great Bharatha.
      </p>

      {/* CTA Button */}
      <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 mt-8 rounded-full transition font-semibold text-sm tracking-wide">
        Be a Part of Change
      </button>

      {/* Copy Quote Box */}
      <div className="bg-gradient-to-t from-indigo-900 to-slate-600 p-px rounded-md mt-10 shadow-md">
        <div className="flex items-center gap-4 bg-black rounded-md px-4 py-3">
          <span className="text-green-400">₹</span>
          <span className="text-sm" id="copy-text">
            Together, we build a strong Bharatha
          </span>
          <button
            id="copy-button"
            onClick={handleCopy}
            className="ml-auto bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded text-xs"
          >
            Copy Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
