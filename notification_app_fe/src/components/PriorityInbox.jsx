import NotificationCard from "./NotificationCard";

const PriorityInbox = ({ data, onRead }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 flex items-center gap-2">
          Priority Inbox
        </h2>

      </div>

      <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-sm">
        {data.length === 0 ? (
          <p className="text-gray-400 text-center py-6">
            No priority notifications
          </p>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {data.map((n) => (
              <NotificationCard
                key={n.ID}
                data={n}
                onRead={onRead}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PriorityInbox;