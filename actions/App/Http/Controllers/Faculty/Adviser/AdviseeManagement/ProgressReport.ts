import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ProgressReport::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ProgressReport.php:16
 * @route '/faculty/adviser/progress'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/faculty/adviser/progress',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ProgressReport::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ProgressReport.php:16
 * @route '/faculty/adviser/progress'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ProgressReport::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ProgressReport.php:16
 * @route '/faculty/adviser/progress'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ProgressReport::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ProgressReport.php:16
 * @route '/faculty/adviser/progress'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ProgressReport::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ProgressReport.php:16
 * @route '/faculty/adviser/progress'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ProgressReport::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ProgressReport.php:16
 * @route '/faculty/adviser/progress'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ProgressReport::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ProgressReport.php:16
 * @route '/faculty/adviser/progress'
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
const ProgressReport = { index }

export default ProgressReport