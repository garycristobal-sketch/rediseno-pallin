// Heurística 1 (Visibilidad del Estado) y Prevención de Errores (Heurística 5)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simulación de envío con confirmación inmediata
    feedback.textContent = "✓ ¡Consulta enviada con éxito! El profesor Miguel Pallin responderá pronto.";
    feedback.className = "feedback-msg exito";

    form.reset();

    // El mensaje desaparece tras 4 segundos
    setTimeout(() => {
      feedback.className = "feedback-msg hidden";
    }, 4000);
  });
});