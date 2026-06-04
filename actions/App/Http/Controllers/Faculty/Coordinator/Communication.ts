import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::create
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/faculty/coordinator/communication',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::create
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::create
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::create
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::create
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::create
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Coordinator\Communication::create
 * @see app/Http/Controllers/Faculty/Coordinator/Communication.php:22
 * @route '/faculty/coordinator/communication'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
const Communication = { create }

export default Communication