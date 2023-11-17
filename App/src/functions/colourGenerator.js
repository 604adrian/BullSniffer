export default function(randomNumber) {
  if (randomNumber <= 10) {
    return '#87CEFA' 
  } else if (randomNumber > 10 && randomNumber <= 30) {
    return '#1C5D08';
  } else if (randomNumber > 30 && randomNumber < 50) {
    return '#ffd33d';
  } else if (randomNumber >= 50 && randomNumber < 70) {
    return '#ff6633'
  } else if (randomNumber >= 70 && randomNumber < 90) {
    return '#CC1309';
  } else if (randomNumber >= 90) {
    return '#8B1112';
  } else {
    return 'transparent';
  }
}
