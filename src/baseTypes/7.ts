/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  SUNDAY = "sunday",
  MONDAY = "monday",
  TUESDAY = "tuesday",
  WEDNESDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
}

const isWeekend = (day: Weekdays): boolean =>
  day === Weekdays.SATURDAY || day === Weekdays.SUNDAY;

console.log(isWeekend(Weekdays.FRIDAY));
console.log(isWeekend(Weekdays.SUNDAY));
