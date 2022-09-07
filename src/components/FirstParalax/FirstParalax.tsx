import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './FirstParalax.module.css';
import { Hero } from './Hero/Hero';
import { LeverDeRideau } from './LeverDeRideau/LeverDeRideau';

interface Props {
  className?: string;
}
/* @figmaId 375:6599 */
export const FirstParalax: FC<Props> = memo(function FirstParalax(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <LeverDeRideau
        className={classes.leverDeRideau}
        classes={{
          background: classes.background,
          bruit: classes.bruit,
          bruit2: classes.bruit2,
          bruit3: classes.bruit3,
          bruit4: classes.bruit4,
          bruit5: classes.bruit5,
          bruit6: classes.bruit6,
          bruit7: classes.bruit7,
          bruit8: classes.bruit8,
          bruit9: classes.bruit9,
          bruit10: classes.bruit10,
          bruit11: classes.bruit11,
          bruit12: classes.bruit12,
          bruit13: classes.bruit13,
          bruit14: classes.bruit14,
          bruit15: classes.bruit15,
          bruit16: classes.bruit16,
          bruit17: classes.bruit17,
          bruit18: classes.bruit18,
          bruit19: classes.bruit19,
          image: classes.image,
          image2: classes.image2,
          bruit20: classes.bruit20,
          bruit21: classes.bruit21,
          bruit22: classes.bruit22,
          bruit23: classes.bruit23,
          bruit24: classes.bruit24,
        }}
      />
      <Hero className={classes.hero} classes={{ background: classes.background2, bruit: classes.bruit25 }} />
    </div>
  );
});
