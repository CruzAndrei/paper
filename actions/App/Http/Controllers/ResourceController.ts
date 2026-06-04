import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\ResourceController::destroy
 * @see app/Http/Controllers/ResourceController.php:111
 * @route '/admin/resources/{resource}'
 */
export const destroy = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/resources/{resource}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ResourceController::destroy
 * @see app/Http/Controllers/ResourceController.php:111
 * @route '/admin/resources/{resource}'
 */
destroy.url = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{resource}', parsedArgs.resource.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::destroy
 * @see app/Http/Controllers/ResourceController.php:111
 * @route '/admin/resources/{resource}'
 */
destroy.delete = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ResourceController::destroy
 * @see app/Http/Controllers/ResourceController.php:111
 * @route '/admin/resources/{resource}'
 */
    const destroyForm = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ResourceController::destroy
 * @see app/Http/Controllers/ResourceController.php:111
 * @route '/admin/resources/{resource}'
 */
        destroyForm.delete = (args: { resource: number | { id: number } } | [resource: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
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
/**
* @see \App\Http\Controllers\ResourceController::index
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ResourceController::index
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::index
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ResourceController::index
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ResourceController::index
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ResourceController::index
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ResourceController::index
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
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
* @see \App\Http\Controllers\ResourceController::download
 * @see app/Http/Controllers/ResourceController.php:75
 * @route '/resources/{filekey}/download'
 */
export const download = (args: { filekey: string | number } | [filekey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/resources/{filekey}/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ResourceController::download
 * @see app/Http/Controllers/ResourceController.php:75
 * @route '/resources/{filekey}/download'
 */
download.url = (args: { filekey: string | number } | [filekey: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { filekey: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    filekey: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        filekey: args.filekey,
                }

    return download.definition.url
            .replace('{filekey}', parsedArgs.filekey.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::download
 * @see app/Http/Controllers/ResourceController.php:75
 * @route '/resources/{filekey}/download'
 */
download.get = (args: { filekey: string | number } | [filekey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ResourceController::download
 * @see app/Http/Controllers/ResourceController.php:75
 * @route '/resources/{filekey}/download'
 */
download.head = (args: { filekey: string | number } | [filekey: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ResourceController::download
 * @see app/Http/Controllers/ResourceController.php:75
 * @route '/resources/{filekey}/download'
 */
    const downloadForm = (args: { filekey: string | number } | [filekey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: download.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ResourceController::download
 * @see app/Http/Controllers/ResourceController.php:75
 * @route '/resources/{filekey}/download'
 */
        downloadForm.get = (args: { filekey: string | number } | [filekey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ResourceController::download
 * @see app/Http/Controllers/ResourceController.php:75
 * @route '/resources/{filekey}/download'
 */
        downloadForm.head = (args: { filekey: string | number } | [filekey: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    download.form = downloadForm
const ResourceController = { store, destroy, toggle, index, download }

export default ResourceController