'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import styles from './OurWorkGallery.module.css';

const projects = [
  {
    src: '/02_WhatsApp Image 2026-10-28 at 2.32.22 PM.png',
    width: 818,
    height: 1088,
  },
  {
    src: '/03_WhatsApp Image 2026-10-28 at 2.32.27 PM.png',
    width: 384,
    height: 512,
  },
  {
    src: '/04_WhatsApp Image 2026-10-28 at 2.34.06 PM.png',
    width: 900,
    height: 1600,
  },
  {
    src: '/05_WhatsApp Image 2026-10-28 at 2.34.06 PMs.png',
    width: 900,
    height: 1600,
  },
  {
    src: '/06_WhatsApp Image 2026-10-28 at 2.34.07 PM.png',
    width: 650,
    height: 1155,
  },
  {
    src: '/07_WhatsApp Image 2026-10-28 at 2.34.08 PM.png',
    width: 1600,
    height: 900,
  },
  {
    src: '/08_WhatsApp Image 2026-10-28 at 2.34.09 PM.png',
    width: 900,
    height: 1600,
  },
  {
    src: '/09_WhatsApp Image 2026-10-28 at 2.34.09 PMss.png',
    width: 900,
    height: 1600,
  },
  {
    src: '/10_WhatsApp Image 2026-10-28 at 2.34.10 PM.png',
    width: 1600,
    height: 900,
  },
  {
    src: '/11_WhatsApp Image 2026-10-28 at 2.34.11 PM.png',
    width: 1599,
    height: 899,
  },
  {
    src: '/12_WhatsApp Image 2026-10-28 at 2.34.13 PM.png',
    width: 1155,
    height: 866,
  },
  {
    src: '/13_WhatsApp Image 2026-10-28 at 2.34.14 PM.png',
    width: 835,
    height: 626,
  },
  {
    src: '/14_WhatsApp Image 2026-10-28 at 2.34.14 PM5.png',
    width: 1155,
    height: 866,
  },
];

export default function OurWorkGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const isOpen = selectedIndex !== null;
  const selectedProject = selectedIndex === null ? null : projects[selectedIndex];

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((current) =>
          current === null ? null : (current - 1 + projects.length) % projects.length,
        );
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % projects.length,
        );
      } else if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll<HTMLButtonElement>('button');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [isOpen]);

  const changeImage = (direction: -1 | 1) => {
    setSelectedIndex((current) =>
      current === null ? null : (current + direction + projects.length) % projects.length,
    );
  };

  return (
    <section className={styles.section} aria-labelledby="our-work-heading">
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <div>
            <span className={styles.eyebrow}>OUR WORK</span>
            <h2 id="our-work-heading">Real Projects. Reliable Solar Solutions.</h2>
          </div>
          <p>
            Explore our solar installations, electrical systems, and completed projects. At BHIWANI
            SOLAR HUB, we focus on practical solar solutions designed around our customers’ energy
            requirements.
          </p>
        </div>
        <p className={styles.subtitle}>A LOOK AT OUR SOLAR INSTALLATIONS</p>
        <div className={styles.gallery} aria-label="Solar installation project photos">
          {projects.map((project, index) => (
            <figure className={styles.project} key={project.src}>
              <button
                className={styles.imageButton}
                type="button"
                aria-label={`View solar project photo ${index + 1} of ${projects.length}`}
                onClick={(event) => {
                  lastTriggerRef.current = event.currentTarget;
                  setSelectedIndex(index);
                }}
              >
                <Image
                  src={project.src}
                  alt={`Solar installation project photo ${index + 1}`}
                  width={project.width}
                  height={project.height}
                  sizes="(max-width: 600px) 44vw, (max-width: 900px) 30vw, 22vw"
                  className={styles.thumbnail}
                />
              </button>
              <figcaption>Solar Project {String(index + 1).padStart(2, '0')}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {selectedProject && selectedIndex !== null && (
        <div
          ref={dialogRef}
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Solar project photo ${selectedIndex + 1} of ${projects.length}`}
          onClick={() => setSelectedIndex(null)}
        >
          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            <button
              ref={closeButtonRef}
              className={`${styles.control} ${styles.close}`}
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="Close image viewer"
            >
              <X size={22} />
            </button>
            <button
              className={`${styles.control} ${styles.previous}`}
              type="button"
              onClick={() => changeImage(-1)}
              aria-label="View previous solar project photo"
            >
              <ChevronLeft size={26} />
            </button>
            <div
              className={styles.originalFrame}
              onTouchStart={(event) => {
                touchStartX.current = event.changedTouches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                if (touchStartX.current === null) return;
                const delta = event.changedTouches[0].clientX - touchStartX.current;
                if (Math.abs(delta) > 50) changeImage(delta < 0 ? 1 : -1);
                touchStartX.current = null;
              }}
            >
              <Image
                src={selectedProject.src}
                alt={`Solar installation project photo ${selectedIndex + 1}`}
                fill
                unoptimized
                sizes="100vw"
                className={styles.original}
              />
            </div>
            <button
              className={`${styles.control} ${styles.next}`}
              type="button"
              onClick={() => changeImage(1)}
              aria-label="View next solar project photo"
            >
              <ChevronRight size={26} />
            </button>
            <p className={styles.counter}>
              {String(selectedIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
