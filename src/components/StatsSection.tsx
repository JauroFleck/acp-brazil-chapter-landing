export default function StatsSection() {
  return (
    <section className="relative bg-gradient-to-br from-brand-primary via-brand-primaryDark to-green-700 py-10 md:py-12 -mt-8 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl px-6 py-10 md:px-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="font-display font-extrabold text-3xl md:text-4xl text-brand-primary mb-1.5">
                1915
              </div>
              <div className="text-gray-600 uppercase tracking-wide text-xs font-semibold">
                Fundação
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="font-display font-extrabold text-3xl md:text-4xl text-brand-primary mb-1.5">
                160k+
              </div>
              <div className="text-gray-600 uppercase tracking-wide text-xs font-semibold">
                Membros no Mundo
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="font-display font-extrabold text-3xl md:text-4xl text-brand-primary mb-1.5">
                165
              </div>
              <div className="text-gray-600 uppercase tracking-wide text-xs font-semibold">
                Países
              </div>
            </div>

            {/* Stat 4 */}
            <div className="text-center">
              <div className="font-display font-extrabold text-3xl md:text-4xl bg-gradient-to-r from-brand-primary to-green-600 bg-clip-text text-transparent mb-1.5">
                #1
              </div>
              <div className="text-gray-600 uppercase tracking-wide text-xs font-semibold">
                Sociedade de Especialidade
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
