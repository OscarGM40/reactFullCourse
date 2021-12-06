const { response, request } = require("express");
const Evento = require("../models/Evento");

const getEventos = async (req = request, res = response) => {
  try {
    /* al final me traigo todos,ya veré si es buena idea */
    const eventos = await Evento.find().populate("user", "name");
    res.json({
      ok: true,
      eventos,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "error inesperado",
    });
  }
};

const crearEvento = async (req = request, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;
    const eventoDB = await evento.save();

    res.status(201).json({
      ok: true,
      evento: eventoDB,
    });
  } catch (error) {
    console.log(error);
    /* recuerda que cuando sea terminal hay que poner return */
    return res.status(500).json({
      ok: false,
      msg: "error inesperado",
    });
  }
};

const actualizarEvento = async (req = request, res = response) => {
  try {
    const evento = await Evento.findById(req.params.id);
    
    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: "evento no encontrado con ese id",
      });
    }
    
    if (evento.user.toString() !== req.uid) {
      return res.status(401).json({
        ok: false,
        msg: "no autorizado para editar este evento",
      });
    }
    
    const nuevoEvento = {
      ...req.body,
      user: req.uid,
    };
    
    const eventoActualizado = await Evento.findByIdAndUpdate(
      req.params.id,
      nuevoEvento,
      { new: true }
      );
      
      res.json({
        ok: true,
        evento: eventoActualizado,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: "error inesperado",
      });
    }
  };
  
  const eliminarEvento = async (req = request, res = response) => {
    try {
      const evento = await Evento.findById(req.params.id);
      
      if (!evento) {
        return res.status(404).json({
          ok: false,
          msg: "evento no encontrado",
        });
      }

      if (evento.user.toString() !== req.uid) {
        return res.status(401).json({
          ok: false,
          msg: "no autorizado para eliminar este evento",
        });
      }
      
      
      await evento.remove();
      
      res.json({
        ok: true,
        msg: "evento eliminado",
      });
      
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        msg: "error inesperado",
    });
  }
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
