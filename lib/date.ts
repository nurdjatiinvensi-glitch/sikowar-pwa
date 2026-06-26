export function formatDate(
  date: string,
  withDay = false,
) {
  const d = new Date(date);

  return d.toLocaleDateString("id-ID", {
    weekday: withDay ? "long" : undefined,
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatTimeRange(
  start: string,
  end: string,
) {
  return `${start} - ${end} WIB`;
}