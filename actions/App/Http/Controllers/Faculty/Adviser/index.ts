import AdviseeManagement from './AdviseeManagement'
import Endorsement from './Endorsement'
import EvaluationGrading from './EvaluationGrading'
const Adviser = {
    AdviseeManagement: Object.assign(AdviseeManagement, AdviseeManagement),
Endorsement: Object.assign(Endorsement, Endorsement),
EvaluationGrading: Object.assign(EvaluationGrading, EvaluationGrading),
}

export default Adviser