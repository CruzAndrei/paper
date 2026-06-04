import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
const RedirectController93a025ffd7f755b4af4035ccd412b66b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
    method: 'get',
})

RedirectController93a025ffd7f755b4af4035ccd412b66b.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/management',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
RedirectController93a025ffd7f755b4af4035ccd412b66b.url = (options?: RouteQueryOptions) => {
    return RedirectController93a025ffd7f755b4af4035ccd412b66b.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
RedirectController93a025ffd7f755b4af4035ccd412b66b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
RedirectController93a025ffd7f755b4af4035ccd412b66b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
RedirectController93a025ffd7f755b4af4035ccd412b66b.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
RedirectController93a025ffd7f755b4af4035ccd412b66b.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
RedirectController93a025ffd7f755b4af4035ccd412b66b.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
RedirectController93a025ffd7f755b4af4035ccd412b66b.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
RedirectController93a025ffd7f755b4af4035ccd412b66b.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
    const RedirectController93a025ffd7f755b4af4035ccd412b66bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
        RedirectController93a025ffd7f755b4af4035ccd412b66bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
        RedirectController93a025ffd7f755b4af4035ccd412b66bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController93a025ffd7f755b4af4035ccd412b66b.url({
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
 * @route '/management'
 */
        RedirectController93a025ffd7f755b4af4035ccd412b66bForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController93a025ffd7f755b4af4035ccd412b66b.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/management'
 */
        RedirectController93a025ffd7f755b4af4035ccd412b66bForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController93a025ffd7f755b4af4035ccd412b66b.url({
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
 * @route '/management'
 */
        RedirectController93a025ffd7f755b4af4035ccd412b66bForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController93a025ffd7f755b4af4035ccd412b66b.url({
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
 * @route '/management'
 */
        RedirectController93a025ffd7f755b4af4035ccd412b66bForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController93a025ffd7f755b4af4035ccd412b66b.url({
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
 * @route '/management'
 */
        RedirectController93a025ffd7f755b4af4035ccd412b66bForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController93a025ffd7f755b4af4035ccd412b66b.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectController93a025ffd7f755b4af4035ccd412b66b.form = RedirectController93a025ffd7f755b4af4035ccd412b66bForm
    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
const RedirectController89b3286063a45ab318279cad2212a1c6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
    method: 'get',
})

RedirectController89b3286063a45ab318279cad2212a1c6.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/faculty/coordinator/defense-management',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
RedirectController89b3286063a45ab318279cad2212a1c6.url = (options?: RouteQueryOptions) => {
    return RedirectController89b3286063a45ab318279cad2212a1c6.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
RedirectController89b3286063a45ab318279cad2212a1c6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
RedirectController89b3286063a45ab318279cad2212a1c6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
RedirectController89b3286063a45ab318279cad2212a1c6.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
RedirectController89b3286063a45ab318279cad2212a1c6.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
RedirectController89b3286063a45ab318279cad2212a1c6.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
RedirectController89b3286063a45ab318279cad2212a1c6.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
RedirectController89b3286063a45ab318279cad2212a1c6.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
    const RedirectController89b3286063a45ab318279cad2212a1c6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
        RedirectController89b3286063a45ab318279cad2212a1c6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
        RedirectController89b3286063a45ab318279cad2212a1c6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController89b3286063a45ab318279cad2212a1c6.url({
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
 * @route '/faculty/coordinator/defense-management'
 */
        RedirectController89b3286063a45ab318279cad2212a1c6Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController89b3286063a45ab318279cad2212a1c6.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/defense-management'
 */
        RedirectController89b3286063a45ab318279cad2212a1c6Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController89b3286063a45ab318279cad2212a1c6.url({
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
 * @route '/faculty/coordinator/defense-management'
 */
        RedirectController89b3286063a45ab318279cad2212a1c6Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController89b3286063a45ab318279cad2212a1c6.url({
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
 * @route '/faculty/coordinator/defense-management'
 */
        RedirectController89b3286063a45ab318279cad2212a1c6Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController89b3286063a45ab318279cad2212a1c6.url({
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
 * @route '/faculty/coordinator/defense-management'
 */
        RedirectController89b3286063a45ab318279cad2212a1c6Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController89b3286063a45ab318279cad2212a1c6.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectController89b3286063a45ab318279cad2212a1c6.form = RedirectController89b3286063a45ab318279cad2212a1c6Form
    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
const RedirectControllerf962a5a599e0c471e387e721401d3fe2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
    method: 'get',
})

RedirectControllerf962a5a599e0c471e387e721401d3fe2.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/faculty/coordinator/thesis',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
RedirectControllerf962a5a599e0c471e387e721401d3fe2.url = (options?: RouteQueryOptions) => {
    return RedirectControllerf962a5a599e0c471e387e721401d3fe2.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
RedirectControllerf962a5a599e0c471e387e721401d3fe2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
RedirectControllerf962a5a599e0c471e387e721401d3fe2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
RedirectControllerf962a5a599e0c471e387e721401d3fe2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
RedirectControllerf962a5a599e0c471e387e721401d3fe2.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
RedirectControllerf962a5a599e0c471e387e721401d3fe2.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
RedirectControllerf962a5a599e0c471e387e721401d3fe2.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
RedirectControllerf962a5a599e0c471e387e721401d3fe2.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
    const RedirectControllerf962a5a599e0c471e387e721401d3fe2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
        RedirectControllerf962a5a599e0c471e387e721401d3fe2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
        RedirectControllerf962a5a599e0c471e387e721401d3fe2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url({
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
        RedirectControllerf962a5a599e0c471e387e721401d3fe2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/faculty/coordinator/thesis'
 */
        RedirectControllerf962a5a599e0c471e387e721401d3fe2Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url({
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
        RedirectControllerf962a5a599e0c471e387e721401d3fe2Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url({
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
        RedirectControllerf962a5a599e0c471e387e721401d3fe2Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url({
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
        RedirectControllerf962a5a599e0c471e387e721401d3fe2Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerf962a5a599e0c471e387e721401d3fe2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectControllerf962a5a599e0c471e387e721401d3fe2.form = RedirectControllerf962a5a599e0c471e387e721401d3fe2Form
    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
const RedirectController9c60a1d4d0073624bb8b5d95a631c651 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
    method: 'get',
})

RedirectController9c60a1d4d0073624bb8b5d95a631c651.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admin/management',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
RedirectController9c60a1d4d0073624bb8b5d95a631c651.url = (options?: RouteQueryOptions) => {
    return RedirectController9c60a1d4d0073624bb8b5d95a631c651.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
RedirectController9c60a1d4d0073624bb8b5d95a631c651.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
RedirectController9c60a1d4d0073624bb8b5d95a631c651.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
RedirectController9c60a1d4d0073624bb8b5d95a631c651.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
RedirectController9c60a1d4d0073624bb8b5d95a631c651.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
RedirectController9c60a1d4d0073624bb8b5d95a631c651.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
RedirectController9c60a1d4d0073624bb8b5d95a631c651.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
RedirectController9c60a1d4d0073624bb8b5d95a631c651.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
    const RedirectController9c60a1d4d0073624bb8b5d95a631c651Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
        RedirectController9c60a1d4d0073624bb8b5d95a631c651Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
        RedirectController9c60a1d4d0073624bb8b5d95a631c651Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url({
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
 * @route '/admin/management'
 */
        RedirectController9c60a1d4d0073624bb8b5d95a631c651Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management'
 */
        RedirectController9c60a1d4d0073624bb8b5d95a631c651Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url({
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
 * @route '/admin/management'
 */
        RedirectController9c60a1d4d0073624bb8b5d95a631c651Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url({
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
 * @route '/admin/management'
 */
        RedirectController9c60a1d4d0073624bb8b5d95a631c651Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url({
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
 * @route '/admin/management'
 */
        RedirectController9c60a1d4d0073624bb8b5d95a631c651Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController9c60a1d4d0073624bb8b5d95a631c651.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectController9c60a1d4d0073624bb8b5d95a631c651.form = RedirectController9c60a1d4d0073624bb8b5d95a631c651Form
    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
const RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
    method: 'get',
})

RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admin/management/policies',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url = (options?: RouteQueryOptions) => {
    return RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
    const RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
        RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
        RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url({
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
 * @route '/admin/management/policies'
 */
        RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/management/policies'
 */
        RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url({
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
 * @route '/admin/management/policies'
 */
        RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url({
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
 * @route '/admin/management/policies'
 */
        RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url({
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
 * @route '/admin/management/policies'
 */
        RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264.form = RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264Form
    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
const RedirectControllerab6238343a391c17f691e43a37411625 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
    method: 'get',
})

RedirectControllerab6238343a391c17f691e43a37411625.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admin/repository',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
RedirectControllerab6238343a391c17f691e43a37411625.url = (options?: RouteQueryOptions) => {
    return RedirectControllerab6238343a391c17f691e43a37411625.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
RedirectControllerab6238343a391c17f691e43a37411625.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
RedirectControllerab6238343a391c17f691e43a37411625.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
RedirectControllerab6238343a391c17f691e43a37411625.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
RedirectControllerab6238343a391c17f691e43a37411625.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
RedirectControllerab6238343a391c17f691e43a37411625.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
RedirectControllerab6238343a391c17f691e43a37411625.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
RedirectControllerab6238343a391c17f691e43a37411625.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
    const RedirectControllerab6238343a391c17f691e43a37411625Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
        RedirectControllerab6238343a391c17f691e43a37411625Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
        RedirectControllerab6238343a391c17f691e43a37411625Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerab6238343a391c17f691e43a37411625.url({
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
        RedirectControllerab6238343a391c17f691e43a37411625Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerab6238343a391c17f691e43a37411625.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/admin/repository'
 */
        RedirectControllerab6238343a391c17f691e43a37411625Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerab6238343a391c17f691e43a37411625.url({
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
        RedirectControllerab6238343a391c17f691e43a37411625Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerab6238343a391c17f691e43a37411625.url({
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
        RedirectControllerab6238343a391c17f691e43a37411625Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectControllerab6238343a391c17f691e43a37411625.url({
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
        RedirectControllerab6238343a391c17f691e43a37411625Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectControllerab6238343a391c17f691e43a37411625.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectControllerab6238343a391c17f691e43a37411625.form = RedirectControllerab6238343a391c17f691e43a37411625Form
    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
const RedirectController4b87d2df7e3aa853f6720faea796e36c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'get',
})

RedirectController4b87d2df7e3aa853f6720faea796e36c.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/settings',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
RedirectController4b87d2df7e3aa853f6720faea796e36c.url = (options?: RouteQueryOptions) => {
    return RedirectController4b87d2df7e3aa853f6720faea796e36c.definition.url + queryParams(options)
}

/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
RedirectController4b87d2df7e3aa853f6720faea796e36c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'get',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
RedirectController4b87d2df7e3aa853f6720faea796e36c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'head',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
RedirectController4b87d2df7e3aa853f6720faea796e36c.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'post',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
RedirectController4b87d2df7e3aa853f6720faea796e36c.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'put',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
RedirectController4b87d2df7e3aa853f6720faea796e36c.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'patch',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
RedirectController4b87d2df7e3aa853f6720faea796e36c.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'delete',
})
/**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
RedirectController4b87d2df7e3aa853f6720faea796e36c.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
    method: 'options',
})

    /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
    const RedirectController4b87d2df7e3aa853f6720faea796e36cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
        method: 'get',
    })

            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
        RedirectController4b87d2df7e3aa853f6720faea796e36cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
            method: 'get',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
        RedirectController4b87d2df7e3aa853f6720faea796e36cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
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
 * @route '/settings'
 */
        RedirectController4b87d2df7e3aa853f6720faea796e36cForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url(options),
            method: 'post',
        })
            /**
* @see \Illuminate\Routing\RedirectController::__invoke
 * @see vendor/laravel/framework/src/Illuminate/Routing/RedirectController.php:19
 * @route '/settings'
 */
        RedirectController4b87d2df7e3aa853f6720faea796e36cForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
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
 * @route '/settings'
 */
        RedirectController4b87d2df7e3aa853f6720faea796e36cForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
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
 * @route '/settings'
 */
        RedirectController4b87d2df7e3aa853f6720faea796e36cForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
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
 * @route '/settings'
 */
        RedirectController4b87d2df7e3aa853f6720faea796e36cForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: RedirectController4b87d2df7e3aa853f6720faea796e36c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    RedirectController4b87d2df7e3aa853f6720faea796e36c.form = RedirectController4b87d2df7e3aa853f6720faea796e36cForm

const RedirectController = {
    '/management': RedirectController93a025ffd7f755b4af4035ccd412b66b,
    '/faculty/coordinator/defense-management': RedirectController89b3286063a45ab318279cad2212a1c6,
    '/faculty/coordinator/thesis': RedirectControllerf962a5a599e0c471e387e721401d3fe2,
    '/admin/management': RedirectController9c60a1d4d0073624bb8b5d95a631c651,
    '/admin/management/policies': RedirectControllerb9c7b60956cd2ec244f1d35ea6ecf264,
    '/admin/repository': RedirectControllerab6238343a391c17f691e43a37411625,
    '/settings': RedirectController4b87d2df7e3aa853f6720faea796e36c,
}

export default RedirectController