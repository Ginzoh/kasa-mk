import './About.css'
import aboutImage from 'assets/a_propos.png'
import ButtonWithText from 'components/ButtonWithText.js/ButtonWithText';

const About = () => {
  return (
    <main className='aboutPage'>
      <img src={aboutImage} alt="" className='aboutImage' />
      <ButtonWithText buttonText="Fiabilité" text="La sécurité de nos hôtes est une priorité. Les logements doivent être équipés d'un détecteur de fumée et d'une trousse de premiers soins." />
      <ButtonWithText buttonText="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
      <ButtonWithText buttonText="Service" text="Le service est essentielle. Les logements doivent être nettoyés régulièrement, avec des draps et des serviettes propres à disposition des voyageurs." />
      <ButtonWithText buttonText="Responsabilité" text="Responsabilité est au cœur de notre activité. Nos hôtes s'engagent à offrir un accueil chaleureux et à être disponibles tout au long du séjour de leurs voyageurs." />
    </main>
  );
};

export default About;
