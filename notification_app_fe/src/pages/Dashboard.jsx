import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/api";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import PriorityInbox from "../components/PriorityInbox";
import { getPriorityNotifications } from "../utils/priority";
import Navbar from "../components/Navbar";
const Dashboard = () => {
	const [notifications, setNotifications] = useState([]);
	const [filter, setFilter] = useState("All");
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const loadData = async () => {
		try {
			setLoading(true);
			setError("");

			const params = {
				page,
				limit: 10,
				...(filter !== "All" && { notification_type: filter }),
			};

			const data = await fetchNotifications(params);

			const withRead = data.map((n) => ({ ...n, read: false }));
			setNotifications(withRead);
		} catch (err) {
			setError(err.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		loadData();
	}, [page, filter]);

	const markAsRead = (id) => {
		setNotifications((prev) =>
			prev.map((n) => (n.ID === id ? { ...n, read: true } : n)),
		);
	};

	const priority = getPriorityNotifications(notifications);

	return (
		<div className="min-h-screen bg-gray-50">
			<Navbar />
			<div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">

				<FilterBar setType={setFilter} activeType={filter} />

				<PriorityInbox data={priority} onRead={markAsRead} />

				<div className="mt-8">
					<h2 className="text-lg font-semibold text-gray-900 mb-4">
						All Notifications
					</h2>

					{loading && (
						<p className="text-center text-gray-400 py-6">
							Loading notifications...
						</p>
					)}

					{error && <p className="text-center text-red-500 py-6">{error}</p>}

					{!loading && !error && (
						<div className="grid gap-3 sm:grid-cols-2">
							{notifications.map((n) => (
								<NotificationCard key={n.ID} data={n} onRead={markAsRead} />
							))}
						</div>
					)}
				</div>

				<div className="flex items-center justify-between mt-8">
					<button
						onClick={() => setPage((p) => Math.max(p - 1, 1))}
						className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition cursor-pointer"
					>
						← Previous
					</button>

					<span className="text-sm text-gray-500">Page {page}</span>

					<button
						onClick={() => setPage((p) => p + 1)}
						className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition cursor-pointer"
					>
						Next →
					</button>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
