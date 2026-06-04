import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import student9b0367 from './student'
import faculty14e737 from './faculty'
import academic0bd0e3 from './academic'
import deadline74bbe6 from './deadline'
import policies from './policies'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admin/management',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
index.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
index.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: index.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
index.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: index.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
index.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: index.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
index.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: index.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
        indexForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
        indexForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
        indexForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
        indexForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
        indexForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Admin\StudentController::student
 * @see app/Http/Controllers/Admin/StudentController.php:24
 * @route '/admin/management/student'
 */
export const student = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: student.url(options),
    method: 'get',
})

student.definition = {
    methods: ["get","head"],
    url: '/admin/management/student',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\StudentController::student
 * @see app/Http/Controllers/Admin/StudentController.php:24
 * @route '/admin/management/student'
 */
student.url = (options?: RouteQueryOptions) => {
    return student.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\StudentController::student
 * @see app/Http/Controllers/Admin/StudentController.php:24
 * @route '/admin/management/student'
 */
student.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: student.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\StudentController::student
 * @see app/Http/Controllers/Admin/StudentController.php:24
 * @route '/admin/management/student'
 */
student.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: student.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\StudentController::student
 * @see app/Http/Controllers/Admin/StudentController.php:24
 * @route '/admin/management/student'
 */
    const studentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: student.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\StudentController::student
 * @see app/Http/Controllers/Admin/StudentController.php:24
 * @route '/admin/management/student'
 */
        studentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: student.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\StudentController::student
 * @see app/Http/Controllers/Admin/StudentController.php:24
 * @route '/admin/management/student'
 */
        studentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: student.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    student.form = studentForm
/**
* @see \App\Http\Controllers\Admin\FacultyController::faculty
 * @see app/Http/Controllers/Admin/FacultyController.php:18
 * @route '/admin/management/faculty'
 */
export const faculty = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: faculty.url(options),
    method: 'get',
})

faculty.definition = {
    methods: ["get","head"],
    url: '/admin/management/faculty',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\FacultyController::faculty
 * @see app/Http/Controllers/Admin/FacultyController.php:18
 * @route '/admin/management/faculty'
 */
faculty.url = (options?: RouteQueryOptions) => {
    return faculty.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\FacultyController::faculty
 * @see app/Http/Controllers/Admin/FacultyController.php:18
 * @route '/admin/management/faculty'
 */
faculty.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: faculty.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\FacultyController::faculty
 * @see app/Http/Controllers/Admin/FacultyController.php:18
 * @route '/admin/management/faculty'
 */
faculty.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: faculty.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\FacultyController::faculty
 * @see app/Http/Controllers/Admin/FacultyController.php:18
 * @route '/admin/management/faculty'
 */
    const facultyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: faculty.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\FacultyController::faculty
 * @see app/Http/Controllers/Admin/FacultyController.php:18
 * @route '/admin/management/faculty'
 */
        facultyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: faculty.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\FacultyController::faculty
 * @see app/Http/Controllers/Admin/FacultyController.php:18
 * @route '/admin/management/faculty'
 */
        facultyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: faculty.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    faculty.form = facultyForm
/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::academic
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
export const academic = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: academic.url(options),
    method: 'get',
})

academic.definition = {
    methods: ["get","head"],
    url: '/admin/management/academic-settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::academic
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
academic.url = (options?: RouteQueryOptions) => {
    return academic.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::academic
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
academic.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: academic.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\AcademicSettingController::academic
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
academic.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: academic.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\AcademicSettingController::academic
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
    const academicForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: academic.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\AcademicSettingController::academic
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
        academicForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: academic.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\AcademicSettingController::academic
 * @see app/Http/Controllers/Admin/AcademicSettingController.php:21
 * @route '/admin/management/academic-settings'
 */
        academicForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: academic.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    academic.form = academicForm
/**
* @see \App\Http\Controllers\Admin\DeadlineController::deadline
 * @see app/Http/Controllers/Admin/DeadlineController.php:19
 * @route '/admin/management/deadline'
 */
export const deadline = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deadline.url(options),
    method: 'get',
})

deadline.definition = {
    methods: ["get","head"],
    url: '/admin/management/deadline',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DeadlineController::deadline
 * @see app/Http/Controllers/Admin/DeadlineController.php:19
 * @route '/admin/management/deadline'
 */
deadline.url = (options?: RouteQueryOptions) => {
    return deadline.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DeadlineController::deadline
 * @see app/Http/Controllers/Admin/DeadlineController.php:19
 * @route '/admin/management/deadline'
 */
deadline.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: deadline.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DeadlineController::deadline
 * @see app/Http/Controllers/Admin/DeadlineController.php:19
 * @route '/admin/management/deadline'
 */
deadline.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: deadline.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DeadlineController::deadline
 * @see app/Http/Controllers/Admin/DeadlineController.php:19
 * @route '/admin/management/deadline'
 */
    const deadlineForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: deadline.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DeadlineController::deadline
 * @see app/Http/Controllers/Admin/DeadlineController.php:19
 * @route '/admin/management/deadline'
 */
        deadlineForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deadline.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DeadlineController::deadline
 * @see app/Http/Controllers/Admin/DeadlineController.php:19
 * @route '/admin/management/deadline'
 */
        deadlineForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: deadline.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    deadline.form = deadlineForm
/**
* @see \App\Http\Controllers\Admin\DefenseController::defenses
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
export const defenses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: defenses.url(options),
    method: 'get',
})

defenses.definition = {
    methods: ["get","head"],
    url: '/admin/management/defense-monitoring',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DefenseController::defenses
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
defenses.url = (options?: RouteQueryOptions) => {
    return defenses.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DefenseController::defenses
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
defenses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: defenses.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DefenseController::defenses
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
defenses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: defenses.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DefenseController::defenses
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
    const defensesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: defenses.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DefenseController::defenses
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
        defensesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: defenses.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DefenseController::defenses
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
        defensesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: defenses.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    defenses.form = defensesForm
const management = {
    index: Object.assign(index, index),
student: Object.assign(student, student9b0367),
faculty: Object.assign(faculty, faculty14e737),
academic: Object.assign(academic, academic0bd0e3),
deadline: Object.assign(deadline, deadline74bbe6),
policies: Object.assign(policies, policies),
defenses: Object.assign(defenses, defenses),
}

export default management