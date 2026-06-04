import StudentLoginController from './StudentLoginController'
import FacultyLoginController from './FacultyLoginController'
const Auth = {
    StudentLoginController: Object.assign(StudentLoginController, StudentLoginController),
FacultyLoginController: Object.assign(FacultyLoginController, FacultyLoginController),
}

export default Auth