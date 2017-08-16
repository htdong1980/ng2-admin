export const MNU_TEST = {
    path: 'library',
    data: {
      menu: {
        title: 'a2z.test',
        icon: 'ion-erlenmeyer-flask',
        selected: false,
        expanded: false,
        order: 250,
      },
    },
    children: [
      {
        path: '',
        data: {
          menu: {
            title: 'a2z.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          },
        },
        children: [

          // Landing
          {
            path: ['/'],
            data: {
              menu: {
                title: 'a2z.landing_page',
              },
            },
          },

          // Login
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'a2z.login',
              },
            },
          },

          // Reset
          {
            path: ['/reset'],
            data: {
              menu: {
                title: 'a2z.reset_password',
              },
            },
          },

          // Register
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'a2z.registration',
              },
            },
          },
        ],
      },

      {
        path: 'blank',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Blank Page', // menu title
            icon: 'ion-document', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 10,
          },
        },
      },
      {
        path: 'adminLTE',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'AdminLTE Page', // menu title
            icon: 'ion-document', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 20,
          },
        },
      },
    ],
  };
