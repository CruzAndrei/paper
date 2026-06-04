import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documents
 * @see app/Http/Controllers/Student/ThesisManagementController.php:21
 * @route '/management/thesis/documents'
 */
export const documents = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: documents.url(options),
    method: 'get',
})

documents.definition = {
    methods: ["get","head"],
    url: '/management/thesis/documents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documents
 * @see app/Http/Controllers/Student/ThesisManagementController.php:21
 * @route '/management/thesis/documents'
 */
documents.url = (options?: RouteQueryOptions) => {
    return documents.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documents
 * @see app/Http/Controllers/Student/ThesisManagementController.php:21
 * @route '/management/thesis/documents'
 */
documents.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: documents.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documents
 * @see app/Http/Controllers/Student/ThesisManagementController.php:21
 * @route '/management/thesis/documents'
 */
documents.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: documents.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documents
 * @see app/Http/Controllers/Student/ThesisManagementController.php:21
 * @route '/management/thesis/documents'
 */
    const documentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: documents.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documents
 * @see app/Http/Controllers/Student/ThesisManagementController.php:21
 * @route '/management/thesis/documents'
 */
        documentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: documents.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documents
 * @see app/Http/Controllers/Student/ThesisManagementController.php:21
 * @route '/management/thesis/documents'
 */
        documentsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: documents.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    documents.form = documentsForm
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentUpload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:107
 * @route '/management/thesis/documents/upload'
 */
export const documentUpload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: documentUpload.url(options),
    method: 'post',
})

documentUpload.definition = {
    methods: ["post"],
    url: '/management/thesis/documents/upload',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentUpload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:107
 * @route '/management/thesis/documents/upload'
 */
documentUpload.url = (options?: RouteQueryOptions) => {
    return documentUpload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentUpload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:107
 * @route '/management/thesis/documents/upload'
 */
documentUpload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: documentUpload.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentUpload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:107
 * @route '/management/thesis/documents/upload'
 */
    const documentUploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: documentUpload.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentUpload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:107
 * @route '/management/thesis/documents/upload'
 */
        documentUploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: documentUpload.url(options),
            method: 'post',
        })
    
    documentUpload.form = documentUploadForm
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentDownload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
export const documentDownload = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: documentDownload.url(args, options),
    method: 'get',
})

documentDownload.definition = {
    methods: ["get","head"],
    url: '/management/thesis/documents/download/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentDownload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
documentDownload.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return documentDownload.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentDownload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
documentDownload.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: documentDownload.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentDownload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
documentDownload.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: documentDownload.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentDownload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
    const documentDownloadForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: documentDownload.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentDownload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
        documentDownloadForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: documentDownload.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentDownload
 * @see app/Http/Controllers/Student/ThesisManagementController.php:193
 * @route '/management/thesis/documents/download/{id}'
 */
        documentDownloadForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: documentDownload.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    documentDownload.form = documentDownloadForm
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentView
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
export const documentView = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: documentView.url(args, options),
    method: 'get',
})

documentView.definition = {
    methods: ["get","head"],
    url: '/management/thesis/documents/view/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentView
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
documentView.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return documentView.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentView
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
documentView.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: documentView.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentView
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
documentView.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: documentView.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentView
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
    const documentViewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: documentView.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentView
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
        documentViewForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: documentView.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::documentView
 * @see app/Http/Controllers/Student/ThesisManagementController.php:213
 * @route '/management/thesis/documents/view/{id}'
 */
        documentViewForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: documentView.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    documentView.form = documentViewForm
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::compare
 * @see app/Http/Controllers/Student/ThesisManagementController.php:238
 * @route '/management/thesis/compare'
 */
export const compare = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: compare.url(options),
    method: 'get',
})

compare.definition = {
    methods: ["get","head"],
    url: '/management/thesis/compare',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::compare
 * @see app/Http/Controllers/Student/ThesisManagementController.php:238
 * @route '/management/thesis/compare'
 */
compare.url = (options?: RouteQueryOptions) => {
    return compare.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::compare
 * @see app/Http/Controllers/Student/ThesisManagementController.php:238
 * @route '/management/thesis/compare'
 */
compare.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: compare.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::compare
 * @see app/Http/Controllers/Student/ThesisManagementController.php:238
 * @route '/management/thesis/compare'
 */
compare.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: compare.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::compare
 * @see app/Http/Controllers/Student/ThesisManagementController.php:238
 * @route '/management/thesis/compare'
 */
    const compareForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: compare.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::compare
 * @see app/Http/Controllers/Student/ThesisManagementController.php:238
 * @route '/management/thesis/compare'
 */
        compareForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: compare.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::compare
 * @see app/Http/Controllers/Student/ThesisManagementController.php:238
 * @route '/management/thesis/compare'
 */
        compareForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: compare.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    compare.form = compareForm
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::workflow
 * @see app/Http/Controllers/Student/ThesisManagementController.php:247
 * @route '/management/thesis/workflow'
 */
export const workflow = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: workflow.url(options),
    method: 'get',
})

workflow.definition = {
    methods: ["get","head"],
    url: '/management/thesis/workflow',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::workflow
 * @see app/Http/Controllers/Student/ThesisManagementController.php:247
 * @route '/management/thesis/workflow'
 */
workflow.url = (options?: RouteQueryOptions) => {
    return workflow.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::workflow
 * @see app/Http/Controllers/Student/ThesisManagementController.php:247
 * @route '/management/thesis/workflow'
 */
workflow.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: workflow.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::workflow
 * @see app/Http/Controllers/Student/ThesisManagementController.php:247
 * @route '/management/thesis/workflow'
 */
workflow.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: workflow.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::workflow
 * @see app/Http/Controllers/Student/ThesisManagementController.php:247
 * @route '/management/thesis/workflow'
 */
    const workflowForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: workflow.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::workflow
 * @see app/Http/Controllers/Student/ThesisManagementController.php:247
 * @route '/management/thesis/workflow'
 */
        workflowForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: workflow.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::workflow
 * @see app/Http/Controllers/Student/ThesisManagementController.php:247
 * @route '/management/thesis/workflow'
 */
        workflowForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: workflow.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    workflow.form = workflowForm
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::finalSubmission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
export const finalSubmission = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: finalSubmission.url(options),
    method: 'get',
})

finalSubmission.definition = {
    methods: ["get","head"],
    url: '/management/thesis/final-submission',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::finalSubmission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
finalSubmission.url = (options?: RouteQueryOptions) => {
    return finalSubmission.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::finalSubmission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
finalSubmission.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: finalSubmission.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::finalSubmission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
finalSubmission.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: finalSubmission.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::finalSubmission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
    const finalSubmissionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: finalSubmission.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::finalSubmission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
        finalSubmissionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: finalSubmission.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::finalSubmission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
        finalSubmissionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: finalSubmission.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    finalSubmission.form = finalSubmissionForm
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::changeRequest
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
export const changeRequest = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changeRequest.url(options),
    method: 'get',
})

changeRequest.definition = {
    methods: ["get","head"],
    url: '/management/thesis/change-request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::changeRequest
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
changeRequest.url = (options?: RouteQueryOptions) => {
    return changeRequest.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::changeRequest
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
changeRequest.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: changeRequest.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::changeRequest
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
changeRequest.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: changeRequest.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::changeRequest
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
    const changeRequestForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: changeRequest.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::changeRequest
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
        changeRequestForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: changeRequest.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::changeRequest
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
        changeRequestForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: changeRequest.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    changeRequest.form = changeRequestForm
const ThesisManagementController = { documents, documentUpload, documentDownload, documentView, compare, workflow, finalSubmission, changeRequest }

export default ThesisManagementController