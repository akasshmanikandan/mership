export default function StatsBar() {
  return (
    <section className="bg-[#101726] text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
        <div>
          <div className="text-3xl font-bold text-amber-400 mb-1">25+</div>
          <div className="text-xs uppercase tracking-wider text-gray-400">
            Years Experience
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold text-amber-400 mb-1">9</div>
          <div className="text-xs uppercase tracking-wider text-gray-400">
            Ports &amp; ICDs
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold text-amber-400 mb-1">24×7</div>
          <div className="text-xs uppercase tracking-wider text-gray-400">
            Cargo Helpline
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold text-amber-400 mb-1">100%</div>
          <div className="text-xs uppercase tracking-wider text-gray-400">
            Custom Compliant
          </div>
        </div>
      </div>
    </section>
  );
}
