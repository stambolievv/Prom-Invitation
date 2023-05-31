import page from 'page';
import { decorateContext } from './middleware';
import { invitationCreate, invitationView } from './views';

page(decorateContext);
page('/', invitationCreate);
page('/pokana/:id', invitationView);

page.start();