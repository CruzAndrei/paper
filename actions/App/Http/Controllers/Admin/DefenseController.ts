import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DefenseController::index
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/management/defense-monitoring',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DefenseController::index
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DefenseController::index
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DefenseController::index
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DefenseController::index
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DefenseController::index
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DefenseController::index
 * @see app/Http/Controllers/Admin/DefenseController.php:17
 * @route '/admin/management/defense-monitoring'
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
const DefenseController = { index }

export default DefenseController