export function minutesToTimesheet(min) {
  if (!min) return 0
  return parseFloat(min / 60).toFixed(2).replaceAll('.', ',')
}

export function timeToMinutes(time) {
  if (!time || time.length < 5) {
    return 0
  }
  
  const hours = parseInt(time.slice(0, 2))
  const minutes = parseInt(time.slice(-2))

  return hours * 60 + minutes
}