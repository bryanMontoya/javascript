const sharp = require('sharp');

sharp('descarga.jpg')
    .resize(80)
    .grayscale()
    .toFile('resize.jpg');