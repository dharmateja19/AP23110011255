const Navbar = () => {
	return (
		<nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
				<span className="text-lg font-semibold text-gray-900">
					CampusNotify
				</span>

				<div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-300 transition">
					DT
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
