export function useOpenStatus() {
  const now = new Date()
  const day = now.getDay() // 0=Sun, 1=Mon … 6=Sat
  const hour = now.getHours()
  const minute = now.getMinutes()
  const timeNow = hour * 60 + minute

  // Opening hours: all days open at 13:00
  // Mon–Thu close 23:00; Fri–Sat–Sun close 01:00 (next day)
  const opensAt = 13 * 60 // 13:00

  let closesAt
  if (day === 0 || day === 5 || day === 6) {
    // Sun, Fri, Sat → 01:00 next day = 25:00 in same-day terms
    closesAt = 25 * 60
  } else {
    // Mon–Thu → 23:00
    closesAt = 23 * 60
  }

  // Handle Sun/Fri/Sat after midnight (00:00–01:00 counts as still open)
  const isAfterMidnight = (day === 1 || day === 6 || day === 0) && hour < 2
  // e.g. Mon 00:30 = still Fri/Sat night
  let isOpen = false
  if (isAfterMidnight) {
    isOpen = timeNow <= 60 // up to 01:00
  } else {
    isOpen = timeNow >= opensAt && timeNow < closesAt
  }

  return isOpen
}
