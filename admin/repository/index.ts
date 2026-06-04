import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admin/repository',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
index.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: index.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
index.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: index.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
index.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: index.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
index.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: index.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
index.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: index.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
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
 * @route '/admin/repository'
 */
        indexForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: index.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
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
 * @route '/admin/repository'
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
 * @route '/admin/repository'
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
 * @route '/admin/repository'
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
 * @see routes/web.php:379
 * @route '/admin/repository/system-repository'
 */
export const system = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: system.url(options),
    method: 'get',
})

system.definition = {
    methods: ["get","head"],
    url: '/admin/repository/system-repository',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:379
 * @route '/admin/repository/system-repository'
 */
system.url = (options?: RouteQueryOptions) => {
    return system.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:379
 * @route '/admin/repository/system-repository'
 */
system.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: system.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:379
 * @route '/admin/repository/system-repository'
 */
system.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: system.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:379
 * @route '/admin/repository/system-repository'
 */
    const systemForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: system.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:379
 * @route '/admin/repository/system-repository'
 */
        systemForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: system.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:379
 * @route '/admin/repository/system-repository'
 */
        systemForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: system.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    system.form = systemForm
/**
 * @see routes/web.php:383
 * @route '/admin/repository/system-expanded'
 */
export const systemExpanded = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemExpanded.url(options),
    method: 'get',
})

systemExpanded.definition = {
    methods: ["get","head"],
    url: '/admin/repository/system-expanded',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:383
 * @route '/admin/repository/system-expanded'
 */
systemExpanded.url = (options?: RouteQueryOptions) => {
    return systemExpanded.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:383
 * @route '/admin/repository/system-expanded'
 */
systemExpanded.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: systemExpanded.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:383
 * @route '/admin/repository/system-expanded'
 */
systemExpanded.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: systemExpanded.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:383
 * @route '/admin/repository/system-expanded'
 */
    const systemExpandedForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: systemExpanded.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:383
 * @route '/admin/repository/system-expanded'
 */
        systemExpandedForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemExpanded.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:383
 * @route '/admin/repository/system-expanded'
 */
        systemExpandedForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: systemExpanded.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    systemExpanded.form = systemExpandedForm
const repository = {
    index: Object.assign(index, index),
system: Object.assign(system, system),
systemExpanded: Object.assign(systemExpanded, systemExpanded),
}

export default repository