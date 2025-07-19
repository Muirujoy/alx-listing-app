const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-10">
      <div className="text-xl font-bold">StayFinder</div>
      <input className="border rounded px-4 py-2 w-1/2" placeholder="Search properties..." />
      <div className="space-x-4">
        <button className="text-sm">Sign In</button>
        <button className="bg-black text-white px-4 py-2 rounded text-sm">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
