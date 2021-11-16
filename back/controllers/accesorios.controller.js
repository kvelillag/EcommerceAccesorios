const Accesorio = require("../models/accesorios.model");

let response = {
  msg: "",
  exito: false,
};

// Function to create accesory
exports.create = function (req, res) {
  let accesorio = new Accesorio({
    nombre: req.body.nombre,
    precio: req.body.precio,
    detalle: req.body.detalle,
    categoria: req.body.categoria,
    imagen: req.body.imagen,
  });

  accesorio.save(function (err) {
    if (err) {
      (console.log = false),
        (response.exito = false),
        (response.msg = "Error al guardar el accesorio"),
        res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El accesorio se guardó correctamente"),
      res.json(response);
  });
};

// Function to find all the accesories
exports.find = function (req, res) {
  Accesorio.find(function (err, accesorio) {
    res.json(accesorio);
  });
};

// Function to find one accesory
exports.findOne = function (req, res) {
  Accesorio.findOne({ _id: req.params.id }, function (err, accesorio) {
    res.json(accesorio);
  });
};

// Function to update accesory
exports.update = function (req, res) {
  let accesorio = {
    nombre: req.body.nombre,
    precio: req.body.precio,
    detalle: req.body.detalle,
    categoria: req.body.categoria,
    imagen: req.body.imagen,
  };
  Accesorio.findByIdAndUpdate(
    req.params.id,
    { $set: accesorio },
    function (err) {
      if (err) {
        (console.error = err),
          (response.exito = false),
          (response.msg = "Error al modificar el accesorio"),
          res.json(response);
        return;
      }
      (response.exito = true),
        (response.msg = "El accesorio se modificó correctamente"),
        res.json(response);
    }
  );
};

// Function to remove accesory
exports.remove = function (req, res) {
  Accesorio.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      (console.error = err),
        (response.exito = false),
        (response.msg = "Error al eliminar el accesorio"),
        res.json(response);
      return;
    }
    (response.exito = true),
      (response.msg = "El accesorio se eliminó correctamente"),
      res.json(response);
  });
};
