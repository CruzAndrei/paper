import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:16
 * @route '/faculty/adviser/thesis-review'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/faculty/adviser/thesis-review',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:16
 * @route '/faculty/adviser/thesis-review'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:16
 * @route '/faculty/adviser/thesis-review'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:16
 * @route '/faculty/adviser/thesis-review'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:16
 * @route '/faculty/adviser/thesis-review'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:16
 * @route '/faculty/adviser/thesis-review'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::index
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:16
 * @route '/faculty/adviser/thesis-review'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::submissions
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:83
 * @route '/faculty/adviser/thesis-review/{groupCode}'
 */
export const submissions = (args: { groupCode: string | number } | [groupCode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: submissions.url(args, options),
    method: 'get',
})

submissions.definition = {
    methods: ["get","head"],
    url: '/faculty/adviser/thesis-review/{groupCode}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::submissions
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:83
 * @route '/faculty/adviser/thesis-review/{groupCode}'
 */
submissions.url = (args: { groupCode: string | number } | [groupCode: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { groupCode: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    groupCode: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        groupCode: args.groupCode,
                }

    return submissions.definition.url
            .replace('{groupCode}', parsedArgs.groupCode.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::submissions
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:83
 * @route '/faculty/adviser/thesis-review/{groupCode}'
 */
submissions.get = (args: { groupCode: string | number } | [groupCode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: submissions.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::submissions
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:83
 * @route '/faculty/adviser/thesis-review/{groupCode}'
 */
submissions.head = (args: { groupCode: string | number } | [groupCode: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: submissions.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::submissions
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:83
 * @route '/faculty/adviser/thesis-review/{groupCode}'
 */
    const submissionsForm = (args: { groupCode: string | number } | [groupCode: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: submissions.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::submissions
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:83
 * @route '/faculty/adviser/thesis-review/{groupCode}'
 */
        submissionsForm.get = (args: { groupCode: string | number } | [groupCode: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: submissions.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::submissions
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:83
 * @route '/faculty/adviser/thesis-review/{groupCode}'
 */
        submissionsForm.head = (args: { groupCode: string | number } | [groupCode: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: submissions.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    submissions.form = submissionsForm
/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::review
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:93
 * @route '/faculty/adviser/thesis-review/{groupCode}/{submissionId}'
 */
export const review = (args: { groupCode: string | number, submissionId: string | number } | [groupCode: string | number, submissionId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: review.url(args, options),
    method: 'get',
})

review.definition = {
    methods: ["get","head"],
    url: '/faculty/adviser/thesis-review/{groupCode}/{submissionId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::review
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:93
 * @route '/faculty/adviser/thesis-review/{groupCode}/{submissionId}'
 */
review.url = (args: { groupCode: string | number, submissionId: string | number } | [groupCode: string | number, submissionId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    groupCode: args[0],
                    submissionId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        groupCode: args.groupCode,
                                submissionId: args.submissionId,
                }

    return review.definition.url
            .replace('{groupCode}', parsedArgs.groupCode.toString())
            .replace('{submissionId}', parsedArgs.submissionId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::review
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:93
 * @route '/faculty/adviser/thesis-review/{groupCode}/{submissionId}'
 */
review.get = (args: { groupCode: string | number, submissionId: string | number } | [groupCode: string | number, submissionId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: review.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::review
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:93
 * @route '/faculty/adviser/thesis-review/{groupCode}/{submissionId}'
 */
review.head = (args: { groupCode: string | number, submissionId: string | number } | [groupCode: string | number, submissionId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: review.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::review
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:93
 * @route '/faculty/adviser/thesis-review/{groupCode}/{submissionId}'
 */
    const reviewForm = (args: { groupCode: string | number, submissionId: string | number } | [groupCode: string | number, submissionId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: review.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::review
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:93
 * @route '/faculty/adviser/thesis-review/{groupCode}/{submissionId}'
 */
        reviewForm.get = (args: { groupCode: string | number, submissionId: string | number } | [groupCode: string | number, submissionId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: review.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Adviser\AdviseeManagement\ThesisReview::review
 * @see app/Http/Controllers/Faculty/Adviser/AdviseeManagement/ThesisReview.php:93
 * @route '/faculty/adviser/thesis-review/{groupCode}/{submissionId}'
 */
        reviewForm.head = (args: { groupCode: string | number, submissionId: string | number } | [groupCode: string | number, submissionId: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: review.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    review.form = reviewForm
const ThesisReview = { index, submissions, review }

export default ThesisReview