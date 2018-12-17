export function letfPad(number) {
  const pad = '00'
  return pad.substring(0,pad.length - number.length) + number
}

export function formattedTime(secs) {
  const minute = parseInt(secs/60, 10)
  const seconds = parseInt(secs % 60, 10)
  return `${letfPad(minute.toString())} : ${letfPad(seconds.toString())}` 
}

// --- Validar document is fullscreen
export const isFullScreen = () => document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen

// --- solicitar FullScreen al navegador para el elemento dado
export const requestFullScreen = element => {
  try{ element.requestFullscreen()        } catch(e){
  try{ element.webkitRequestFullscreen()  } catch(e){
  try{ element.mozRequestFullscreen()     } catch(e){
  try{ element.msRequestFullscreen()      } catch(e){
    console.log(e)
  }}}}
}

// --- salir del FullScreen
export const exitFullScreen = () => {
  try { document.exitFullscreen()       } catch(e){
  try { document.webkitExitFullscreen() } catch(e){
  try { document.mozCancelFullscreen()  } catch(e){
  try { document.msExitFullscreen()     } catch(e){
    console.log(e)
  }}}}
}