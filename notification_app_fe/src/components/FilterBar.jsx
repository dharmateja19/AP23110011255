const FilterBar = ({ setType, activeType }) => {
	const types = ["All", "Event", "Result", "Placement"];

	return (
		<div className="flex flex-wrap gap-3 mb-6">
			{types.map((type) => {
				const isActive = activeType === type;

				return (
					<button
						key={type}
						onClick={() => setType(type)}
						className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer
              ${
								isActive
									? "bg-gray-900 text-white shadow-md"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}
            `}
					>
						{type}
					</button>
				);
			})}
		</div>
	);
};

export default FilterBar;
