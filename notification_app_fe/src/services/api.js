import axios from "axios";
import { logger } from "../../../logging_middleware/logger";

const ACCESS_TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkaGFybWF0ZWphX3BhbWFydGhpQHNybWFwLmVkdS5pbiIsImV4cCI6MTc3NzcwMzA2NSwiaWF0IjoxNzc3NzAyMTY1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiODNhNDNhNTQtZjE5OS00ZThkLTkzMjUtMTQ2MjNiZGNlMDgyIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZGhhcm1hIHRlamEiLCJzdWIiOiIxYzVlMzk5ZC0wYTY3LTRlYTUtODdmMi1lMzZmNzgyNGY5MjAifSwiZW1haWwiOiJkaGFybWF0ZWphX3BhbWFydGhpQHNybWFwLmVkdS5pbiIsIm5hbWUiOiJkaGFybWEgdGVqYSIsInJvbGxObyI6ImFwMjMxMTAwMTEyNTUiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiIxYzVlMzk5ZC0wYTY3LTRlYTUtODdmMi1lMzZmNzgyNGY5MjAiLCJjbGllbnRTZWNyZXQiOiJEdVdzRVNOVWprWmVIa3RZIn0.7mxN4Or-fXP6jSn-1yYAE9YMUtnDRPqrgxL6LoDNCE0";

const API = axios.create({
	baseURL: "http://20.207.122.201/evaluation-service",
});

API.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`;
	return config;
});


export const fetchNotifications = async (params = {}) => {
	try {
		logger("Fetching notifications", "info");

		const res = await API.get("/notifications", { params });

		logger("Notifications fetched successfully", "info");

		return res.data.notifications;
	} catch (err) {
		logger("Error fetching notifications", "error");
		throw err.response?.data || "Error fetching notifications";
	}
};
