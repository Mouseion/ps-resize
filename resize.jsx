#target photoshop

var image = app.activeDocument,
    height = image.height,
    width = image.width,
    resolution = image.resolution,
    ratio = width / height,
    newName =  image.name + '-web.jpg',
    newWidth = 306;

newHeight = (1.0 * newWidth) / ratio
newHeight = Math.round(newHeight);

resampleMeth = ResampleMethod.BICUBICSHARPER;

image.resizeImage(newWidth, newHeight, resolution, resampleMeth);

var options = new ExportOptionsSaveForWeb();
options.quality = 90;
options.format = SaveDocumentType.JPEG;
options.optimized = true;

image.exportDocument(File(image.path + '/' + newName), ExportType.SAVEFORWEB, options);
