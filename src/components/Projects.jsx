import { useState, useEffect } from 'react';
import { ArrowUpRight, X, Maximize2 } from 'lucide-react';
import luxuryHouse from '../assets/luxuryHouse.jpg'; 

// Dados dinâmicos dos projetos
const projectsData = [
  {
    id: 1,
    title: 'Residência Alphaville',
    category: 'Construção Residencial',
    image: luxuryHouse,
    description: 'Um projeto de alto padrão focado em integração de ambientes e iluminação natural. Conta com 4 suítes, área de lazer completa e automação residencial.',
    area: '450m²',
    location: 'São Paulo, SP'
  },
  {
    id: 2,
    title: 'Edifício Corporate Alpha',
    category: 'Construção Comercial',
    image: luxuryHouse,
    description: 'Sede corporativa projetada para máxima eficiência energética e conforto acústico, utilizando materiais nobres e fachada em pele de vidro.',
    area: '1200m²',
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: 3,
    title: 'Cobertura Leblon',
    category: 'Design de Interiores',
    image: luxuryHouse,
    description: 'Reforma completa de cobertura duplex, com foco em design minimalista, marcenaria sob medida e paleta de cores atemporal.',
    area: '280m²',
    location: 'Rio de Janeiro, RJ'
  },
  {
    id: 4,
    title: 'Casa de Campo Fazenda Boa Vista',
    category: 'Arquitetura e Construção',
    image: luxuryHouse,
    description: 'Refúgio de fim de semana projetado com estrutura de madeira aparente e pedras naturais, criando um diálogo perfeito com a natureza ao redor.',
    area: '600m²',
    location: 'Porto Feliz, SP'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Trava a rolagem da página quando o pop-up estiver aberto
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  return (
    <section id="projetos" className="projects-section">
      <div className="container projects-container">
        
        {/* Cabeçalho na Esquerda */}
        <div className="projects-header">
          <span className="sub-title">PORTFÓLIO</span>
          <h2>Projetos Que<br />Definem o Padrão</h2>
          <a href="#contatos" className="btn btn-outline btn-projects">
            VER OUTROS PROJETOS <ArrowUpRight size={18} strokeWidth={2} />
          </a>
        </div>

        {/* Galeria Dinâmica na Direita */}
        <div className="projects-gallery">
          {projectsData.map((project, index) => (
            <article 
              key={project.id} 
              // A classe pos-1, pos-2 define o tamanho no CSS Grid
              className={`project-card pos-${index + 1}`} 
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
              <div className="project-overlay">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <button className="project-link-btn" aria-label="Ver detalhes">
                  <Maximize2 size={18} />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* POP-UP / MODAL (Só aparece se houver um projeto selecionado) */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          {/* onClick na content com stopPropagation impede que clicar DENTRO do modal feche ele */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-grid">
              <div className="modal-image-wrapper">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-details">
                <span className="modal-category">{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
                <p className="modal-desc">{selectedProject.description}</p>
                
                <div className="modal-specs">
                  <div className="spec-item">
                    <strong>Área:</strong>
                    <span>{selectedProject.area}</span>
                  </div>
                  <div className="spec-item">
                    <strong>Localização:</strong>
                    <span>{selectedProject.location}</span>
                  </div>
                </div>

                <a href="#contatos" className="btn btn-primary modal-btn" onClick={() => setSelectedProject(null)}>
                  SOLICITAR ORÇAMENTO PARECIDO
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;