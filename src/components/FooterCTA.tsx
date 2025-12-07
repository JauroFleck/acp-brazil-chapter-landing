export default function FooterCTA() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-acp-primary mb-6">
          Junte-se à Comunidade Global
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Faça parte de uma rede de profissionais dedicados à excelência clínica. Eleve sua
          carreira e contribua para o futuro da medicina interna.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#"
            className="px-8 py-3 bg-acp-primary text-white font-semibold rounded shadow-lg hover:bg-acp-primaryDark transition"
          >
            Inscrever-se Agora
          </a>
          <a
            href="#"
            className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded hover:bg-white transition"
          >
            Contatar Secretaria
          </a>
        </div>
      </div>
    </section>
  );
}

