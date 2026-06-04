import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::submission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
export const submission = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: submission.url(options),
    method: 'get',
})

submission.definition = {
    methods: ["get","head"],
    url: '/management/thesis/final-submission',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::submission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
submission.url = (options?: RouteQueryOptions) => {
    return submission.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ThesisManagementController::submission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
submission.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: submission.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ThesisManagementController::submission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
submission.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: submission.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ThesisManagementController::submission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
    const submissionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: submission.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::submission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
        submissionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: submission.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ThesisManagementController::submission
 * @see app/Http/Controllers/Student/ThesisManagementController.php:256
 * @route '/management/thesis/final-submission'
 */
        submissionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: submission.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    submission.form = submissionForm
const final = {
    submission: Object.assign(submission, submission),
}

export default final