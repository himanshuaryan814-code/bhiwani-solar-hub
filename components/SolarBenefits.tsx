import Link from 'next/link';
import { ArrowUpRight, Clock3, Landmark, Leaf, Sun } from 'lucide-react';
import styles from './SolarBenefits.module.css';

const benefits = [
  {
    icon: Landmark,
    title: 'Up to ₹78,000 Subsidy',
    description:
      'Eligible residential households can receive central financial assistance of up to ₹78,000 under the PM Surya Ghar: Muft Bijli Yojana in general states, subject to applicable scheme guidelines and eligibility.',
    note:
      'Subsidy is subject to eligibility, approved installation requirements, and applicable government rules. Special-category states may have different subsidy rates.',
  },
  {
    icon: Sun,
    title: 'Explore PM Surya Ghar Yojana',
    description:
      "Discover the government's rooftop solar initiative designed to help eligible households adopt solar energy and reduce their electricity expenses.",
    link: 'https://pmsuryaghar.gov.in/',
  },
  {
    icon: Clock3,
    title: 'Designed for Long-Term Savings',
    description:
      'Quality solar panels can have an expected service life of around 25 years or more, depending on the product, installation, maintenance, and operating conditions.',
    note:
      'Actual performance, warranty coverage, and service life vary by manufacturer and product.',
  },
  {
    icon: Leaf,
    title: 'Choose Cleaner Energy',
    description:
      'Generate electricity from sunlight, reduce dependence on grid electricity, and support a cleaner energy future. Your actual savings depend on system size, energy consumption, tariffs, and sunlight availability.',
  },
];

export default function SolarBenefits() {
  return (
    <section className={styles.section} aria-labelledby="solar-benefits-heading">
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>SOLAR BENEFITS &amp; GOVERNMENT SUPPORT</span>
          <h2 id="solar-benefits-heading">Go Solar. Save More. Power Your Future.</h2>
          <p>
            Make the switch to clean solar energy with potential government subsidies, lower
            electricity bills, and long-term energy savings. BHIWANI SOLAR HUB helps homeowners
            understand their options and plan a solar system suited to their needs.
          </p>
        </div>

        <div className={styles.cards}>
          {benefits.map(({ icon: Icon, title, description, note, link }) => (
            <article className={styles.card} key={title}>
              <span className={styles.icon} aria-hidden="true">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
              {note && <p className={styles.note}>{note}</p>}
              {link && (
                <a className={styles.schemeLink} href={link} target="_blank" rel="noopener noreferrer">
                  Learn About the Scheme <ArrowUpRight size={15} />
                  <span className={styles.visuallyHidden}>(opens in a new tab)</span>
                </a>
              )}
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <div>
            <span className={styles.ctaEyebrow}>A CLEARER NEXT STEP</span>
            <h3>Find the Right Solar Solution for Your Home</h3>
            <p>
              Get guidance on system sizing, estimated savings, subsidy eligibility, and the next
              steps for rooftop solar.
            </p>
          </div>
          <Link className="button button-light" href="/contact-us">
            Get Free Solar Quote <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
