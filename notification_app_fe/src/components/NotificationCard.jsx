const NotificationCard = ({ data, onRead }) => {
	const typeStyles = {
		Placement: "bg-green-100 text-green-700",
		Event: "bg-gray-100 text-gray-700",
		Result: "bg-amber-100 text-amber-700",
	};

	return (
		<div
			onClick={() => onRead(data.ID)}
			className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200
      hover:shadow-md hover:-translate-y-0.5
      
      ${
				data.read
					? "bg-gray-50 border-gray-200"
					: "bg-white border-gray-300 shadow-sm"
			}`}
		>
			<div className="flex items-center justify-between mb-2">
				<span
					className={`px-3 py-1 text-xs font-medium rounded-full ${
						typeStyles[data.Type]
					}`}
				>
					{data.Type}
				</span>

				{!data.read && (
					<span className="w-2 h-2 rounded-full bg-gray-400"></span>
				)}
			</div>

			<p
				className={`mb-1 ${
					data.read ? "text-gray-500 font-normal" : "text-gray-800 font-medium"
				}`}
			>
				{data.Message}
			</p>

			<p className="text-xs text-gray-400">
				{new Date(data.Timestamp).toLocaleString()}
			</p>
		</div>
	);
};

export default NotificationCard;
