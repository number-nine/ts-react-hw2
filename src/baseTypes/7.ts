/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wensday,
  Thursday,
  Friday,
  Saturday,
}

// type Weekend = DaysOfWeek.Sunday | DaysOfWeek.Saturday;

function isWeekend(day: DayOfWeek):boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}