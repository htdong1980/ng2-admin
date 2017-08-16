export const MNU_WORKFLOW = {
  path: 'tcode',
  data: {
    menu: {
      title: 'a2z.workflow',
      icon: 'ion-shuffle',
      selected: false,
      expanded: false,
      order: 250,
    },
  },
  children: [
    {
      path: 'vdr',
      data: {
        menu: {
          title: 'vdr.desc',
        },
      },
    },
  ],
};
