import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import management from './management'
import repository from './repository'
import resources from './resources'
/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
 * @see app/Http/Controllers/Admin/DashboardController.php:18
 * @route '/admin'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/admin',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
 * @see app/Http/Controllers/Admin/DashboardController.php:18
 * @route '/admin'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
 * @see app/Http/Controllers/Admin/DashboardController.php:18
 * @route '/admin'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
 * @see app/Http/Controllers/Admin/DashboardController.php:18
 * @route '/admin'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
 * @see app/Http/Controllers/Admin/DashboardController.php:18
 * @route '/admin'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
 * @see app/Http/Controllers/Admin/DashboardController.php:18
 * @route '/admin'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DashboardController::dashboard
 * @see app/Http/Controllers/Admin/DashboardController.php:18
 * @route '/admin'
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
 * @see routes/web.php:427
 * @route '/profilemanagement'
 */
export const profilemanagement = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profilemanagement.url(options),
    method: 'get',
})

profilemanagement.definition = {
    methods: ["get","head"],
    url: '/profilemanagement',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:427
 * @route '/profilemanagement'
 */
profilemanagement.url = (options?: RouteQueryOptions) => {
    return profilemanagement.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:427
 * @route '/profilemanagement'
 */
profilemanagement.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: profilemanagement.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:427
 * @route '/profilemanagement'
 */
profilemanagement.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: profilemanagement.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:427
 * @route '/profilemanagement'
 */
    const profilemanagementForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: profilemanagement.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:427
 * @route '/profilemanagement'
 */
        profilemanagementForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profilemanagement.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:427
 * @route '/profilemanagement'
 */
        profilemanagementForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: profilemanagement.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    profilemanagement.form = profilemanagementForm
const admin = {
    dashboard: Object.assign(dashboard, dashboard),
management: Object.assign(management, management),
repository: Object.assign(repository, repository),
resources: Object.assign(resources, resources),
profilemanagement: Object.assign(profilemanagement, profilemanagement),
}

export default admin