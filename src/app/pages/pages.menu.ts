export const PAGES_MENU = [
  {
    path: 'pages',
    children: [

      // GENERAL
      {
        path: 'tcode',
        data: {
          menu: {
            title: 'sidebar.general',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'news10',
            data: {
              menu: {
                title: 'tcode.news10',
              }
            }
          },
          {
            path: 'sop80',
            data: {
              menu: {
                title: 'tcode.sop80',
              }
            }
          },
          {
            path: 'cnt80',
            data: {
              menu: {
                title: 'tcode.cnt80',
              }
            }
          },
        ]
      },

      // My APPROVAL
      {
        path: 'tcode',
        data: {
          menu: {
            title: 'sidebar.category.myapproval.title',
            icon: 'ion-android-checkbox-outline',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'inbox',
            data: {
              menu: {
                title: 'sidebar.category.myapproval.inbox',
                icon: 'ion-ios-filing',
              }
            }
          },
          {
            path: 'outbox',
            data: {
              menu: {
                title: 'sidebar.category.myapproval.outbox',
                icon: 'ion-ios-filing-outline',
              }
            }
          },
        ]
      },

      // My REQUESTS
      {
        path: 'tcode',
        data: {
          menu: {
            title: 'sidebar.category.myrequests.title',
            icon: 'ion-clipboard',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'draft',
            data: {
              menu: {
                title: 'sidebar.category.myrequests.draft',
                icon: 'ion-ios-compose-outline',
              }
            }
          },
          {
            path: 'inprogress',
            data: {
              menu: {
                title: 'sidebar.category.myrequests.inprogress',
                icon: 'ion-load-a',
              }
            }
          },
          {
            path: 'documenting',
            data: {
              menu: {
                title: 'sidebar.category.myrequests.documenting',
                icon: 'ion-ios-albums-outline',
              }
            }
          },
          {
            path: 'finished',
            data: {
              menu: {
                title: 'sidebar.category.myrequests.finished',
                icon: 'ion-android-done-all',
              }
            }
          },
        ]
      },

      // WORKFLOW
      {
        path: 'tcode',
        data: {
          menu: {
            title: 'sidebar.workflow',
            icon: 'ion-shuffle',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'vdr',
            data: {
              menu: {
                title: 'tcode.vdr',
              }
            }
          }
        ]
      },

      // TRANSACTION
      {
        path: 'tcode',
        data: {
          menu: {
            title: 'sidebar.transaction',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'mje',
            data: {
              menu: {
                title: 'tcode.mje',
              }
            }
          },
        ]
      },

      // MASTER DATA
      {
        path: 'tcode',
        data: {
          menu: {
            title: 'sidebar.masterdata',
            icon: 'ion-social-buffer-outline',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          // VENDOR
          {
            path: 'vdr10',
            data: {
              menu: {
                title: 'tcode.vdr10',
              }
            }
          },
          // CUSTOMER

        ]
      },

      // CONFIGURATION
      {
        path: 'config',
        data: {
          menu: {
            title: 'sidebar.config',
            icon: 'ion-settings',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
            // VENDOR
            // CUSTOMER
        ]
      },

      // TCODE LIBRARY
      {
        path: 'tcode',
        data: {
          menu: {
            title: 'sidebar.library',
            icon: 'ion-settings',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          // MJE
          {
            path: 'mje',
            data: {
              menu: {
                title: 'tcode.mje_menu',
                selected: false,
                expanded: false,
                order: 250,
              }
            },
            children: [
              {
                path: 'mje00',
                data: {
                  menu: {
                    title: 'tcode.mje00',
                  }
                }
              },
              {
                path: 'mje01',
                data: {
                  menu: {
                    title: 'tcode.mje01',
                  }
                }
              },
              {
                path: 'mje02',
                data: {
                  menu: {
                    title: 'tcode.mje02',
                  }
                }
              },
              {
                path: 'mje03',
                data: {
                  menu: {
                    title: 'tcode.mje03',
                  }
                }
              },
              {
                path: 'mje04',
                data: {
                  menu: {
                    title: 'tcode.mje04',
                  }
                }
              },
              {
                path: 'mje05',
                data: {
                  menu: {
                    title: 'tcode.mje05',
                  }
                }
              },
              {
                path: 'mje06',
                data: {
                  menu: {
                    title: 'tcode.mje06',
                  }
                }
              },
              {
                path: 'mje11',
                data: {
                  menu: {
                    title: 'tcode.mje11',
                  }
                }
              },
              {
                path: 'mje12',
                data: {
                  menu: {
                    title: 'tcode.mje12',
                  }
                }
              },
              {
                path: 'mje13',
                data: {
                  menu: {
                    title: 'tcode.mje13',
                  }
                }
              },
              {
                path: 'mje14',
                data: {
                  menu: {
                    title: 'tcode.mje14',
                  }
                }
              },
              {
                path: 'mje15',
                data: {
                  menu: {
                    title: 'tcode.mje15',
                  }
                }
              },
              {
                path: 'mje16',
                data: {
                  menu: {
                    title: 'tcode.mje16',
                  }
                }
              },
              {
                path: 'mje90',
                data: {
                  menu: {
                    title: 'tcode.mje90',
                  }
                }
              },
              {
                path: 'mje91',
                data: {
                  menu: {
                    title: 'tcode.mje91',
                  }
                }
              },
            ]
          },

        ]
      },

      // LIBRARY
      {
        path: 'library',
        data: {
          menu: {
            title: 'sidebar.library',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.pages',
                icon: 'ion-document',
                selected: false,
                expanded: false,
                order: 650,
              }
            },
            children: [

              // Landing
              {
                path: ['/'],
                data: {
                  menu: {
                    title: 'general.menu.landingpage'
                  }
                }
              },

              // Login
              {
                path: ['/login'],
                data: {
                  menu: {
                    title: 'general.menu.login'
                  }
                }
              },

              // Reset
              {
                path: ['/reset'],
                data: {
                  menu: {
                    title: 'general.menu.reset'
                  }
                }
              },

              // Register
              {
                path: ['/register'],
                data: {
                  menu: {
                    title: 'general.menu.register',
                  }
                }
              }
            ]
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
              }
            }
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
              }
            }
          },
        ]
      },
    ],

  },
];
