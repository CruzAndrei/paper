import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
 * @see routes/web.php:134
 * @route '/management/compliance/ip'
 */
export const ip = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ip.url(options),
    method: 'get',
})

ip.definition = {
    methods: ["get","head"],
    url: '/management/compliance/ip',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:134
 * @route '/management/compliance/ip'
 */
ip.url = (options?: RouteQueryOptions) => {
    return ip.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:134
 * @route '/management/compliance/ip'
 */
ip.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ip.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:134
 * @route '/management/compliance/ip'
 */
ip.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ip.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:134
 * @route '/management/compliance/ip'
 */
    const ipForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ip.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:134
 * @route '/management/compliance/ip'
 */
        ipForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ip.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:134
 * @route '/management/compliance/ip'
 */
        ipForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ip.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ip.form = ipForm
/**
 * @see routes/web.php:138
 * @route '/management/compliance/presentation'
 */
export const presentation = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: presentation.url(options),
    method: 'get',
})

presentation.definition = {
    methods: ["get","head"],
    url: '/management/compliance/presentation',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:138
 * @route '/management/compliance/presentation'
 */
presentation.url = (options?: RouteQueryOptions) => {
    return presentation.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:138
 * @route '/management/compliance/presentation'
 */
presentation.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: presentation.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:138
 * @route '/management/compliance/presentation'
 */
presentation.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: presentation.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:138
 * @route '/management/compliance/presentation'
 */
    const presentationForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: presentation.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:138
 * @route '/management/compliance/presentation'
 */
        presentationForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: presentation.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:138
 * @route '/management/compliance/presentation'
 */
        presentationForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: presentation.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    presentation.form = presentationForm
const compliance = {
    ip: Object.assign(ip, ip),
presentation: Object.assign(presentation, presentation),
}

export default compliance