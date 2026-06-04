import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PdfViewerController::streamPdf
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
export const streamPdf = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: streamPdf.url(args, options),
    method: 'get',
})

streamPdf.definition = {
    methods: ["get","head"],
    url: '/manuscripts/{id}/stream',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PdfViewerController::streamPdf
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
streamPdf.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return streamPdf.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PdfViewerController::streamPdf
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
streamPdf.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: streamPdf.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PdfViewerController::streamPdf
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
streamPdf.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: streamPdf.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PdfViewerController::streamPdf
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
    const streamPdfForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: streamPdf.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PdfViewerController::streamPdf
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
        streamPdfForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: streamPdf.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PdfViewerController::streamPdf
 * @see app/Http/Controllers/PdfViewerController.php:12
 * @route '/manuscripts/{id}/stream'
 */
        streamPdfForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: streamPdf.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    streamPdf.form = streamPdfForm
const PdfViewerController = { streamPdf }

export default PdfViewerController