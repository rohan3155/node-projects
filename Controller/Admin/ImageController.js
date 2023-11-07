import fs from 'fs';
import multer from 'multer';
import ImageSchema from "../../Modal/Admin/Imageschema.js";

// const Addimage = (req, res) => {

//     const upload = multer({ dest: 'imagesfolder' }).single('featuredImage');

//     upload(req, res, function () {
     
//        console.log( req.file.filename)
// console.log(req.file);
// console.log(req.body);
// new ImageSchema({ProductId:req.body.ProductId,ImageId: req.file.filename})
//         .save()
//         .then(() => {
//             res.send("New image Added");
//         })
//         .catch((err) => {
//             res.send(err);

//         });

//     });


// }
const upload = multer({ dest: 'imagesfolder' });

const Addimage = (req, res) => {
  upload.single('featuredImage')(req, res, (err) => {
    if (err) {
      return res.status(400).send("Image upload failed");
    }

    const { ProductId } = req.body;
    const { filename } = req.file;

    const image = new ImageSchema({ ProductId, ImageId: filename });

    image.save()
      .then(() => {
        res.send("New image Added");
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  });
};

// export { addImage };
const view = async (req, res) => {
  try {
    const { productId} = req.params;

    // Fetch the image details from MongoDB
    const image = await ImageSchema.findOne({ ProductId: productId});
console.log(image)
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    // Determine the file path to the image
    const imagePath = `imagesfolder/${image.ImageId}`;

    if (fs.existsSync(imagePath)) {
      // Read the image file and send it as a response
      const imageBuffer = fs.readFileSync(imagePath);

      // Set appropriate response headers for images
      // Change the content type as needed based on your image type
      res.setHeader('Content-Type', 'image/jpeg');
      res.send(imageBuffer);
    } else {
      return res.status(404).json({ message: 'Image file not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Image retrieval failed' });
  }
};

const update = (req, res) => {

    ImageSchema.updateMany({_id:req.body.ProductId},{ImageId: req.file.filename}).then(function (data) {
        res.send(data);
    });
};
const del = (req, res) => {


    ImageSchema.deleteOne({_id:req.body.ProductId},{ImageId: req.file.filename}).then(function (data) {
        res.send("Image deleted");
    });
}

const rename = (req, res) => {

    renaming(req, res, function () {
       console.log( req.file.filename)
console.log(req.file);
console.log(req.body);
        fs.rename('imagesfolder' + req.file.filename,
            'imagesfolder' + req.body.ProductId, function (err) { });
    });


}

export { Addimage, del, rename, update, view };

