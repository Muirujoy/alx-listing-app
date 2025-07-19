type PillProps = {
  label: string;
};

const Pill = ({ label }: PillProps) => (
  <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-black hover:text-white transition">
    {label}
  </button>
);

export default Pill;
