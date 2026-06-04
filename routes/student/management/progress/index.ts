import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
 * @see routes/web.php:146
 * @route '/management/progress/overall'
 */
export const overall = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overall.url(options),
    method: 'get',
})

overall.definition = {
    methods: ["get","head"],
    url: '/management/progress/overall',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:146
 * @route '/management/progress/overall'
 */
overall.url = (options?: RouteQueryOptions) => {
    return overall.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:146
 * @route '/management/progress/overall'
 */
overall.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: overall.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:146
 * @route '/management/progress/overall'
 */
overall.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: overall.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:146
 * @route '/management/progress/overall'
 */
    const overallForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: overall.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:146
 * @route '/management/progress/overall'
 */
        overallForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overall.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:146
 * @route '/management/progress/overall'
 */
        overallForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: overall.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    overall.form = overallForm
/**
* @see \App\Http\Controllers\Student\ProgressController::reports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
export const reports = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reports.url(options),
    method: 'get',
})

reports.definition = {
    methods: ["get","head"],
    url: '/management/progress/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ProgressController::reports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
reports.url = (options?: RouteQueryOptions) => {
    return reports.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ProgressController::reports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
reports.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reports.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ProgressController::reports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
reports.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reports.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ProgressController::reports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
    const reportsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: reports.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ProgressController::reports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
        reportsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: reports.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ProgressController::reports
 * @see app/Http/Controllers/Student/ProgressController.php:21
 * @route '/management/progress/reports'
 */
        reportsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: reports.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    reports.form = reportsForm
const progress = {
    overall: Object.assign(overall, overall),
reports: Object.assign(reports, reports),
}

export default progress