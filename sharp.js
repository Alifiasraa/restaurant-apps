/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

const imageFolder = fs.readdirSync(target);
const subFolders = imageFolder.filter((item) => !item.includes('.'));
const images = imageFolder.filter((item) => item.includes('.'));

// for images inside subfolders
if (Array.isArray(subFolders) && subFolders.length > 0) {
  subFolders.forEach((sub) => {
    const imagesInSubfolder = fs.readdirSync(`${target}/${sub}`);

    if (Array.isArray(imagesInSubfolder) && imagesInSubfolder.length > 0) {
      if (!fs.existsSync(`${destination}/${sub}`)) {
        fs.mkdirSync(`${destination}/${sub}`);
      }
      imagesInSubfolder.forEach((image) => {
        // mengubah ukuran gambar dengan lebar 720px, dengan prefix -large.jpg
        sharp(`${target}/${sub}/${image}`)
          .resize(720)
          .toFile(path.resolve(
            __dirname,
            `${destination}/${sub}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
          ));

        // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
        sharp(`${target}/${sub}/${image}`)
          .resize(480)
          .toFile(path.resolve(
            __dirname,
            `${destination}/${sub}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
          ));
      });
    }
  });
}

// for images not in subfolders
if (Array.isArray(images) && images.length > 0) {
  images.forEach((image) => {
    // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(720)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  });
}
