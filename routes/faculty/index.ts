import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import adviser from './adviser'
import panel from './panel'
import joint from './joint'
import coordinator from './coordinator'
import committee from './committee'
import awardee from './awardee'
/**
* @see \App\Http\Controllers\Auth\FacultyLoginController::login
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:16
 * @route '/faculty/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/faculty/login',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\FacultyLoginController::login
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:16
 * @route '/faculty/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FacultyLoginController::login
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:16
 * @route '/faculty/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Auth\FacultyLoginController::login
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:16
 * @route '/faculty/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Auth\FacultyLoginController::login
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:16
 * @route '/faculty/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Auth\FacultyLoginController::login
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:16
 * @route '/faculty/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Auth\FacultyLoginController::login
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:16
 * @route '/faculty/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\Auth\FacultyLoginController::store
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:27
 * @route '/faculty/login'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/faculty/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\FacultyLoginController::store
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:27
 * @route '/faculty/login'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FacultyLoginController::store
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:27
 * @route '/faculty/login'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\FacultyLoginController::store
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:27
 * @route '/faculty/login'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\FacultyLoginController::store
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:27
 * @route '/faculty/login'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Faculty\DashboardController::dashboard
 * @see app/Http/Controllers/Faculty/DashboardController.php:13
 * @route '/faculty/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/faculty/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\DashboardController::dashboard
 * @see app/Http/Controllers/Faculty/DashboardController.php:13
 * @route '/faculty/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\DashboardController::dashboard
 * @see app/Http/Controllers/Faculty/DashboardController.php:13
 * @route '/faculty/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\DashboardController::dashboard
 * @see app/Http/Controllers/Faculty/DashboardController.php:13
 * @route '/faculty/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\DashboardController::dashboard
 * @see app/Http/Controllers/Faculty/DashboardController.php:13
 * @route '/faculty/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\DashboardController::dashboard
 * @see app/Http/Controllers/Faculty/DashboardController.php:13
 * @route '/faculty/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\DashboardController::dashboard
 * @see app/Http/Controllers/Faculty/DashboardController.php:13
 * @route '/faculty/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\Auth\FacultyLoginController::logout
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:45
 * @route '/faculty/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/faculty/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Auth\FacultyLoginController::logout
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:45
 * @route '/faculty/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\FacultyLoginController::logout
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:45
 * @route '/faculty/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Auth\FacultyLoginController::logout
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:45
 * @route '/faculty/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Auth\FacultyLoginController::logout
 * @see app/Http/Controllers/Auth/FacultyLoginController.php:45
 * @route '/faculty/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
const faculty = {
    login: Object.assign(login, login),
store: Object.assign(store, store),
dashboard: Object.assign(dashboard, dashboard),
adviser: Object.assign(adviser, adviser),
panel: Object.assign(panel, panel),
joint: Object.assign(joint, joint),
coordinator: Object.assign(coordinator, coordinator),
committee: Object.assign(committee, committee),
awardee: Object.assign(awardee, awardee),
logout: Object.assign(logout, logout),
}

export default faculty