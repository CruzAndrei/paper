import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::document_review
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
export const document_review = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: document_review.url(args, options),
    method: 'get',
})

document_review.definition = {
    methods: ["get","head"],
    url: '/faculty/adviser/evaluation/document_review/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::document_review
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
document_review.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return document_review.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::document_review
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
document_review.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: document_review.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::document_review
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
document_review.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: document_review.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::document_review
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
    const document_reviewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: document_review.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::document_review
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
        document_reviewForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: document_review.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::document_review
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:139
 * @route '/faculty/adviser/evaluation/document_review/{id}'
 */
        document_reviewForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: document_review.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    document_review.form = document_reviewForm
/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::grading
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
export const grading = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grading.url(args, options),
    method: 'get',
})

grading.definition = {
    methods: ["get","head"],
    url: '/faculty/adviser/evaluation/grading/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::grading
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
grading.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return grading.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::grading
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
grading.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: grading.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::grading
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
grading.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: grading.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::grading
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
    const gradingForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: grading.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::grading
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
        gradingForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: grading.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Faculty\Adviser\EvaluationGrading::grading
 * @see app/Http/Controllers/Faculty/Adviser/EvaluationGrading.php:248
 * @route '/faculty/adviser/evaluation/grading/{id}'
 */
        gradingForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: grading.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    grading.form = gradingForm
const evaluation = {
    index: Object.assign(index, index),
store: Object.assign(store, store),
document_review: Object.assign(document_review, document_review),
grading: Object.assign(grading, grading),
}

export default evaluation