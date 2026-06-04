import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PdfViewerController::stream
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
export const stream = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stream.url(args, options),
    method: 'get',
})

stream.definition = {
    methods: ["get","head"],
    url: '/manuscripts/{id}/stream',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PdfViewerController::stream
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
stream.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return stream.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PdfViewerController::stream
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
stream.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stream.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PdfViewerController::stream
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
stream.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stream.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PdfViewerController::stream
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
    const streamForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stream.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PdfViewerController::stream
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
        streamForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stream.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PdfViewerController::stream
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
        streamForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stream.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stream.form = streamForm
const manuscripts = {
    stream: Object.assign(stream, stream),
}

export default manuscripts