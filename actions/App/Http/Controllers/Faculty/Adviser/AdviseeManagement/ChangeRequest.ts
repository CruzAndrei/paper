import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ChangeRequest::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ChangeRequest.php:10
 * @route '/faculty/adviser/change-request'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/faculty/adviser/change-request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ChangeRequest::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ChangeRequest.php:10
 * @route '/faculty/adviser/change-request'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ChangeRequest::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ChangeRequest.php:10
 * @route '/faculty/adviser/change-request'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ChangeRequest::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ChangeRequest.php:10
 * @route '/faculty/adviser/change-request'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ChangeRequest::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ChangeRequest.php:10
 * @route '/faculty/adviser/change-request'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ChangeRequest::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ChangeRequest.php:10
 * @route '/faculty/adviser/change-request'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ChangeRequest::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ChangeRequest.php:10
 * @route '/faculty/adviser/change-request'
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
const ChangeRequest = { index }

export default ChangeRequest