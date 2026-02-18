import "./style.css";

export const SectionStats = () => {
  return (
    <section className="section-stats">
      <h2>Excelência em números</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>+500</h3>
          <p>refeições por dia</p>
        </div>
        <div className="stat-card">
          <h3>100% </h3>
          <p>ingredientes selecionados</p>
        </div>
        <div className="stat-card">
          <h3>6</h3>
          <p>opções semanais</p>
        </div>
        <div className="stat-card">
          <h3>95%</h3>
          <p>satisfação dos clientes</p>
        </div>
      </div>
    </section>
  );
};
