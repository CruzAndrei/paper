import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/faculty/coordinator/thesis',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
index.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
index.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: index.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
index.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: index.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
index.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: index.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
index.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: index.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
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
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
        indexForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
        indexForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
        indexForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
        indexForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
        indexForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ThesisRegistry::registry
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ThesisRegistry.php:15
 * @route '/faculty/coordinator/thesis/registry'
 */
export const registry = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registry.url(options),
    method: 'get',
})

registry.definition = {
    methods: ["get","head"],
    url: '/faculty/coordinator/thesis/registry',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ThesisRegistry::registry
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ThesisRegistry.php:15
 * @route '/faculty/coordinator/thesis/registry'
 */
registry.url = (options?: RouteQueryOptions) => {
    return registry.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ThesisRegistry::registry
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ThesisRegistry.php:15
 * @route '/faculty/coordinator/thesis/registry'
 */
registry.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registry.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ThesisRegistry::registry
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ThesisRegistry.php:15
 * @route '/faculty/coordinator/thesis/registry'
 */
registry.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: registry.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ThesisRegistry::registry
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ThesisRegistry.php:15
 * @route '/faculty/coordinator/thesis/registry'
 */
    const registryForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: registry.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ThesisRegistry::registry
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ThesisRegistry.php:15
 * @route '/faculty/coordinator/thesis/registry'
 */
        registryForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: registry.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ThesisRegistry::registry
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ThesisRegistry.php:15
 * @route '/faculty/coordinator/thesis/registry'
 */
        registryForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: registry.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    registry.form = registryForm
/**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ProgressController::progress
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ProgressController.php:12
 * @route '/faculty/coordinator/thesis/progress'
 */
export const progress = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: progress.url(options),
    method: 'get',
})

progress.definition = {
    methods: ["get","head"],
    url: '/faculty/coordinator/thesis/progress',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ProgressController::progress
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ProgressController.php:12
 * @route '/faculty/coordinator/thesis/progress'
 */
progress.url = (options?: RouteQueryOptions) => {
    return progress.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ProgressController::progress
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ProgressController.php:12
 * @route '/faculty/coordinator/thesis/progress'
 */
progress.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: progress.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ProgressController::progress
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ProgressController.php:12
 * @route '/faculty/coordinator/thesis/progress'
 */
progress.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: progress.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ProgressController::progress
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ProgressController.php:12
 * @route '/faculty/coordinator/thesis/progress'
 */
    const progressForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: progress.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ProgressController::progress
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ProgressController.php:12
 * @route '/faculty/coordinator/thesis/progress'
 */
        progressForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: progress.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Coordinator\ThesisMonitoring\ProgressController::progress
 * @see app/Http/Controllers/Faculty/Coordinator/ThesisMonitoring/ProgressController.php:12
 * @route '/faculty/coordinator/thesis/progress'
 */
        progressForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: progress.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    progress.form = progressForm
const thesis = {
    index: Object.assign(index, index),
registry: Object.assign(registry, registry),
progress: Object.assign(progress, progress),
}

export default thesis