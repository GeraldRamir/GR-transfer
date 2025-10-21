import React from "react";
import { AlertTriangle, MessageCircle } from "lucide-react";

const ModalMantenimiento = ({ show, onClose, title }) => {
  if (!show) return null;

  return (
    <div
      className="d-flex align-items-center justify-content-center position-fixed top-0 start-0 w-100 h-100"
      style={{
        backgroundColor: "#fff",
        zIndex: 2000,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        className="shadow-lg rounded-4 p-4 text-center"
        style={{
          width: "95%",
          maxWidth: "450px",
          background: "white",
          border: "1px solid #eaeaea",
          animation: "fadeIn 0.4s ease-in-out",
        }}
      >
        {/* Icono de advertencia */}
        <div className="mb-3 text-warning d-flex justify-content-center">
          <AlertTriangle size={48} />
        </div>

        <h4 className="fw-bold mb-3" style={{ color: "#333" }}>
          {title} Aviso de mantenimiento del sistema
        </h4>

        <p className="text-muted" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
  Este sitio web podría dejar de funcionar temporalmente en los próximos días debido a tareas pendientes de mantenimiento del sistema y renovación del código.  
  Actualmente, se están revisando las operaciones técnicas para garantizar la estabilidad a largo plazo y un mejor rendimiento.  
  Agradecemos su comprensión y paciencia mientras se implementan estas actualizaciones.
</p>


        {/* Spinner */}
        <div className="d-flex justify-content-center mb-4">
          <div
            className="spinner-border text-primary"
            role="status"
            style={{ width: "2.5rem", height: "2.5rem" }}
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>

        {/* Botones */}
        <div className="d-flex flex-column align-items-center gap-2">
          <a
            href="https://wa.me/18099810798?text=Hello,%20I%20would%20like%20to%20report%20an%20issue%20or%20request%20information%20about%20the%20system%20maintenance."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2"
            style={{ borderRadius: "10px" }}
          >
            <MessageCircle size={18} />
            Contactar al desarrollador via WhatsApp
          </a>

          <button
            type="button"
            className="btn btn-link text-secondary mt-2"
            onClick={onClose}
          >
            Cerrar mensaje
          </button>
        </div>
      </div>

      {/* Animación */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default ModalMantenimiento;
