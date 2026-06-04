import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
import documentsC2fd24 from './documents'
import final from './final'
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
* @see \App\Http\Controllers\Student\ThesisManagementController::request
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
export const request = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: request.url(options),
    method: 'get',
})

request.definition = {
    methods: ["get","head"],
    url: '/management/thesis/change-request',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::request
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
request.url = (options?: RouteQueryOptions) => {
    return request.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::request
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
request.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: request.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::request
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
request.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: request.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::request
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
    const requestForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: request.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::request
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
        requestForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: request.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::request
 * @see app/Http/Controllers/Student/ThesisManagementController.php:265
 * @route '/management/thesis/change-request'
 */
        requestForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: request.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    request.form = requestForm
const thesis = {
    documents: Object.assign(documents, documentsC2fd24),
compare: Object.assign(compare, compare),
workflow: Object.assign(workflow, workflow),
final: Object.assign(final, final),
request: Object.assign(request, request),
}

export default thesis