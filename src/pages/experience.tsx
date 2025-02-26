import Header from '../components/Header';
import Footer from '../components/Footer';
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Experience</h1>
        <div className="space-y-6">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}