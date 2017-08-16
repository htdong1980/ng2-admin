export const MNU_MY_REQUEST = {
  path: 'tcode',
  data: {
    menu: {
      title: 'mcat.mcat40_mnu',
      icon: 'ion-clipboard',
      selected: false,
      expanded: false,
      order: 250,
    },
  },
  children: [
    {
      path: 'draft',
      data: {
        menu: {
          title: 'mcat.mcat41_mnu',
          icon: 'ion-ios-compose-outline',
        },
      },
    },
    {
      path: 'inprogress',
      data: {
        menu: {
          title: 'mcat.mcat42_mnu',
          icon: 'ion-load-a',
        },
      },
    },
    {
      path: 'documenting',
      data: {
        menu: {
          title: 'mcat.mcat43_mnu',
          icon: 'ion-ios-albums-outline',
        },
      },
    },
    {
      path: 'finished',
      data: {
        menu: {
          title: 'mcat.mcat44_mnu',
          icon: 'ion-android-done-all',
        },
      },
    },
  ],
};
