import React from 'react';
import { Container } from '../../components/Container';
import classes from './StrategicBlock.module.css';

export interface StrategicBlockProps {
  sectionTitle: string;
  title: {
    strategic: string;
    execution: string;
  };
  description: string;
  capabilities: {
    leftColumn: Array<{ item: string; id: string }>;
    rightColumn: Array<{ item: string; id: string }>;
  };
}

export const StrategicBlock: React.FC<StrategicBlockProps> = ({
  sectionTitle = 'What we do',
  title = {
    strategic: 'Strategic navigation',
    execution: 'flawless execution'
  },
  description,
  capabilities
}) => {
  return (
    <Container>
      <section className={classes.strategicBlock}>
        <h2 className={classes.sectionTitle}>{sectionTitle}</h2>
        
        <div className={classes.content}>
          <div className={classes.leftColumn}>
            <h3 className={classes.title}>
              <span className={classes.purple}>{title.strategic}</span>,
              <br />
              {title.execution}
            </h3>
            
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
          
          <div className={classes.rightColumn}>
            <p className={classes.description}>{description}</p>
          </div>
        </div>
      </section>
    </Container>
  );
};