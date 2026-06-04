import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::upload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:107
 * @route '/management/thesis/documents/upload'
 */
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/management/thesis/documents/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::upload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:107
 * @route '/management/thesis/documents/upload'
 */
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::upload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:107
 * @route '/management/thesis/documents/upload'
 */
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::upload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:107
 * @route '/management/thesis/documents/upload'
 */
    const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: upload.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::upload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:107
 * @route '/management/thesis/documents/upload'
 */
        uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload.url(options),
            method: 'post',
        })
    
    upload.form = uploadForm
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::download
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
export const download = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})

download.definition = {
    methods: ["get","head"],
    url: '/management/thesis/documents/download/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::download
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
download.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return download.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::download
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
download.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: download.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::download
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
download.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: download.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::download
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
    const downloadForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: download.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::download
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
        downloadForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::download
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
        downloadForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: download.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    download.form = downloadForm
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::view
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
export const view = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})

view.definition = {
    methods: ["get","head"],
    url: '/management/thesis/documents/view/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::view
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
view.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return view.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::view
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
view.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: view.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::view
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
view.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: view.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::view
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
    const viewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: view.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::view
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
        viewForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::view
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
        viewForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: view.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    view.form = viewForm
const documents = {
    upload: Object.assign(upload, upload),
download: Object.assign(download, download),
view: Object.assign(view, view),
}

export default documents