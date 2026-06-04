import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\FileImportController::importMethod
 * @see app/Http/Controllers/FileImportController.php:22
 * @route '/file-import'
 */
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/file-import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FileImportController::importMethod
 * @see app/Http/Controllers/FileImportController.php:22
 * @route '/file-import'
 */
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FileImportController::importMethod
 * @see app/Http/Controllers/FileImportController.php:22
 * @route '/file-import'
 */
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\FileImportController::importMethod
 * @see app/Http/Controllers/FileImportController.php:22
 * @route '/file-import'
 */
    const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importMethod.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FileImportController::importMethod
 * @see app/Http/Controllers/FileImportController.php:22
 * @route '/file-import'
 */
        importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importMethod.url(options),
            method: 'post',
        })
    
    importMethod.form = importMethodForm
const file = {
    import: Object.assign(importMethod, importMethod),
}

export default file