import Communication from './Communication'
import DefenseManagement from './DefenseManagement'
import ThesisMonitoring from './ThesisMonitoring'
const Coordinator = {
    Communication: Object.assign(Communication, Communication),
DefenseManagement: Object.assign(DefenseManagement, DefenseManagement),
ThesisMonitoring: Object.assign(ThesisMonitoring, ThesisMonitoring),
}

export default Coordinator