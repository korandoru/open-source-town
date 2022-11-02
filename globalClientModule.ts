import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'
import {ClientModule} from '@docusaurus/types'

const module: ClientModule = {
  onRouteDidUpdate({location, previousLocation}) {
    if (ExecutionEnvironment.canUseDOM) {
      if (location.pathname != previousLocation?.pathname) {
        setTimeout(() => {
          _paq.push(['setCustomUrl', location.pathname])
          _paq.push(['setDocumentTitle', document.title])
          _paq.push(['trackPageView'])
        })
      }
    }
  }
}

export default module
