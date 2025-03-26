import React from 'react';
import { Container } from '../../components/Container';
import classes from './TechnologyBlock.module.css';

export interface TechnologyBlockProps {
  description: string;
  extendedDescription: string;
  title: {
    technology: string;
    geniuses: string;
  };
  capabilities: {
    leftColumn: Array<{ item: string; id: string }>;
    rightColumn: Array<{ item: string; id: string }>;
  };
}

export const TechnologyBlock: React.FC<TechnologyBlockProps> = ({
  description,
  extendedDescription,
  title = {
    technology: 'Technology',
    geniuses: 'savvy, usability geniuses'
  },
  capabilities
}) => {
  return (
    <Container>
      <section className={classes.technologyBlock}>
        <div className={classes.content}>
          <div className={classes.leftColumn}>
            <p className={classes.description}>{description}</p>
            <p className={classes.extendedDescription}>{extendedDescription}</p>
          </div>
          
          <div className={classes.rightColumn}>
            <h2 className={classes.title}>
              <span className={classes.highlight}>{title.technology}</span> {title.geniuses}
            </h2>
            
            <div className={classes.capabilities}>
              <ul className={classes.capabilityList}>
                {capabilities?.leftColumn?.map((itemObj, index) => (
                  <li key={itemObj.id || `left-${index}`}>{itemObj.item}</li>
                ))}
              </ul>
              <ul className={classes.capabilityList}>
                {capabilities?.rightColumn?.map((itemObj, index) => (
                  <li key={itemObj.id || `right-${index}`}>{itemObj.item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};