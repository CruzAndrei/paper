import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \Laravel\Fortify\Http\Controllers\RegisteredUserController::register
 * @see vendor/laravel/fortify/src/Http/Controllers/RegisteredUserController.php:41
 * @route '/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\PageController::home
 * @see app/Http/Controllers/PageController.php:10
 * @route '/'
 */
export const home = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})

home.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::home
 * @see app/Http/Controllers/PageController.php:10
 * @route '/'
 */
home.url = (options?: RouteQueryOptions) => {
    return home.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::home
 * @see app/Http/Controllers/PageController.php:10
 * @route '/'
 */
home.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: home.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PageController::home
 * @see app/Http/Controllers/PageController.php:10
 * @route '/'
 */
home.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: home.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PageController::home
 * @see app/Http/Controllers/PageController.php:10
 * @route '/'
 */
    const homeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: home.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PageController::home
 * @see app/Http/Controllers/PageController.php:10
 * @route '/'
 */
        homeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PageController::home
 * @see app/Http/Controllers/PageController.php:10
 * @route '/'
 */
        homeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: home.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    home.form = homeForm
/**
* @see \App\Http\Controllers\PageController::faq
 * @see app/Http/Controllers/PageController.php:17
 * @route '/faq'
 */
export const faq = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: faq.url(options),
    method: 'get',
})

faq.definition = {
    methods: ["get","head"],
    url: '/faq',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PageController::faq
 * @see app/Http/Controllers/PageController.php:17
 * @route '/faq'
 */
faq.url = (options?: RouteQueryOptions) => {
    return faq.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PageController::faq
 * @see app/Http/Controllers/PageController.php:17
 * @route '/faq'
 */
faq.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: faq.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PageController::faq
 * @see app/Http/Controllers/PageController.php:17
 * @route '/faq'
 */
faq.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: faq.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PageController::faq
 * @see app/Http/Controllers/PageController.php:17
 * @route '/faq'
 */
    const faqForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: faq.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PageController::faq
 * @see app/Http/Controllers/PageController.php:17
 * @route '/faq'
 */
        faqForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: faq.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PageController::faq
 * @see app/Http/Controllers/PageController.php:17
 * @route '/faq'
 */
        faqForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: faq.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    faq.form = faqForm
/**
 * @see routes/web.php:89
 * @route '/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:89
 * @route '/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:89
 * @route '/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:89
 * @route '/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:89
 * @route '/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:89
 * @route '/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:89
 * @route '/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\ResourceController::resources
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
export const resources = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: resources.url(options),
    method: 'get',
})

resources.definition = {
    methods: ["get","head"],
    url: '/resources',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ResourceController::resources
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
resources.url = (options?: RouteQueryOptions) => {
    return resources.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ResourceController::resources
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
resources.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: resources.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ResourceController::resources
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
resources.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: resources.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ResourceController::resources
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
    const resourcesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: resources.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ResourceController::resources
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
        resourcesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: resources.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ResourceController::resources
 * @see app/Http/Controllers/ResourceController.php:17
 * @route '/resources'
 */
        resourcesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: resources.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    resources.form = resourcesForm
/**
 * @see routes/web.php:454
 * @route '/ui-showcase'
 */
export const uiShowcase = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: uiShowcase.url(options),
    method: 'get',
})

uiShowcase.definition = {
    methods: ["get","head"],
    url: '/ui-showcase',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:454
 * @route '/ui-showcase'
 */
uiShowcase.url = (options?: RouteQueryOptions) => {
    return uiShowcase.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:454
 * @route '/ui-showcase'
 */
uiShowcase.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: uiShowcase.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:454
 * @route '/ui-showcase'
 */
uiShowcase.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: uiShowcase.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:454
 * @route '/ui-showcase'
 */
    const uiShowcaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: uiShowcase.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:454
 * @route '/ui-showcase'
 */
        uiShowcaseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: uiShowcase.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:454
 * @route '/ui-showcase'
 */
        uiShowcaseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: uiShowcase.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    uiShowcase.form = uiShowcaseForm
/**
 * @see routes/web.php:458
 * @route '/components-showcase'
 */
export const componentsShowcase = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: componentsShowcase.url(options),
    method: 'get',
})

componentsShowcase.definition = {
    methods: ["get","head"],
    url: '/components-showcase',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:458
 * @route '/components-showcase'
 */
componentsShowcase.url = (options?: RouteQueryOptions) => {
    return componentsShowcase.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:458
 * @route '/components-showcase'
 */
componentsShowcase.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: componentsShowcase.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:458
 * @route '/components-showcase'
 */
componentsShowcase.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: componentsShowcase.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:458
 * @route '/components-showcase'
 */
    const componentsShowcaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: componentsShowcase.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:458
 * @route '/components-showcase'
 */
        componentsShowcaseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: componentsShowcase.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:458
 * @route '/components-showcase'
 */
        componentsShowcaseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: componentsShowcase.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    componentsShowcase.form = componentsShowcaseForm
/**
 * @see routes/web.php:462
 * @route '/badges-icons-showcase'
 */
export const badgesIconsShowcase = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: badgesIconsShowcase.url(options),
    method: 'get',
})

badgesIconsShowcase.definition = {
    methods: ["get","head"],
    url: '/badges-icons-showcase',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:462
 * @route '/badges-icons-showcase'
 */
badgesIconsShowcase.url = (options?: RouteQueryOptions) => {
    return badgesIconsShowcase.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:462
 * @route '/badges-icons-showcase'
 */
badgesIconsShowcase.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: badgesIconsShowcase.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:462
 * @route '/badges-icons-showcase'
 */
badgesIconsShowcase.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: badgesIconsShowcase.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:462
 * @route '/badges-icons-showcase'
 */
    const badgesIconsShowcaseForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: badgesIconsShowcase.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:462
 * @route '/badges-icons-showcase'
 */
        badgesIconsShowcaseForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: badgesIconsShowcase.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:462
 * @route '/badges-icons-showcase'
 */
        badgesIconsShowcaseForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: badgesIconsShowcase.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    badgesIconsShowcase.form = badgesIconsShowcaseForm