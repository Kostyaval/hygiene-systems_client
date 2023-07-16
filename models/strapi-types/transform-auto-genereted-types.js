const fs = require('fs')
const path = require('path')

// Path to your file
const filePath = path.resolve(__dirname, './auto-generated.ts')

// Load file
fs.readFile(filePath, 'utf8', function (err, data) {
  if (err) {
    return console.log(err)
  }

  // Create regex to find the desired keys (including optional ones)
  // followed by any non-newline characters
  // The regex also considers any amount of whitespace between the key and the colon
  const regex =
    /(image|backgroundImage|metaImage|logoWhite|logo|logoMobile|imageVideoPlaceholder)\??\s*:\s*[^\n]+/g

  // Replace the matches with the new type
  const result = data.replace(regex, '$1: Maybe<ImageFile>')

  // Define the ImageFile type
  const imageFileType = `
export type ImageFile = {
  url: string
  width: number
  height: number
  alternativeText: string
}

`

  // Prepend the ImageFile type to the rest of the file content
  const fileWithImageType = imageFileType + result

  // Write the result back to the file
  fs.writeFile(filePath, fileWithImageType, 'utf8', function (err) {
    if (err) return console.log(err)
  })
})
