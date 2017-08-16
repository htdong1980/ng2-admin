import { MNU_GENERAL } from './_menu/general.menu';

import { MNU_MY_APPROVAL } from './_menu/myApproval.menu';
import { MNU_MY_REQUEST } from './_menu/myRequest.menu';

import { MNU_WORKFLOW } from './_menu/workflow.menu';
import { MNU_SYSTEMS } from './_menu/systems.menu';
import { MNU_MASTER_DATA } from './_menu/masterData.menu';
// import { MNU_CONFIG } from './_menu/config.menu';

import { MNU_TCODES } from './_menu/tcodes.menu';
import { MNU_TEST } from './_menu/test.menu';

export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      MNU_GENERAL,

      MNU_MY_APPROVAL,
      MNU_MY_REQUEST,

      MNU_WORKFLOW,
      MNU_SYSTEMS,
      MNU_MASTER_DATA,
      // MNU_CONFIG,

      MNU_TCODES,
      MNU_TEST,
    ],

  },
];
