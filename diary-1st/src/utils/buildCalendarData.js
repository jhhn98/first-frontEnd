export const buildCalendarData = (year, month) => {
  const calendar = []
  const firstDay = new Date(year, month - 1, 1)
  const lastDay = new Date(year, month, 0)
//Date 함수로 날짜 유효성 검증. 달력 날짜 데이터 만드는 형식 학습.
  const firstDayPosition = firstDay.getDay()
  let week = []
  let day = 1

  for (let i=0; i < firstDayPosition; i++) week.push(0)

  while (day <= lastDay.getDate()) {
    if (week.length === 7) {
      calendar.push(week)
      week = []
    }

    week.push(day)

    day++
  }

  if (week.length < 7) {
    while (week.length < 7) week.push(0)
  }

  calendar.push(week)
  //개발중엔 console.log로 유용하게 테스트 해볼 수 있지만 배포할땐 모두 삭제하거나 console.log를 지우고 배포하는 라이브러리? 같은게 많으니 꼭 사용할것.
  console.log(calendar)
  return calendar
}
