import DashboardController from './DashboardController'
import StudentController from './StudentController'
import FacultyController from './FacultyController'
import AcademicSettingController from './AcademicSettingController'
import DeadlineController from './DeadlineController'
import DepartmentPoliciesController from './DepartmentPoliciesController'
import DefenseController from './DefenseController'
const Admin = {
    DashboardController: Object.assign(DashboardController, DashboardController),
StudentController: Object.assign(StudentController, StudentController),
FacultyController: Object.assign(FacultyController, FacultyController),
AcademicSettingController: Object.assign(AcademicSettingController, AcademicSettingController),
DeadlineController: Object.assign(DeadlineController, DeadlineController),
DepartmentPoliciesController: Object.assign(DepartmentPoliciesController, DepartmentPoliciesController),
DefenseController: Object.assign(DefenseController, DefenseController),
}

export default Admin