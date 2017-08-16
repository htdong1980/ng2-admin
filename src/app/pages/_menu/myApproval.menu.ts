export const MNU_MY_APPROVAL = {
  path: 'tcode',
  data: {
    menu: {
      title: 'mcat.mcat30_mnu',
      icon: 'ion-android-checkbox-outline',
      selected: false,
      expanded: false,
      order: 250,
    },
  },
  children: [
    {
      path: 'inbox',
      data: {
        menu: {
          title: 'mcat.mcat31_mnu',
          icon: 'ion-ios-filing',
        },
      },
    },
    {
      path: 'outbox',
      data: {
        menu: {
          title: 'mcat.mcat32_mnu',
          icon: 'ion-ios-filing-outline',
        },
      },
    },
  ],
};
