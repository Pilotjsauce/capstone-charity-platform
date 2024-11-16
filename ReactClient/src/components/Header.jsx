const Header = () => {
  return (
    
    <div>
      <div className="p-5 bg-brand-green "></div>
    <header className="bg-brand-offWhite p-4 flex justify-between items-center border-t-2 border-t-brand-softbeige">
      <div className="text-xl font-bold">Hands Together</div>
      <nav className="flex gap-4">
        <a href="#" className="hover:underline">Browse Opportunities</a>
        <a href="#" className="hover:underline">Our Mission</a>
        <a href="#" className="hover:underline">Search</a>
      </nav>
      <div className="flex gap-2">
        <button className="border rounded px-4 py-2">Register</button>
        <button className="bg-green-500 text-white rounded px-4 py-2">Log In</button>
      </div>
    </header>
    </div>
  );
};
export default Header;

