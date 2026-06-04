import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:12
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/faculty/coordinator/defense-management/panel-assign',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:12
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:12
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:12
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:12
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:12
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::index
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:12
 * @route '/faculty/coordinator/defense-management/panel-assign'
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
/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::store
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:101
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/faculty/coordinator/defense-management/panel-assign',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::store
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:101
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::store
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:101
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::store
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:101
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::store
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:101
 * @route '/faculty/coordinator/defense-management/panel-assign'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::update
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:156
 * @route '/faculty/coordinator/defense-management/panel-assign/{id}'
 */
export const update = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/faculty/coordinator/defense-management/panel-assign/{id}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::update
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:156
 * @route '/faculty/coordinator/defense-management/panel-assign/{id}'
 */
update.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return update.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::update
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:156
 * @route '/faculty/coordinator/defense-management/panel-assign/{id}'
 */
update.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::update
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:156
 * @route '/faculty/coordinator/defense-management/panel-assign/{id}'
 */
    const updateForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Faculty\Coordinator\DefenseManagement\PanelAssign::update
 * @see app/Http/Controllers/Faculty/Coordinator/DefenseManagement/PanelAssign.php:156
 * @route '/faculty/coordinator/defense-management/panel-assign/{id}'
 */
        updateForm.put = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
const PanelAssign = { index, store, update }

export default PanelAssign