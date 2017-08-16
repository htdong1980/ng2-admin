import { ASM } from './_system/asm.menu';
import { CBN } from './_system/cbn.menu';
import { CRM } from './_system/crm.menu';
import { ERM } from './_system/erm.menu';
import { HCM } from './_system/hcm.menu';
import { MCAT } from './_system/mcat.menu';

import { MJE } from './_system/mje.menu';

export const MNU_TCODES = {
  path: 'tcode',
  data: {
    menu: {
      title: 'a2z.tcode',
      icon: 'ion-link',
      selected: false,
      expanded: false,
      order: 250,
    },
  },
  children: [
    ASM,
    CBN,
    CRM,
    ERM,
    HCM,
    MCAT,
    MJE,
  ],
};
