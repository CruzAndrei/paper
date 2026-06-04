import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:14
 * @route '/notifications'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/notifications',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:14
 * @route '/notifications'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:14
 * @route '/notifications'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:14
 * @route '/notifications'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:14
 * @route '/notifications'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:14
 * @route '/notifications'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:14
 * @route '/notifications'
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
* @see \App\Http\Controllers\NotificationController::load
 * @see app/Http/Controllers/NotificationController.php:30
 * @route '/notifications/load'
 */
export const load = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: load.url(options),
    method: 'post',
})

load.definition = {
    methods: ["post"],
    url: '/notifications/load',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::load
 * @see app/Http/Controllers/NotificationController.php:30
 * @route '/notifications/load'
 */
load.url = (options?: RouteQueryOptions) => {
    return load.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::load
 * @see app/Http/Controllers/NotificationController.php:30
 * @route '/notifications/load'
 */
load.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: load.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NotificationController::load
 * @see app/Http/Controllers/NotificationController.php:30
 * @route '/notifications/load'
 */
    const loadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: load.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NotificationController::load
 * @see app/Http/Controllers/NotificationController.php:30
 * @route '/notifications/load'
 */
        loadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: load.url(options),
            method: 'post',
        })
    
    load.form = loadForm
/**
* @see \App\Http\Controllers\NotificationController::toggle
 * @see app/Http/Controllers/NotificationController.php:50
 * @route '/notifications/{id}/toggle'
 */
export const toggle = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggle.url(args, options),
    method: 'post',
})

toggle.definition = {
    methods: ["post"],
    url: '/notifications/{id}/toggle',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::toggle
 * @see app/Http/Controllers/NotificationController.php:50
 * @route '/notifications/{id}/toggle'
 */
toggle.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return toggle.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::toggle
 * @see app/Http/Controllers/NotificationController.php:50
 * @route '/notifications/{id}/toggle'
 */
toggle.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggle.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NotificationController::toggle
 * @see app/Http/Controllers/NotificationController.php:50
 * @route '/notifications/{id}/toggle'
 */
    const toggleForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggle.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NotificationController::toggle
 * @see app/Http/Controllers/NotificationController.php:50
 * @route '/notifications/{id}/toggle'
 */
        toggleForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggle.url(args, options),
            method: 'post',
        })
    
    toggle.form = toggleForm
const notifications = {
    index: Object.assign(index, index),
load: Object.assign(load, load),
toggle: Object.assign(toggle, toggle),
}

export default notifications