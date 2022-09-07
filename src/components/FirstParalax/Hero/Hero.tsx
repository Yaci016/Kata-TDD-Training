import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { CtaSoundIcon } from './CtaSoundIcon';
import classes from './Hero.module.css';
import { LogoIcon } from './LogoIcon';
import { PathIcon } from './PathIcon';
import { UnionIcon } from './UnionIcon';

interface Props {
  className?: string;
  classes?: {
    background?: string;
    bruit?: string;
    root?: string;
  };
}
/* @figmaId 370:2154 */
export const Hero: FC<Props> = memo(function Hero(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.background || ''} ${classes.background}`}></div>
      <div className={classes.logo}>
        <LogoIcon className={classes.icon} />
      </div>
      <div className={classes.union}>
        <UnionIcon className={classes.icon2} />
      </div>
      <div className={`${props.classes?.bruit || ''} ${classes.bruit}`}></div>
      <div className={classes.cTA}>
        <div className={classes.assisterAuSpectacle}>
          <div className={classes.textBlock}>Assister</div>
          <div className={classes.textBlock2}>au spectacle</div>
        </div>
      </div>
      <div className={classes.path}>
        <PathIcon className={classes.icon3} />
      </div>
      <div className={classes.nav}>
        <div className={classes.leverDeRideau}>Lever de rideau</div>
        <div className={classes.ateliers}>Ateliers</div>
        <div className={classes.surmonterSaPeur}>Surmonter sa peur</div>
        <div className={classes.derriereLeRideau}>Derrière le rideau</div>
        <div className={classes.spectacle}>Spectacle</div>
        <div className={classes.enCoulisse}>En coulisse</div>
        <div className={classes.fin}>Fin</div>
      </div>
      <div className={classes.cTASound}>
        <div className={classes.sound}>Sound</div>
        <div className={classes.cTASound2}>
          <CtaSoundIcon className={classes.icon4} />
        </div>
      </div>
    </div>
  );
});
