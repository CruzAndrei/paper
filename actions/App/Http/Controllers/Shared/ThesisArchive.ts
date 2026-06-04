import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Shared\ThesisArchive::index
 * @see app/Http/Controllers/Shared/ThesisArchive.php:16
 * @route '/repository'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/repository',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\ThesisArchive::index
 * @see app/Http/Controllers/Shared/ThesisArchive.php:16
 * @route '/repository'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ThesisArchive::index
 * @see app/Http/Controllers/Shared/ThesisArchive.php:16
 * @route '/repository'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\ThesisArchive::index
 * @see app/Http/Controllers/Shared/ThesisArchive.php:16
 * @route '/repository'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\ThesisArchive::index
 * @see app/Http/Controllers/Shared/ThesisArchive.php:16
 * @route '/repository'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\ThesisArchive::index
 * @see app/Http/Controllers/Shared/ThesisArchive.php:16
 * @route '/repository'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\ThesisArchive::index
 * @see app/Http/Controllers/Shared/ThesisArchive.php:16
 * @route '/repository'
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
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
const show9c4a7e55ac61f337b85466dd76f52201 = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show9c4a7e55ac61f337b85466dd76f52201.url(args, options),
    method: 'get',
})

show9c4a7e55ac61f337b85466dd76f52201.definition = {
    methods: ["get","head"],
    url: '/repository/preview/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
show9c4a7e55ac61f337b85466dd76f52201.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show9c4a7e55ac61f337b85466dd76f52201.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
show9c4a7e55ac61f337b85466dd76f52201.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show9c4a7e55ac61f337b85466dd76f52201.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
show9c4a7e55ac61f337b85466dd76f52201.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show9c4a7e55ac61f337b85466dd76f52201.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
    const show9c4a7e55ac61f337b85466dd76f52201Form = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show9c4a7e55ac61f337b85466dd76f52201.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
        show9c4a7e55ac61f337b85466dd76f52201Form.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show9c4a7e55ac61f337b85466dd76f52201.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
        show9c4a7e55ac61f337b85466dd76f52201Form.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show9c4a7e55ac61f337b85466dd76f52201.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show9c4a7e55ac61f337b85466dd76f52201.form = show9c4a7e55ac61f337b85466dd76f52201Form
    /**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/preview/{id}'
 */
const showf45d64920f1de13b5d7db9de3554ffbb = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf45d64920f1de13b5d7db9de3554ffbb.url(args, options),
    method: 'get',
})

showf45d64920f1de13b5d7db9de3554ffbb.definition = {
    methods: ["get","head"],
    url: '/preview/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/preview/{id}'
 */
showf45d64920f1de13b5d7db9de3554ffbb.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showf45d64920f1de13b5d7db9de3554ffbb.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/preview/{id}'
 */
showf45d64920f1de13b5d7db9de3554ffbb.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf45d64920f1de13b5d7db9de3554ffbb.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/preview/{id}'
 */
showf45d64920f1de13b5d7db9de3554ffbb.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showf45d64920f1de13b5d7db9de3554ffbb.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/preview/{id}'
 */
    const showf45d64920f1de13b5d7db9de3554ffbbForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showf45d64920f1de13b5d7db9de3554ffbb.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/preview/{id}'
 */
        showf45d64920f1de13b5d7db9de3554ffbbForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf45d64920f1de13b5d7db9de3554ffbb.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\ThesisArchive::show
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/preview/{id}'
 */
        showf45d64920f1de13b5d7db9de3554ffbbForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showf45d64920f1de13b5d7db9de3554ffbb.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showf45d64920f1de13b5d7db9de3554ffbb.form = showf45d64920f1de13b5d7db9de3554ffbbForm

export const show = {
    '/repository/preview/{id}': show9c4a7e55ac61f337b85466dd76f52201,
    '/preview/{id}': showf45d64920f1de13b5d7db9de3554ffbb,
}

const ThesisArchive = { index, show }

export default ThesisArchive