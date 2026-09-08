import { ChevronRight } from 'lucide-react';

const processData = [
  { id: '01', title: 'Descoberta', desc: 'Compreensão profunda da sua visão, objetivos e requisitos do projeto.' },
  { id: '02', title: 'Design', desc: 'Criação de projetos inteligentes, unindo estética e máxima performance.' },
  { id: '03', title: 'Construção', desc: 'Execução técnica especializada com rigoroso controle de qualidade.' },
  { id: '04', title: 'Entrega', desc: 'Conclusão no prazo acordado com atenção minuciosa aos acabamentos.' },
  { id: '05', title: 'Evolução', desc: 'Suporte contínuo e acompanhamento para garantir excelência duradoura.' }
];

const Process = () => {
  return (
    <section id="processo" className="process-section">
      <div className="container process-container">
        
        {/* INVERTIDO: Lado Esquerdo volta a ser o Texto */}
        <div className="process-header">
          <span className="sub-title">NOSSO PROCESSO</span>
          <h2>Uma Jornada Contínua da Visão à Realidade</h2>
          <a href="#contatos" className="btn btn-outline btn-process">
            COMO TRABALHAMOS <ChevronRight size={18} strokeWidth={2} />
          </a>
        </div>

        {/* INVERTIDO: Lado Direito voltam a ser os Passos */}
        <div className="process-track">
          {processData.map((step) => (
            <div key={step.id} className="process-step">
              <div className="step-number">{step.id}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;