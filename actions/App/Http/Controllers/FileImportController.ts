import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FileImportController::store
 * @see app/Http/Controllers/FileImportController.php:22
 * @route '/file-import'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/file-import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FileImportController::store
 * @see app/Http/Controllers/FileImportController.php:22
 * @route '/file-import'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FileImportController::store
 * @see app/Http/Controllers/FileImportController.php:22
 * @route '/file-import'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\FileImportController::store
 * @see app/Http/Controllers/FileImportController.php:22
 * @route '/file-import'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\FileImportController::store
 * @see app/Http/Controllers/FileImportController.php:22
 * @route '/file-import'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const FileImportController = { store }

export default FileImportController