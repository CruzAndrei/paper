import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\EvaluationController::index
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/management/evaluation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\EvaluationController::index
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\EvaluationController::index
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\EvaluationController::index
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\EvaluationController::index
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\EvaluationController::index
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\EvaluationController::index
 * @see app/Http/Controllers/Student/EvaluationController.php:16
 * @route '/management/evaluation'
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
    
    index.form = indexForm
const EvaluationController = { index }

export default EvaluationController