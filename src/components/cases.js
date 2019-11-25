import React from "react"
import Client from '../components/client';


class Cases extends React.Component {
  render() {
    return (
      <div className="block flex-wrap flex -mx-2 sm:-mx-4">

      <Client logo="/images/clients/apotekhjartat.png" case="/case/apotekhjartat" />
      <Client logo="/images/clients/eon.png" case="/case/eon" />
      <Client logo="/images/clients/frank.png" case="/case/frank" />

      <Client logo="/images/clients/fbg-kommun.png" case="/case/falkenberg-kommun" />
      <Client logo="/images/clients/fbg.png" case="/case/falkenberg" />

      <Client logo="/images/clients/jarfalla.png" case="/case/jarfalla" />
      <Client logo="/images/clients/telia.png" case="/case/telia" />
      <Client logo="/images/clients/ne.png" case="/case/ne" />

      </div>
    )
  }
}

export default Cases;
