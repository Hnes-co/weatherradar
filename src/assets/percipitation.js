
export function handlePercipitation(type, data) {
  if(type === 'current') {
    if(data.rain) {
      if(data.rain['3h']) {
        return 'Percipitation (3 h): ' + data.rain['3h'] + ' mm';
      }
      else {
        return 'Percipitation (1 h): ' + data.rain['1h'] + ' mm';
      }
    }
    else if(data.snow) {
      if(data.snow['3h']) {
        return 'Percipitation (3 h): ' + data.snow['3h'] + ' mm';
      }
      else {
        return 'Percipitation (1 h): ' + data.snow['1h'] + ' mm';
      }
    }
    else {
      return 'Percipitation (3 h): 0 mm';
    }
  }
  else {
    if(data.rain) {
      if(data.rain['3h']) {
        return data.rain['3h'] + ' mm';
      }
      else {
        return data.rain['1h'] + ' mm';
      }
    }
    else if(data.snow) {
      if(data.snow['3h']) {
        return data.snow['3h'] + ' mm';
      }
      else {
        return data.snow['1h'] + ' mm';
      }
    }
    else {
      return '0 mm';
    }
  }
}
