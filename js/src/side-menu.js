import EventHandler from './dom/event-handler'
import { getElementFromSelector } from './util/index'

// const NAME = 'side-menu'
// const VERSION = '5.0.0-alpha1'
const DATA_KEY = 'bs.side-menu'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`

const CLASS_NAME_MINIMIZED = 'nav-minimized'

const SELECTOR_DATA_TOGGLE = '[data-toggle="side-menu"]'

class SideMenu {
  constructor(element) {
    this._element = element
  }

  toggle() {
    return this._isMinimized() ? this.maximize() : this.minimize()
  }

  minimize() {
    if (this._isMinimized()) {
      return
    }

    this._element.classList.add(CLASS_NAME_MINIMIZED)
  }

  maximize() {
    if (!this._isMinimized()) {
      return
    }

    this._element.classList.remove(CLASS_NAME_MINIMIZED)
  }

  _isMinimized() {
    return this._element.classList.contains(CLASS_NAME_MINIMIZED)
  }
}

EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function () {
  const target = getElementFromSelector(this)
  const sideMenu = new SideMenu(target)
  sideMenu.toggle()
}
)

export default SideMenu
