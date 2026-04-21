export default function Contact() {
  return (
    <section id="contact" style={{ padding: "100px 20px" }}>
      <h2>Contato</h2>

      <form>
        <input placeholder="Nome" />
        <input placeholder="Email" />
        <textarea placeholder="Mensagem" />
        <button>Enviar</button>
      </form>
    </section>
  );
}