const weightMap = {
  Placement: 3,
  Event: 2,
  Result: 1,
};

export const getPriorityNotifications = (notifications, n = 10) => {
  return notifications
    .map(noti => ({
      ...noti,
      score:
        weightMap[noti.Type] * 1000000000 +
        new Date(noti.Timestamp).getTime(),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n);
};