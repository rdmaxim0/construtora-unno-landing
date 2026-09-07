import { Award, Building2, Users, Medal } from "lucide-react";

const metricsData = [
    {
    id: 1,
    icon: <Award size={28} strokeWidth={1.5} />,
    value: '15+',
    label: 'Anos de Experiência'
  },
  {
    id: 2,
    icon: <Building2 size={28} strokeWidth={1.5} />,
    value: '320+',
    label: 'Obras Entregues'
  },
  {
    id: 3,
    icon: <Users size={28} strokeWidth={1.5} />,
    value: '98%',
    label: 'Clientes Satisfeitos'
  },
  {
    id: 4,
    icon: <Medal size={28} strokeWidth={1.5} />,
    value: '25+',
    label: 'Prêmios do Setor'
  }
];

const Metrics = () => {
    return (
        <section className="metrics-section">
            <div className="container">
                <div className="metrics-card">
                    {metricsData.map((metric) => (
                        <div key={metric.id} className="metric-item">
                            <div className="metric-icon">{metric.icon}</div>
                            <div className="metric-content">
                                <span className="metric-value">{metric.value}</span>
                                <span className="metric-label">{metric.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Metrics;