import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { BgPurpleIcon } from './BgPurpleIcon';
import { CloudsIcon } from './CloudsIcon';
import { CtaSoundIcon } from './CtaSoundIcon';
import { CtaSoundIcon2 } from './CtaSoundIcon2';
import { Frame24Icon } from './Frame24Icon';
import { Frame25Icon } from './Frame25Icon';
import { Frame26Icon } from './Frame26Icon';
import { Frame27Icon } from './Frame27Icon';
import classes from './LeverDeRideau.module.css';
import { RosieandtherainbowIcon } from './RosieandtherainbowIcon';
import { RosieandtherainbowIcon2 } from './RosieandtherainbowIcon2';
import { WavesIcon } from './WavesIcon';

interface Props {
  className?: string;
  classes?: {
    background?: string;
    bruit?: string;
    bruit2?: string;
    bruit3?: string;
    bruit4?: string;
    bruit5?: string;
    bruit6?: string;
    bruit7?: string;
    bruit8?: string;
    bruit9?: string;
    bruit10?: string;
    bruit11?: string;
    bruit12?: string;
    bruit13?: string;
    bruit14?: string;
    bruit15?: string;
    bruit16?: string;
    bruit17?: string;
    bruit18?: string;
    bruit19?: string;
    image?: string;
    image2?: string;
    bruit20?: string;
    bruit21?: string;
    bruit22?: string;
    bruit23?: string;
    bruit24?: string;
    root?: string;
  };
}
/* @figmaId 370:2145 */
export const LeverDeRideau: FC<Props> = memo(function LeverDeRideau(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.fondationTheodara1}>
        <div className={`${props.classes?.background || ''} ${classes.background}`}></div>
        <div className={classes.rosieAndTheRainbow}>
          <RosieandtherainbowIcon className={classes.icon} />
        </div>
        <div className={classes.clouds}>
          <CloudsIcon className={classes.icon2} />
        </div>
        <div className={`${props.classes?.bruit || ''} ${classes.bruit}`}></div>
        <div className={classes.texteCTA}>
          <div className={classes.titleParagraph}>
            <div className={classes.jeNAiPasEncoreDeBillet}>
              <div className={classes.textBlock}>Je n’ai pas</div>
              <div className={classes.textBlock2}>encore de billet</div>
            </div>
            <div className={classes.frame23}>
              <div className={classes.unPeuDePatienceRosieEtLArcEnCi}>
                Un peu de patience, « Rosie et l’arc-en-ciel » sera bientôt disponible ! Réservez dès maintenant votre
                place, ou découvrez la genèse du programme en naviguant sur la plateforme.{' '}
              </div>
              <div className={classes.sortieOfficielleXXXXXX}>Sortie officielle XX:XX:XX</div>
            </div>
          </div>
          <div className={classes.cTA}>
            <div className={classes.jePrendsMaPlace}>
              <div className={classes.textBlock3}>Je prends</div>
              <div className={classes.textBlock4}>ma place</div>
            </div>
          </div>
        </div>
        <div className={classes.texteCTA2}>
          <div className={classes.titleParagraph2}>
            <div className={classes.jAiDejaMonBillet}>
              <div className={classes.textBlock5}>J’ai déjà</div>
              <div className={classes.textBlock6}>mon billet </div>
            </div>
            <div className={classes.decouvrezDesAujourdHuiLeSpecta}>
              <div className={classes.textBlock7}>Découvrez dès aujourd’hui le spectacle</div>
              <div className={classes.textBlock8}>
                « Rosie et l’arc-en-ciel ». Tirez le rideau et partez à la recherche
              </div>
              <div className={classes.textBlock9}>des couleurs de l’arc-en-ciel.</div>
            </div>
          </div>
          <div className={classes.cTA2}>
            <div className={classes.jAccedeAuSpectacle}>
              <div className={classes.textBlock10}>J’accède</div>
              <div className={classes.textBlock11}>au spectacle</div>
            </div>
          </div>
        </div>
        <div className={classes.bgPurple}>
          <BgPurpleIcon className={classes.icon3} />
        </div>
        <div className={classes.frame21}>
          <div className={classes.pattern}>
            <div className={`${props.classes?.bruit2 || ''} ${classes.bruit2}`}></div>
            <div className={`${props.classes?.bruit3 || ''} ${classes.bruit3}`}></div>
            <div className={`${props.classes?.bruit4 || ''} ${classes.bruit4}`}></div>
            <div className={`${props.classes?.bruit5 || ''} ${classes.bruit5}`}></div>
            <div className={`${props.classes?.bruit6 || ''} ${classes.bruit6}`}></div>
            <div className={`${props.classes?.bruit7 || ''} ${classes.bruit7}`}></div>
          </div>
          <div className={classes.pattern2}>
            <div className={`${props.classes?.bruit8 || ''} ${classes.bruit8}`}></div>
            <div className={`${props.classes?.bruit9 || ''} ${classes.bruit9}`}></div>
            <div className={`${props.classes?.bruit10 || ''} ${classes.bruit10}`}></div>
            <div className={`${props.classes?.bruit11 || ''} ${classes.bruit11}`}></div>
            <div className={`${props.classes?.bruit12 || ''} ${classes.bruit12}`}></div>
            <div className={`${props.classes?.bruit13 || ''} ${classes.bruit13}`}></div>
          </div>
          <div className={classes.pattern3}>
            <div className={`${props.classes?.bruit14 || ''} ${classes.bruit14}`}></div>
            <div className={`${props.classes?.bruit15 || ''} ${classes.bruit15}`}></div>
            <div className={`${props.classes?.bruit16 || ''} ${classes.bruit16}`}></div>
            <div className={`${props.classes?.bruit17 || ''} ${classes.bruit17}`}></div>
            <div className={`${props.classes?.bruit18 || ''} ${classes.bruit18}`}></div>
            <div className={`${props.classes?.bruit19 || ''} ${classes.bruit19}`}></div>
          </div>
        </div>
        <div className={classes.bienvenueSurLaPlateformeBehind}>
          Bienvenue sur la plateforme Behind the Curtain. C’est ici que votre voyage commence, à la recherche des
          couleurs de l’arc-en-ciel volées par le monstre Rien.{' '}
        </div>
        <div className={classes.paragraph}>
          <div className={classes.uneQueteQuOntVecuLesEnfantsHos}>
            Une quête qu’ont vécu les enfants hospitalisés dans les hôpitaux de Lausanne et Lucerne, aux côtés des
            Docteur Rêves de la Fondation Theodora.
          </div>
          <div className={classes.deCesAteliersEstNeUnSpectacleR}>
            De ces ateliers est né un spectacle, « Rosie et l’arc-en-ciel ». Naviguez entre ces pages pour en découvrir
            la genèse.
          </div>
        </div>
        <div className={classes.lever}>Lever</div>
        <div className={classes.rideau}>Rideau</div>
        <div className={classes.de}>De</div>
        <div className={classes.partager}>
          <div className={classes.partagerLeProjet}>Partager le projet</div>
          <div className={classes.social}>
            <div className={classes.frame24}>
              <Frame24Icon className={classes.icon4} />
            </div>
            <div className={classes.frame25}>
              <Frame25Icon className={classes.icon5} />
            </div>
            <div className={classes.frame26}>
              <Frame26Icon className={classes.icon6} />
            </div>
            <div className={classes.frame27}>
              <Frame27Icon className={classes.icon7} />
            </div>
          </div>
        </div>
        <div className={`${props.classes?.image || ''} ${classes.image}`}></div>
        <div className={`${props.classes?.image2 || ''} ${classes.image2}`}></div>
        <div className={classes.waves}>
          <WavesIcon className={classes.icon8} />
        </div>
        <div className={classes.pattern4}>
          <div className={`${props.classes?.bruit20 || ''} ${classes.bruit20}`}></div>
          <div className={`${props.classes?.bruit21 || ''} ${classes.bruit21}`}></div>
          <div className={`${props.classes?.bruit22 || ''} ${classes.bruit22}`}></div>
          <div className={`${props.classes?.bruit23 || ''} ${classes.bruit23}`}></div>
          <div className={`${props.classes?.bruit24 || ''} ${classes.bruit24}`}></div>
        </div>
        <div className={classes.rosieAndTheRainbow2}>
          <RosieandtherainbowIcon2 className={classes.icon9} />
        </div>
        <div className={classes.line}></div>
        <div className={classes.progressBar}></div>
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
            <CtaSoundIcon className={classes.icon10} />
          </div>
        </div>
        <div className={classes.nav2}>
          <div className={classes.leverDeRideau2}>Lever de rideau</div>
          <div className={classes.ateliers2}>Ateliers</div>
          <div className={classes.surmonterSaPeur2}>Surmonter sa peur</div>
          <div className={classes.derriereLeRideau2}>Derrière le rideau</div>
          <div className={classes.spectacle2}>Spectacle</div>
          <div className={classes.enCoulisse2}>En coulisse</div>
          <div className={classes.fin2}>Fin</div>
        </div>
        <div className={classes.cTASound3}>
          <div className={classes.sound2}>Sound</div>
          <div className={classes.cTASound4}>
            <CtaSoundIcon2 className={classes.icon11} />
          </div>
        </div>
      </div>
    </div>
  );
});
