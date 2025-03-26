import React from 'react';
import { Container } from '../../components/Container';
import classes from './CapabilitiesHero.module.css';

export interface CapabilitiesHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: {
    url: string;
    alt: string;
  };
  disableInnerContainer?: boolean;
}

export const CapabilitiesHero: React.FC<CapabilitiesHeroProps> = ({
  subtitle,
  backgroundImage,
  disableInnerContainer = false,
}) => {
  const WrapperComponent = disableInnerContainer ? React.Fragment : Container;

  return (
    <WrapperComponent>
      <section className={classes.capabilitiesHero}>
        <div className={classes.content}>
          <h1 className={classes.title}>Our capabilities</h1>
          <div className={classes.subtitle}>
            {subtitle || "lorem ipsum dolor sit adipiscing consecutor"}
          </div>
        </div>
        <div className={classes.imageContainer}>
          {backgroundImage && (
            <>
              <img
                src={backgroundImage.url}
                alt={backgroundImage.alt}
                className={classes.backgroundImage}
              />
              <div className={classes.overlay} />
            </>
          )}
        </div>
      </section>
    </WrapperComponent>
  );
};