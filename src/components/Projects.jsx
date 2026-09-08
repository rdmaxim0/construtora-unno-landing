import {ArrowRight, ChevronRight } from 'lucide-react';

const projectsData = [
    {
    id: 1,
    title: 'Residência Gávea',
    location: 'Rio de Janeiro, RJ',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    gridClass: 'pos-1' // Vertical Esquerda
  },
  {
    id: 2,
    title: 'Aurora Office Tower',
    location: 'Centro, RJ',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    gridClass: 'pos-2' // Menor Cima (Meio)
  },
  {
    id: 3,
    title: 'Villa Edgewood',
    location: 'Búzios, RJ',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop',
    gridClass: 'pos-3' // Menor Baixo (Meio)
  },
  {
    id: 4,
    title: 'Edifício Leblon',
    location: 'Leblon, RJ',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    gridClass: 'pos-4' // Vertical Direita
  }
]

const Projects = () => {
 return (
    <section id="projetos" className="projects-section">
        <div className="container projects-container">

            {/* Lado  Esquerdo: Title e CTA */}
            <div className="projects-header">
                <span className="sub-title">PROJETOS EM DESTAQUE</span>
                    <h2>Espaços<br />Que Definem a<br />Excelência</h2>
                    <a href="#projetos" className="btn btn-outline btn-projects">
                    VER TODOS OS PROJETOS
                    <ArrowRight size={18} />
                </a>
            </div>

            {/* Lado Diretito: Mosaico */}
            <div className="projects-gallery">
                {projectsData.map((project) => (
                    <div key={project.id} className={`project-card ${project.gridClass}`}>
                        <img src={project.image} alt={project.title} className="project-image" />

                        <div className="project-overlay">
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.location}</p>
                            </div>
                            <button className="project-link-btn" aria-label='Ver Projeto'>
                                <ChevronRight size={20} strokeWidth={2} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
 );
}

export default Projects;