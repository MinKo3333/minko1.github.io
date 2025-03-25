let timedata

function getTime(){
  let now = new Date()
  let date = now.getDate()
  let month = now.getMonth()
  let registered = now.toLocaleString()
  let time = registered.slice( 12 , 21 )
  
  timedata = `
  ${month+1}/${date}${time}
  `
  console.log(date)
  console.log(month)
  console.log(time)

  return timedata
}




/*let registered = new Date().toLocaleString()
  timedata = registered.slice( 5 , 20 )
  return timedata*/