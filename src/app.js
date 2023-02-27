import page from 'page.js';
import { decorateContext } from './middleware/context';

import { createInvitation } from './views/invitationCreate';
import { viewInvitation } from './views/invitationView';

import.meta.env.PROD && page.base('/bal/#'); // The `bal` is the name of the repo.

page(decorateContext);
page('/', createInvitation);
page('/pokana/:id', viewInvitation);

page.start();