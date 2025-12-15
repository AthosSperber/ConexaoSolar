export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8 md:py-12 mt-12 md:mt-16">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
        <div>
          <p className="text-lg font-bold mb-1">Conecta Solar</p>
          <p className="text-sm text-gray-300">Soluções iGreen em energia renovável</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200 mb-2">Contato</p>
          <p className="text-sm text-gray-300">📞 (19) 99966-93018</p>
          <p className="text-sm text-gray-300">WhatsApp direto disponível</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-200 mb-2">Parceiro</p>
          <p className="text-sm text-gray-300"><a href="https://igreenenergy.com.br" target="_blank" rel="noreferrer" className="hover:text-green-400 transition">iGreen Energy</a></p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center mt-8 pt-6 border-t border-gray-700 text-xs text-gray-400">
        © {new Date().getFullYear()} Conecta Solar. Todos os direitos reservados.
      </div>
    </footer>
  );
}
