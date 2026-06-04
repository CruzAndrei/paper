import ThesisManagementController from './ThesisManagementController'
import MatrixController from './MatrixController'
import EvaluationController from './EvaluationController'
import ProgressController from './ProgressController'
const Student = {
    ThesisManagementController: Object.assign(ThesisManagementController, ThesisManagementController),
MatrixController: Object.assign(MatrixController, MatrixController),
EvaluationController: Object.assign(EvaluationController, EvaluationController),
ProgressController: Object.assign(ProgressController, ProgressController),
}

export default Student