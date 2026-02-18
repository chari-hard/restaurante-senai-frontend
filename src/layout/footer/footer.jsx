import "./style.css";

export const Footer = () => {
  return (
    <footer>
      <div className="main-footer">
          <div className="location-footer">
            <address>
                <strong>Edífico SEDE FIESP</strong><br />
                Av.Paulista, 1313m São Paulo/SP<br />
                CEP 01311-923
            </address>
          </div>
    
          <div className="contact-footer">
            <p><strong>Central de Relacionamento</strong></p>
            <p>(11)3322-0050 (Telefone/Whatsapp)</p>
            <p>0800-055-1000 (Interior de SP)</p>
          </div>
      </div>

      <div className="copyright-footer">
        <p>Copyright 2026 © Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
