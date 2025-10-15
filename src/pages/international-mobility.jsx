import React from 'react';
import Slider from 'react-slick';
import InternationalMobilityCard from '@/components/InternationalMobilityCard';
import Head from 'next/head';
import { SimpleLayout } from '@/components/SimpleLayout';
import Image from 'next/image';
import siteMetadata from '@/data/siteMetadata';

// Import des styles slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const mobilityData = [
    {
      city: 'Grenoble',
      country: 'France',
      image: '/images/Grenoble.jpg',
      description: 'Studying at Grenoble INP – ENSIMAG (double degree), specializing in Applied AI and Information Systems.',
      startDate: '2024',
      endDate: 'Present',
      university: 'Grenoble INP – ENSIMAG',
    },
    {
      city: 'Yamoussoukro',
      country: 'Côte d\'Ivoire',
      image: '/images/yamoussoukro.jpg',
      description: "One-year exchange (2023–2024) at INP‑HB as part of the intra‑African mobility project RésIng (Réseau d'Ingénieurs).",
      startDate: '2023',
      endDate: '2024',
      university: 'Institut National Polytechnique Félix Houphouët-Boigny (INP‑HB)',
    },
    {
      city: 'Yaoundé',
      country: 'Cameroon',
      image: '/images/yaounde.png',
      description: 'Studied Computer Science Engineering at Ecole Nationale Supérieure Polytechnique de Yaoundé (ENSPY).',
      startDate: '2020',
      endDate: '2023',
      university: 'University of Yaoundé I',
    },
    {
      city: 'Douala',
      country: 'Cameroon',
      image: '/images/douala.png',
      description: "City where I grew up and completed most of my secondary education; I obtained my Baccalaureate there before moving to Yaoundé.",
      startDate: 'Childhood',
      endDate: '2020',
      university: 'Lycée Bilingue de Nylon Ndogpassi',
    },
  ];
  
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

export default function InternationalMobility() {
  return (
    <>
      <Head>
        <title>International Mobility</title>
        <meta
          name="description"
          content={`Explore ${siteMetadata.author}'s international academic experiences.`}
        />
      </Head>
      <SimpleLayout
        title="My International Mobility"
        intro="Discover the places I visited and the experiences I gained during my academic journey abroad."
      >
        {/* Conteneur principal en deux colonnes */}
        <div className="mx-auto max-w-screen-lg px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section de présentation à gauche */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-primaryText-800 dark:text-primaryText-100 mb-4">
              About Me
            </h2>
            <p className="text-base text-primaryText-600 dark:text-primaryText-400 leading-relaxed">
              Hi! I&apos;m {siteMetadata.author}, a passionate student who loves exploring the world while 
              advancing my academic and professional journey. My experiences abroad have shaped 
              me into a global thinker, and I cherish the opportunities to learn from diverse cultures.
            </p>
            <p className="text-base text-primaryText-600 dark:text-primaryText-400 leading-relaxed mt-4">
              From Grenoble to Yamoussoukro, each destination has left an indelible mark on my personal and 
              professional growth. Join me as I share my story and the incredible places I&apos;ve been.
            </p>
          </div>

          {/* Carrousel à droite */}
          <div className="relative">
            <Slider {...sliderSettings}>
              {mobilityData.map((location) => (
                <div key={`${location.city}-${location.startDate}`} className="overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                  <Image
                    src={location.image}
                    alt={location.city}
                    className="w-full h-100 object-cover rounded-xl transition-transform duration-300 hover:scale-110"
                    width={500}
                    height={300}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Cartes de mobilité (optionnel, reste inchangé) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
          {mobilityData.map((location) => (
            <InternationalMobilityCard key={`${location.city}-${location.university}`} location={location} />
          ))}
        </div>
      </SimpleLayout>
    </>
  );
}
