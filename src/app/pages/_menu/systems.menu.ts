export const MNU_SYSTEMS = {
  path: 'tcode',
  data: {
    menu: {
      title: 'a2z.system',
      icon: 'ion-document',
      selected: false,
      expanded: false,
      order: 250,
    },
  },
  children: [
    {
      path: 'asm',
      data: {
        menu: {
          title: 'asm.desc',
        },
      },
    },
    {
      path: 'crm',
      data: {
        menu: {
          title: 'crm.desc',
        },
      },
    },
    {
      path: 'ebuy',
      data: {
        menu: {
          title: 'ebuy.desc',
        },
      },
    },
    {
      path: 'erm',
      data: {
        menu: {
          title: 'erm.desc',
        },
      },
    },
    {
      path: 'hcm',
      data: {
        menu: {
          title: 'hcm.desc',
        },
      },
    },
    {
      path: 'mje',
      data: {
        menu: {
          title: 'mje.upper',
        },
      },
    },
    {
      path: 'prime',
      data: {
        menu: {
          title: 'prime.upper',
        },
      },
    },
  ],
};
