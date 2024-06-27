const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "acharjeesupan@gmail.com",
        pass: "ucmrhehbrmysvxby"
    }
});

router.post('/', upload.single('attachment') ,async (req, res) => {
  const data = req.body;
  const attachment = req.file;

  try {
    const info = await transporter.sendMail({
      from: 'TridivaIT <tridivait.co.uk>',
      // to: 'kanon754@gmail.com',
      to: 'info@tridivait.co.uk',
      subject: 'New Query Received',
      text: `A new query has been received\nName: ${data.name}\nEmail: ${data.address}\nService: ${data.service}`,
      attachments: [{
        filename: attachment.originalname,
        content: attachment.buffer
      }]
    })
    return res.status(200).json({ status: 'success' });
  }
  catch (e) {
    return res.status(500).json({ status: 'failed' });
  }
})

module.exports = router;
