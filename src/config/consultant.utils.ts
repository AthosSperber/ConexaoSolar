export function getInitials(name: string) {
  const cleaned = name.trim().replace(/\s+/g, ' ');
  if (!cleaned) return 'C';
  const parts = cleaned.split(' ');
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? '' : '';
  return (first + last).toUpperCase() || 'C';
}
