import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\MatrixController::index
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/management/defense_matrix',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\MatrixController::index
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\MatrixController::index
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\MatrixController::index
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\MatrixController::index
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\MatrixController::index
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\MatrixController::index
 * @see app/Http/Controllers/Student/MatrixController.php:16
 * @route '/management/defense_matrix'
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
const MatrixController = { index }

export default MatrixController