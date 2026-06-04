import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
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
* @see \App\Http\Controllers\Shared\ThesisArchive::preview
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
export const preview = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preview.url(args, options),
    method: 'get',
})

preview.definition = {
    methods: ["get","head"],
    url: '/repository/preview/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Shared\ThesisArchive::preview
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
preview.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return preview.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Shared\ThesisArchive::preview
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
preview.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: preview.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Shared\ThesisArchive::preview
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
preview.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: preview.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Shared\ThesisArchive::preview
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
    const previewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: preview.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Shared\ThesisArchive::preview
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
        previewForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: preview.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Shared\ThesisArchive::preview
 * @see app/Http/Controllers/Shared/ThesisArchive.php:79
 * @route '/repository/preview/{id}'
 */
        previewForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: preview.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    preview.form = previewForm
const repository = {
    index: Object.assign(index, index),
preview: Object.assign(preview, preview),
}

export default repository