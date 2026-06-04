import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::system
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:21
 * @route '/admin/management/policies/system'
 */
export const system = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: system.url(options),
    method: 'get',
})

system.definition = {
    methods: ["get","head"],
    url: '/admin/management/policies/system',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::system
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:21
 * @route '/admin/management/policies/system'
 */
system.url = (options?: RouteQueryOptions) => {
    return system.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::system
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:21
 * @route '/admin/management/policies/system'
 */
system.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: system.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::system
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:21
 * @route '/admin/management/policies/system'
 */
system.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: system.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::system
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:21
 * @route '/admin/management/policies/system'
 */
    const systemForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: system.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::system
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:21
 * @route '/admin/management/policies/system'
 */
        systemForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: system.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::system
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:21
 * @route '/admin/management/policies/system'
 */
        systemForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: system.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    system.form = systemForm
/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::workflow
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:35
 * @route '/admin/management/policies/workflow'
 */
export const workflow = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: workflow.url(options),
    method: 'get',
})

workflow.definition = {
    methods: ["get","head"],
    url: '/admin/management/policies/workflow',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::workflow
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:35
 * @route '/admin/management/policies/workflow'
 */
workflow.url = (options?: RouteQueryOptions) => {
    return workflow.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::workflow
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:35
 * @route '/admin/management/policies/workflow'
 */
workflow.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: workflow.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::workflow
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:35
 * @route '/admin/management/policies/workflow'
 */
workflow.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: workflow.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::workflow
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:35
 * @route '/admin/management/policies/workflow'
 */
    const workflowForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: workflow.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::workflow
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:35
 * @route '/admin/management/policies/workflow'
 */
        workflowForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: workflow.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::workflow
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:35
 * @route '/admin/management/policies/workflow'
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
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::documents
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:51
 * @route '/admin/management/policies/documents'
 */
export const documents = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: documents.url(options),
    method: 'get',
})

documents.definition = {
    methods: ["get","head"],
    url: '/admin/management/policies/documents',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::documents
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:51
 * @route '/admin/management/policies/documents'
 */
documents.url = (options?: RouteQueryOptions) => {
    return documents.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::documents
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:51
 * @route '/admin/management/policies/documents'
 */
documents.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: documents.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::documents
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:51
 * @route '/admin/management/policies/documents'
 */
documents.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: documents.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::documents
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:51
 * @route '/admin/management/policies/documents'
 */
    const documentsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: documents.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::documents
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:51
 * @route '/admin/management/policies/documents'
 */
        documentsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: documents.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::documents
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:51
 * @route '/admin/management/policies/documents'
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
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::grading
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:66
 * @route '/admin/management/policies/grading'
 */
export const grading = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grading.url(options),
    method: 'get',
})

grading.definition = {
    methods: ["get","head"],
    url: '/admin/management/policies/grading',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::grading
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:66
 * @route '/admin/management/policies/grading'
 */
grading.url = (options?: RouteQueryOptions) => {
    return grading.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::grading
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:66
 * @route '/admin/management/policies/grading'
 */
grading.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grading.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::grading
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:66
 * @route '/admin/management/policies/grading'
 */
grading.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: grading.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::grading
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:66
 * @route '/admin/management/policies/grading'
 */
    const gradingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: grading.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::grading
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:66
 * @route '/admin/management/policies/grading'
 */
        gradingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: grading.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::grading
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:66
 * @route '/admin/management/policies/grading'
 */
        gradingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: grading.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    grading.form = gradingForm
/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::guidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:134
 * @route '/admin/management/policies/guidelines'
 */
export const guidelines = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: guidelines.url(options),
    method: 'get',
})

guidelines.definition = {
    methods: ["get","head"],
    url: '/admin/management/policies/guidelines',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::guidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:134
 * @route '/admin/management/policies/guidelines'
 */
guidelines.url = (options?: RouteQueryOptions) => {
    return guidelines.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::guidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:134
 * @route '/admin/management/policies/guidelines'
 */
guidelines.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: guidelines.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::guidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:134
 * @route '/admin/management/policies/guidelines'
 */
guidelines.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: guidelines.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::guidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:134
 * @route '/admin/management/policies/guidelines'
 */
    const guidelinesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: guidelines.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::guidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:134
 * @route '/admin/management/policies/guidelines'
 */
        guidelinesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: guidelines.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::guidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:134
 * @route '/admin/management/policies/guidelines'
 */
        guidelinesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: guidelines.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    guidelines.form = guidelinesForm
/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::updateGuidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:166
 * @route '/admin/management/policies/guidelines'
 */
export const updateGuidelines = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateGuidelines.url(options),
    method: 'post',
})

updateGuidelines.definition = {
    methods: ["post"],
    url: '/admin/management/policies/guidelines',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::updateGuidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:166
 * @route '/admin/management/policies/guidelines'
 */
updateGuidelines.url = (options?: RouteQueryOptions) => {
    return updateGuidelines.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::updateGuidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:166
 * @route '/admin/management/policies/guidelines'
 */
updateGuidelines.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: updateGuidelines.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::updateGuidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:166
 * @route '/admin/management/policies/guidelines'
 */
    const updateGuidelinesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: updateGuidelines.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\DepartmentPoliciesController::updateGuidelines
 * @see app/Http/Controllers/Admin/DepartmentPoliciesController.php:166
 * @route '/admin/management/policies/guidelines'
 */
        updateGuidelinesForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: updateGuidelines.url(options),
            method: 'post',
        })
    
    updateGuidelines.form = updateGuidelinesForm
const DepartmentPoliciesController = { system, workflow, documents, grading, guidelines, updateGuidelines }

export default DepartmentPoliciesController