const router = require("express").Router();

const {
  obtenerReservas,
  obtenerReserva,
  crearReserva,
  actualizarReserva,
  eliminarReserva,
} = require("../controllers/reserva.controllers");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get("/", (req, res) => {
  res.render("index");
});

// Formulario para crear una reserva

router.get("/reserva/crear", (req, res) => {
  res.render("reservas/crear-reserva");
});

// Formulario para actualizar una reserva

router.get("/reserva/editar/:id", (req, res) => {
  const reservaId = req.params.id;
  res.render("reserva/editar_reserva", { id: reservaId });
});

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get("/api", obtenerReservas);

// Crear una reserva
router.post("/api", crearReserva);

router.get("/api/:id", obtenerReserva);

// Actualizar una reserva
router.put("/api/:id", actualizarReserva);

// Eliminar una reserva de forma lógica
router.delete("/api/:id", eliminarReserva);

module.exports = router;
