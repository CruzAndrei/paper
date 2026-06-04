import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\Matrix::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/Matrix.php:19
 * @route '/faculty/coordinator/defense-management/matrix'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/faculty/coordinator/defense-management/matrix',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\Matrix::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/Matrix.php:19
 * @route '/faculty/coordinator/defense-management/matrix'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\Matrix::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/Matrix.php:19
 * @route '/faculty/coordinator/defense-management/matrix'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\Matrix::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/Matrix.php:19
 * @route '/faculty/coordinator/defense-management/matrix'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\Matrix::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/Matrix.php:19
 * @route '/faculty/coordinator/defense-management/matrix'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\Matrix::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/Matrix.php:19
 * @route '/faculty/coordinator/defense-management/matrix'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\Matrix::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/Matrix.php:19
 * @route '/faculty/coordinator/defense-management/matrix'
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
const matrix = {
    index: Object.assign(index, index),
}

export default matrix