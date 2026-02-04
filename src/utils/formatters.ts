import ms from "ms"
import { parseISO, formatDistanceToNow } from "date-fns"

export function postAgeFromPubDate(pubDate: string | Date) {
  const date = pubDate instanceof Date ? pubDate : parseISO(pubDate) // "2025-12-25" -> Date
  return formatDistanceToNow(date, { addSuffix: true })
}

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return "never"
  return `${ms(Date.now() - new Date(timestamp).getTime())}${
    timeOnly ? "" : " ago"
  }`
}
