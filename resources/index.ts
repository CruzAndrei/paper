import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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
const resources = {
    download: Object.assign(download, download),
}

export default resources