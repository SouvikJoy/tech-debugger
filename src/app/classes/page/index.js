import { Component, mixins } from 'nuxt-property-decorator';
import NuxioPress from '~/app/classes/nuxiopress';
import LandingCallout from '~/components/LandingCallout';
import ServiceCard from '~/components/ServiceCard';
import SupportCallout from '~/components/SupportCallout';
import Tools from '~/components/Tools';
import Clients from '~/components/Clients';
import LandingView from '~/components/LandingView';
import Background from '~/components/Background';

@Component({
  name: 'Index',
  components: {
    LandingView,
    Clients,
    Tools,
    LandingCallout,
    ServiceCard,
    SupportCallout,
    Background
  },
  data: () => ({

  })
})
export default class Welcome extends mixins(NuxioPress) {

}
