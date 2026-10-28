import Image from 'next/image';
import styles from './FounderIntroduction.module.css';

const credentials = [
  '10+ Years of Experience in the Solar Industry',
  'Customer-Focused Solar Solutions',
  'Quality-Driven Planning & Execution',
  'Commitment to Long-Term Energy Savings',
];

export default function FounderIntroduction() {
  return (
    <section className={styles.section} aria-labelledby="founder-heading">
      <div className={`container ${styles.layout}`}>
        <div className={styles.photoFrame}>
          <Image
            src="/Professional Solar Energy Executive Portrait.png"
            alt="Mr. Govind Dahiya, Founder and Owner of BHIWANI SOLAR HUB"
            width={1086}
            height={1448}
            quality={90}
            sizes="(max-width: 760px) 100vw, 42vw"
            className={styles.photo}
          />
        </div>
        <div className={styles.content}>
          <span className={styles.eyebrow}>MEET OUR FOUNDER</span>
          <h2 id="founder-heading">The Vision Behind BHIWANI SOLAR HUB</h2>
          <div className={styles.identity}>
            <h3>Mr. Govind Dahiya</h3>
            <p>Founder &amp; Owner — BHIWANI SOLAR HUB</p>
          </div>
          <p className={styles.description}>
            Driven by a vision to make solar energy more accessible and practical, Mr. Govind
            Dahiya leads BHIWANI SOLAR HUB with a focus on reliable solar solutions, customer
            satisfaction, and long-term energy savings.
          </p>
          <ul className={styles.credentials}>
            {credentials.map((credential) => (
              <li key={credential}>{credential}</li>
            ))}
          </ul>
          <p className={styles.closing}>
            Helping homes and businesses move towards a smarter, more sustainable energy future.
          </p>
        </div>
      </div>
    </section>
  );
}
