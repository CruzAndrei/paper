import DashboardController from './DashboardController'
import Adviser from './Adviser'
import Joint1 from './Joint1'
import Coordinator from './Coordinator'
import Committee from './Committee'
const Faculty = {
    DashboardController: Object.assign(DashboardController, DashboardController),
Adviser: Object.assign(Adviser, Adviser),
Joint1: Object.assign(Joint1, Joint1),
Coordinator: Object.assign(Coordinator, Coordinator),
Committee: Object.assign(Committee, Committee),
}

export default Faculty