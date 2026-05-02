const NotificationCard = ({ data, onRead }) => {
  const typeStyles = {
    Placement: "bg-green-50 text-green-700 border-green-200",
    Event: "bg-gray-50 text-gray-700 border-gray-200",
    Result: "bg-amber-50 text-amber-700 border-amber-200",
  };

  return (
    <div
      onClick={() => onRead(data.ID)}
      className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200
      hover:shadow-lg hover:-translate-y-0.5
      ${
        data.read
          ? "bg-gray-50 border-gray-200"
          : "bg-white border-gray-300 shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className={`px-3 py-1 text-xs font-medium rounded-full border ${
            typeStyles[data.Type]
          }`}
        >
          {data.Type}
        </span>

        {!data.read && (
          <span className="w-2 h-2 rounded-full bg-gray-900"></span>
        )}
      </div>

      <p className="text-gray-800 font-medium mb-1">
        {data.Message}
      </p>
      <p className="text-xs text-gray-400">
        {new Date(data.Timestamp).toLocaleString()}
      </p>
    </div>
  );
}

export default NotificationCard;