import luxuryHouse from '../assets/luxuryHouse.jpg'; // Depois a cliente troca pela foto da equipe/sede

const About = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="container about-container">
        
        {/* Lado Esquerdo: Imagem de Impacto */}
        <div className="about-image-wrapper">
          <img src={luxuryHouse} alt="Sede da Construtora Unno" className="about-image" />
          <div className="about-experience-badge">
            <span className="years">15+</span>
            <span className="label">Anos de<br/>Excelência</span>
          </div>
        </div>

        {/* Lado Direito: O Texto/Manifesto */}
        <div className="about-content">
          <span className="sub-title">QUEM SOMOS</span>
          <h2>Construindo Legados com Precisão e Arte</h2>
          <p className="highlight-text">
            A Construtora Unno nasceu da fusão entre a engenharia de alta performance e o design de interiores sofisticado.
          </p>
          <p className="body-text">
            Não entregamos apenas obras; entregamos tranquilidade. Nossa equipe multidisciplinar gerencia cada etapa do processo construtivo, garantindo que o cronograma, o orçamento e a qualidade impecável dos acabamentos sejam rigorosamente respeitados.
          </p>
          
          <div className="about-features">
            <div className="feature">
              <div className="feature-dot"></div>
              <span>Rigor Técnico</span>
            </div>
            <div className="feature">
              <div className="feature-dot"></div>
              <span>Design Exclusivo</span>
            </div>
            <div className="feature">
              <div className="feature-dot"></div>
              <span>Transparência Total</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;