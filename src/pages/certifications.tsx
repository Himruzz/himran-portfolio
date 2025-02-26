import Header from '../components/Header';
import Footer from '../components/Footer';
import CertificationCard from '../components/CertificationCard';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}