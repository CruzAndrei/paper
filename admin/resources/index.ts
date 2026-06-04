import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\ResourceController::store
 * @see app/Http/Controllers/ResourceController.php:41
 * @route '/admin/resources'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/resources',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ResourceController::store
 * @see app/Http/Controllers/ResourceController.php:41
 * @route '/admin/resources'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::store
 * @see app/Http/Controllers/ResourceController.php:41
 * @route '/admin/resources'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ResourceController::store
 * @see app/Http/Controllers/ResourceController.php:41
 * @route '/admin/resources'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ResourceController::store
 * @see app/Http/Controllers/ResourceController.php:41
 * @route '/admin/resources'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ResourceController::remove
 * @see app/Http/Controllers/ResourceController.php:111
 * @route '/admin/resources/{resource}'
 */
export const remove = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(args, options),
    method: 'delete',
})

remove.definition = {
    methods: ["delete"],
    url: '/admin/resources/{resource}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ResourceController::remove
 * @see app/Http/Controllers/ResourceController.php:111
 * @route '/admin/resources/{resource}'
 */
remove.url = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { resource: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { resource: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    resource: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        resource: typeof args.resource === 'object'
                ? args.resource.id
                : args.resource,
                }

    return remove.definition.url
            .replace('{resource}', parsedArgs.resource.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::remove
 * @see app/Http/Controllers/ResourceController.php:111
 * @route '/admin/resources/{resource}'
 */
remove.delete = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: remove.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ResourceController::remove
 * @see app/Http/Controllers/ResourceController.php:111
 * @route '/admin/resources/{resource}'
 */
    const removeForm = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: remove.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ResourceController::remove
 * @see app/Http/Controllers/ResourceController.php:111
 * @route '/admin/resources/{resource}'
 */
        removeForm.delete = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: remove.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    remove.form = removeForm
/**
* @see \App\Http\Controllers\ResourceController::toggle
 * @see app/Http/Controllers/ResourceController.php:98
 * @route '/admin/resources/{resource}/toggle'
 */
export const toggle = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

toggle.definition = {
    methods: ["patch"],
    url: '/admin/resources/{resource}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\ResourceController::toggle
 * @see app/Http/Controllers/ResourceController.php:98
 * @route '/admin/resources/{resource}/toggle'
 */
toggle.url = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { resource: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { resource: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    resource: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        resource: typeof args.resource === 'object'
                ? args.resource.id
                : args.resource,
                }

    return toggle.definition.url
            .replace('{resource}', parsedArgs.resource.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::toggle
 * @see app/Http/Controllers/ResourceController.php:98
 * @route '/admin/resources/{resource}/toggle'
 */
toggle.patch = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ResourceController::toggle
 * @see app/Http/Controllers/ResourceController.php:98
 * @route '/admin/resources/{resource}/toggle'
 */
    const toggleForm = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggle.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ResourceController::toggle
 * @see app/Http/Controllers/ResourceController.php:98
 * @route '/admin/resources/{resource}/toggle'
 */
        toggleForm.patch = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggle.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    toggle.form = toggleForm
const resources = {
    store: Object.assign(store, store),
remove: Object.assign(remove, remove),
toggle: Object.assign(toggle, toggle),
}

export default resources