function Header() {
  return (
    <header className="flex justify-between p-4 bg-slate-500">
      <button type="button" className="flex-col">
        <h1 className="text-2xl font-poppins font-extrabold">Hidden Hunt</h1>
        <h2>Search for characters</h2>
      </button>
      <div className="flex">
        <button type="button" className="bg-red-300">
          Info
        </button>
        <button type="button" className="bg-red-100">
          Leaderboard
        </button>
      </div>
    </header>
  );
}
export default Header;
