const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "acharjeesupan@gmail.com",
        pass: "ucmrhehbrmysvxby"
    }
});

router.post('/', async (req, res) => {
  const data = req.body;

  try {
    const info = await transporter.sendMail({
      from: 'TridivaIT <tridivait.co.uk>',
      to: 'info@tridivait.co.uk',
      subject: 'New Query Received',
      text: `A new query has been received\nName: ${data.name}\nEmail: ${data.address}\nService: ${data.service}`,
    })
    return res.status(200).json({ status: 'success' });
  }
  catch (e) {
    return res.status(500).json({ status: 'failed' });
  }
})

module.exports = router;
