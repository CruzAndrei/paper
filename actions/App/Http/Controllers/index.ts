import Auth from './Auth'
import PageController from './PageController'
import Shared from './Shared'
import GuestController from './GuestController'
import Student from './Student'
import Faculty from './Faculty'
import Admin from './Admin'
import ResourceController from './ResourceController'
import NotificationController from './NotificationController'
import FileImportController from './FileImportController'
import PdfViewerController from './PdfViewerController'
import Settings from './Settings'
const Controllers = {
    Auth: Object.assign(Auth, Auth),
PageController: Object.assign(PageController, PageController),
Shared: Object.assign(Shared, Shared),
GuestController: Object.assign(GuestController, GuestController),
Student: Object.assign(Student, Student),
Faculty: Object.assign(Faculty, Faculty),
Admin: Object.assign(Admin, Admin),
ResourceController: Object.assign(ResourceController, ResourceController),
NotificationController: Object.assign(NotificationController, NotificationController),
FileImportController: Object.assign(FileImportController, FileImportController),
PdfViewerController: Object.assign(PdfViewerController, PdfViewerController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers