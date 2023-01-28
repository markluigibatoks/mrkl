export function lighten (hex: string, percent: number){
  // strip the leading # if it's there
  hex = hex.replace(/^\s*#|\s*$/g, '')

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (hex.length == 3){
    hex = hex.replace(/(.)/g, '$1$1')
  }

  const r = parseInt(hex.substring(0, 2), 16),
    g = parseInt(hex.substring(2, 4), 16),
    b = parseInt(hex.substring(4, 6), 16)

  return '#' +
     ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substring(1) +
     ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substring(1) +
     ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substring(1)
}

export function darken (hex: string, percent: number){
  // strip the leading # if it's there
  hex = hex.replace(/^\s*#|\s*$/g, '')

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (hex.length == 3){
    hex = hex.replace(/(.)/g, '$1$1')
  }

  const r = parseInt(hex.substring(0, 2), 16),
    g = parseInt(hex.substring(2, 4), 16),
    b = parseInt(hex.substring(4, 6), 16)

  return '#' +
    ((0|(1<<8) + r * (100 - percent) / 100).toString(16)).substring(1) +
    ((0|(1<<8) + g * (100 - percent) / 100).toString(16)).substring(1) +
    ((0|(1<<8) + b * (100 - percent) / 100).toString(16)).substring(1)
}