const Kategori = require('../models/kategori');

const index = (req, res, next) => {
    Kategori.find({}, { __v: 0 })
      .then((kategori) => {
        const responseMessage = {
            code: 200,
            success: true,
            message: "Successfull",
            data: kategori
        };
        res.status(200).json(responseMessage);
      })
      .catch((e) => {
        const responseMessage = {
            code: 400,
            success: false,
            message: "Bad request"
        };
        res.status(400).json(responseMessage);
      });
};

const insert = (req, res, next) => {
    const kategori = new Kategori({
      nama_kategori: req.body.nama_kategori,
      deskripsi: req.body.deskripsi,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at,
      status: true
    });
  
    kategori
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = {index, insert};