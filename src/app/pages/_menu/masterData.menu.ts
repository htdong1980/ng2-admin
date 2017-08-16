import { VDR } from './_masterData/vdr.menu';

export const MNU_MASTER_DATA = {
  path: 'tcode',
  data: {
    menu: {
      title: 'a2z.mtd',
      icon: 'ion-social-buffer-outline',
      selected: false,
      expanded: false,
      order: 250,
    },
  },
  children: [
    VDR,
  ],
};
