import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::index
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:21
 * @route '/faculty/adviser/evaluation'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/faculty/adviser/evaluation',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::index
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:21
 * @route '/faculty/adviser/evaluation'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::index
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:21
 * @route '/faculty/adviser/evaluation'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::index
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:21
 * @route '/faculty/adviser/evaluation'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::index
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:21
 * @route '/faculty/adviser/evaluation'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::index
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:21
 * @route '/faculty/adviser/evaluation'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::index
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:21
 * @route '/faculty/adviser/evaluation'
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
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::store
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:390
 * @route '/faculty/adviser/evaluation'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/faculty/adviser/evaluation',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::store
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:390
 * @route '/faculty/adviser/evaluation'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::store
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:390
 * @route '/faculty/adviser/evaluation'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::store
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:390
 * @route '/faculty/adviser/evaluation'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::store
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:390
 * @route '/faculty/adviser/evaluation'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showDocumentReview
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
export const showDocumentReview = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showDocumentReview.url(args, options),
    method: 'get',
})

showDocumentReview.definition = {
    methods: ["get","head"],
    url: '/faculty/adviser/evaluation/document_review/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showDocumentReview
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
showDocumentReview.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showDocumentReview.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showDocumentReview
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
showDocumentReview.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showDocumentReview.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showDocumentReview
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
showDocumentReview.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showDocumentReview.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showDocumentReview
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
    const showDocumentReviewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showDocumentReview.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showDocumentReview
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
        showDocumentReviewForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showDocumentReview.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showDocumentReview
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
        showDocumentReviewForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showDocumentReview.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showDocumentReview.form = showDocumentReviewForm
/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showEvaluation
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
export const showEvaluation = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showEvaluation.url(args, options),
    method: 'get',
})

showEvaluation.definition = {
    methods: ["get","head"],
    url: '/faculty/adviser/evaluation/grading/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showEvaluation
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
showEvaluation.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showEvaluation.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showEvaluation
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
showEvaluation.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showEvaluation.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showEvaluation
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
showEvaluation.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showEvaluation.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showEvaluation
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
    const showEvaluationForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: showEvaluation.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showEvaluation
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
        showEvaluationForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showEvaluation.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::showEvaluation
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
        showEvaluationForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: showEvaluation.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    showEvaluation.form = showEvaluationForm
const EvaluationGrading = { index, store, showDocumentReview, showEvaluation }

export default EvaluationGrading