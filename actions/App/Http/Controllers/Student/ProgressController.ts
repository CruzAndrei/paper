import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\ProgressController::statusReports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
export const statusReports = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statusReports.url(options),
    method: 'get',
})

statusReports.definition = {
    methods: ["get","head"],
    url: '/management/progress/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ProgressController::statusReports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
statusReports.url = (options?: RouteQueryOptions) => {
    return statusReports.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ProgressController::statusReports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
statusReports.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statusReports.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ProgressController::statusReports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
statusReports.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: statusReports.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ProgressController::statusReports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
    const statusReportsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: statusReports.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ProgressController::statusReports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
        statusReportsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: statusReports.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ProgressController::statusReports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
        statusReportsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: statusReports.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    statusReports.form = statusReportsForm
const ProgressController = { statusReports }

export default ProgressController